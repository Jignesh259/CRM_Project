const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

/** Generic error extractor for FastAPI responses */
function extractError(error: any, fallback: string): string {
  if (!error) return fallback;
  if (typeof error.detail === 'string') return error.detail;
  if (Array.isArray(error.detail)) return error.detail[0]?.msg || fallback;
  if (typeof error.message === 'string') return error.message;
  return fallback;
}

/** Global wrapper for fetch to intercept 401/403 errors */
async function apiRequest(url: string | URL, options: RequestInit = {}): Promise<Response> {
  const response = await fetch(url, options);

  if (response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    const path = window.location.pathname;
    if (!path.includes('/login') && !path.includes('/register') && !path.includes('/forgot-password') && !path.includes('/verify-otp')) {
      window.location.href = '/login?expired=true';
    }
  } else if (response.status === 403) {
    console.error('Access Forbidden (403): Insufficient permissions.');
  }

  return response;
}

const initInventoryData = () => {
  const keys = [
    'cs_products',
    'cs_categories',
    'cs_brands',
    'cs_warehouses',
    'cs_transfers',
    'cs_inventory_ledger',
    'cs_vendors',
    'cs_vendor_payments',
    'cs_purchase_orders',
    'cs_sales_orders',
    'cs_shipments',
    'cs_quotations',
    'cs_invoices',
    'cs_customer_payments',
    'cs_expenses',
    'cs_users',
    'cs_roles',
    'cs_security_logs',
    'cs_notifications',
    'cs_announcements'
  ];
  keys.forEach(key => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, '[]');
    }
  });

  if (!localStorage.getItem('cs_system_settings')) {
    const defaultSystemSettings = {
      profile: { fullName: '', email: '', phone: '', jobTitle: '', avatar: '' },
      organization: { companyName: '', taxId: '', logo: '', address: '' },
      theme: { mode: 'light', primaryColor: '#005dac', layoutPreset: 'Standard' },
      email: { smtpHost: '', smtpPort: '', smtpUser: '', emailTriggerLowStock: true, emailTriggerNewInvoices: true },
      system: { timezone: 'UTC', currency: 'INR (₹)', sessionDuration: '30 Minutes', autoBackup: true }
    };
    localStorage.setItem('cs_system_settings', JSON.stringify(defaultSystemSettings));
  }
};

export const api = {
  // ═══ AUTHENTICATION ══════════════════════════════════════

  /** Login user and get access + refresh tokens */
  login: async (credentials: { email: string; password: string }) => {
    const response = await apiRequest(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Login failed'));
    }
    const data = await response.json();
    if (data.data?.access_token) {
      localStorage.setItem('token', data.data.access_token);
      localStorage.setItem('refresh_token', data.data.refresh_token || '');
    }
    return data;
  },

  /** Register a new user (backend will send OTP email automatically) */
  register: async (userData: {
    email: string;
    password: string;
    full_name: string;
    company_name: string;   // Required: used as the tenant identifier
    phone?: string;
  }) => {
    const response = await apiRequest(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Registration failed'));
    }
    return response.json();
  },


  /** Request a password-reset OTP (forgot password flow) */
  forgotPassword: async (email: string) => {
    const response = await apiRequest(`${API_BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to send reset OTP'));
    }
    return response.json();
  },

  /**
   * Verify OTP — works for both flows:
   *  - purpose='email_verification' → activates account, returns { verified: true }
   *  - purpose='password_reset'     → returns { reset_token: '...' }
   */
  verifyOtp: async (
    email: string,
    otp: string,
    purpose: 'email_verification' | 'password_reset' = 'email_verification'
  ) => {
    const response = await apiRequest(`${API_BASE_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp, purpose }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Invalid OTP'));
    }
    return response.json();
  },

  /**
   * Resend OTP — invalidates old code, generates a fresh one.
   * Rate limited: max 3 per 10 minutes.
   */
  resendOtp: async (
    email: string,
    purpose: 'email_verification' | 'password_reset' = 'email_verification'
  ) => {
    const response = await apiRequest(`${API_BASE_URL}/auth/resend-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, purpose }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to resend OTP'));
    }
    return response.json();
  },

  /** Reset password using the token obtained after OTP verification */
  resetPassword: async (resetData: { token: string; new_password: string }) => {
    const response = await apiRequest(`${API_BASE_URL}/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resetData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to reset password'));
    }
    return response.json();
  },

  /** Get the currently logged-in user profile */
  getMe: async () => {
    const response = await apiRequest(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch user profile'));
    }
    return response.json();
  },

  // ── Leads Endpoints ──────────────────────────────────────────

  getLeads: async (params?: {
    page?: number;
    per_page?: number;
    search?: string;
    status?: string;
  }) => {
    const url = new URL(`${API_BASE_URL}/leads`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          url.searchParams.append(key, String(val));
        }
      });
    }
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch leads'));
    }
    return response.json();
  },

  getLead: async (leadId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/leads/${leadId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch lead'));
    }
    return response.json();
  },

  createLead: async (leadData: {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    company: string;
    job_title?: string;
    website?: string;
    status?: string;
    source?: string;
    estimated_value?: number;
    notes?: string;
    owner_id?: string;
  }) => {
    const response = await apiRequest(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(leadData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create lead'));
    }
    return response.json();
  },

  updateLead: async (
    leadId: string,
    leadData: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      company?: string;
      job_title?: string;
      website?: string;
      status?: string;
      source?: string;
      estimated_value?: number;
      notes?: string;
      owner_id?: string;
    }
  ) => {
    const response = await apiRequest(`${API_BASE_URL}/leads/${leadId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(leadData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update lead'));
    }
    return response.json();
  },

  deleteLead: async (leadId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/leads/${leadId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to delete lead'));
    }
    return response.json();
  },

  addLeadActivity: async (
    leadId: string,
    activityData: {
      activity_type: string;
      subject: string;
      notes?: string;
      activity_date?: string;
      activity_time?: string;
      assigned_to_id?: string;
    }
  ) => {
    const response = await apiRequest(`${API_BASE_URL}/leads/${leadId}/activities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(activityData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to log lead activity'));
    }
    return response.json();
  },

  // ── Customers Endpoints ────────────────────────────────
  getCustomers: async (params?: { search?: string; status?: string }) => {
    const url = new URL(`${API_BASE_URL}/customers`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '' && val !== 'All') {
          url.searchParams.append(key, String(val));
        }
      });
    }
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch customers'));
    }
    return response.json();
  },

  getCustomer: async (customerId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/customers/${customerId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch customer'));
    }
    return response.json();
  },

  createCustomer: async (customerData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(customerData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create customer'));
    }
    return response.json();
  },

  updateCustomer: async (customerId: string, customerData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/customers/${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(customerData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update customer'));
    }
    return response.json();
  },

  deleteCustomer: async (customerId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/customers/${customerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to delete customer'));
    }
    return response.json();
  },

  getCustomerOrders: async (customerId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/customers/${customerId}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch customer orders'));
    }
    return response.json();
  },

  getCustomerInvoices: async (customerId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/customers/${customerId}/invoices`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch customer invoices'));
    }
    return response.json();
  },

  getCustomerPayments: async (customerId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/customers/${customerId}/payments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch customer payments'));
    }
    return response.json();
  },

  // ── Inventory Endpoints ─────────────────────────────────────
  getProducts: async (params?: { search?: string; category?: string; status?: string; page?: number; per_page?: number }) => {
    const url = new URL(`${API_BASE_URL}/inventory/products`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          url.searchParams.append(key, String(val));
        }
      });
    }
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch products'));
    }
    return response.json();
  },

  getProduct: async (productId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch product'));
    }
    return response.json();
  },

  createProduct: async (productData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create product'));
    }
    return response.json();
  },

  updateProduct: async (productId: string, productData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update product'));
    }
    return response.json();
  },

  deleteProduct: async (productId: string) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to delete product'));
    }
    return response.json();
  },

  getCategories: async () => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch categories'));
    }
    return response.json();
  },

  getBrands: async () => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/brands`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch brands'));
    }
    return response.json();
  },

  createCategory: async (categoryData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(categoryData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create category'));
    }
    return response.json();
  },

  updateCategory: async (id: string, categoryData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(categoryData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update category'));
    }
    return response.json();
  },

  deleteCategory: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to delete category'));
    }
    return response.json();
  },

  createBrand: async (brandData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/brands`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(brandData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create brand'));
    }
    return response.json();
  },

  updateBrand: async (id: string, brandData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/brands/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(brandData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update brand'));
    }
    return response.json();
  },

  deleteBrand: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/inventory/brands/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to delete brand'));
    }
    return response.json();
  },

  // ── Warehouses & Transfers Mock Endpoints ──
  getWarehouses: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_warehouses') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  getTransfers: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_transfers') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  createTransfer: async (transferData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_transfers') || '[]';
    const list = JSON.parse(dataStr);
    const newTransfer = {
      ...transferData,
      id: `TR-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString(),
      status: 'In Transit'
    };
    list.unshift(newTransfer);
    localStorage.setItem('cs_transfers', JSON.stringify(list));

    // Create ledger entry
    const ledgerStr = localStorage.getItem('cs_inventory_ledger') || '[]';
    const ledger = JSON.parse(ledgerStr);
    ledger.unshift({
      id: `TX-${Math.floor(9000 + Math.random() * 1000)}`,
      productId: transferData.productId,
      productName: transferData.productName || 'Product',
      type: 'Transfer',
      qty: transferData.qty,
      warehouse: transferData.fromWarehouse,
      date: newTransfer.date,
      status: 'In Transit',
      ref: newTransfer.id
    });
    localStorage.setItem('cs_inventory_ledger', JSON.stringify(ledger));

    // Deduct stock from origin product
    const prodStr = localStorage.getItem('cs_products') || '[]';
    const products = JSON.parse(prodStr);
    const prodIdx = products.findIndex((p: any) => p.id === transferData.productId);
    if (prodIdx !== -1) {
      products[prodIdx].stock = Math.max(0, products[prodIdx].stock - transferData.qty);
      localStorage.setItem('cs_products', JSON.stringify(products));
    }

    return { success: true, data: newTransfer };
  },

  receiveStock: async (trxData: any) => {
    initInventoryData();
    const ledgerStr = localStorage.getItem('cs_inventory_ledger') || '[]';
    const ledger = JSON.parse(ledgerStr);
    const newTrx = {
      ...trxData,
      id: `TX-${Math.floor(9000 + Math.random() * 1000)}`,
      type: 'Stock In',
      date: new Date().toISOString(),
      status: 'Completed'
    };
    ledger.unshift(newTrx);
    localStorage.setItem('cs_inventory_ledger', JSON.stringify(ledger));

    // Add stock to product
    const prodStr = localStorage.getItem('cs_products') || '[]';
    const products = JSON.parse(prodStr);
    const prodIdx = products.findIndex((p: any) => p.id === trxData.productId);
    if (prodIdx !== -1) {
      products[prodIdx].stock = products[prodIdx].stock + Number(trxData.qty);
      localStorage.setItem('cs_products', JSON.stringify(products));
    }
    return { success: true, data: newTrx };
  },

  dispatchStock: async (trxData: any) => {
    initInventoryData();
    const ledgerStr = localStorage.getItem('cs_inventory_ledger') || '[]';
    const ledger = JSON.parse(ledgerStr);
    const newTrx = {
      ...trxData,
      id: `TX-${Math.floor(9000 + Math.random() * 1000)}`,
      type: 'Stock Out',
      qty: -Math.abs(Number(trxData.qty)),
      date: new Date().toISOString(),
      status: 'Completed'
    };
    ledger.unshift(newTrx);
    localStorage.setItem('cs_inventory_ledger', JSON.stringify(ledger));

    // Deduct stock from product
    const prodStr = localStorage.getItem('cs_products') || '[]';
    const products = JSON.parse(prodStr);
    const prodIdx = products.findIndex((p: any) => p.id === trxData.productId);
    if (prodIdx !== -1) {
      products[prodIdx].stock = Math.max(0, products[prodIdx].stock - Math.abs(Number(trxData.qty)));
      localStorage.setItem('cs_products', JSON.stringify(products));
    }
    return { success: true, data: newTrx };
  },

  getInventoryLedger: async () => {
    initInventoryData();
    const ledgerStr = localStorage.getItem('cs_inventory_ledger') || '[]';
    return { success: true, data: JSON.parse(ledgerStr) };
  },

  // ── Vendors Mock Endpoints ──
  getVendors: async (params?: { search?: string; category?: string; status?: string }) => {
    const url = new URL(`${API_BASE_URL}/vendors`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '' && val !== 'All') {
          url.searchParams.append(key, String(val));
        }
      });
    }
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch vendors'));
    }
    const res = await response.json();
    return { success: true, data: res.data?.vendors || [] };
  },

  getVendorCategories: async (): Promise<{ success: boolean; data: string[] }> => {
    const response = await apiRequest(`${API_BASE_URL}/vendors/categories`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      return { success: true, data: [] };
    }
    const res = await response.json();
    return { success: true, data: res.data || [] };
  },

  getVendor: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/vendors/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Vendor not found'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  createVendor: async (vendorData: any) => {
    const payload = {
      name: vendorData.name,
      category: vendorData.category,
      contact_person: vendorData.contactPerson,
      email: vendorData.email,
      phone: vendorData.phone,
      address: vendorData.address,
      description: vendorData.description,
      payment_terms: vendorData.paymentTerms,
      min_order_qty: vendorData.minOrderQty,
      lead_time: vendorData.leadTime,
      status: vendorData.status || 'Active',
    };
    const response = await apiRequest(`${API_BASE_URL}/vendors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create vendor'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  updateVendor: async (id: string, vendorData: any) => {
    const payload: any = {};
    if (vendorData.name !== undefined) payload.name = vendorData.name;
    if (vendorData.category !== undefined) payload.category = vendorData.category;
    if (vendorData.contactPerson !== undefined) payload.contact_person = vendorData.contactPerson;
    if (vendorData.email !== undefined) payload.email = vendorData.email;
    if (vendorData.phone !== undefined) payload.phone = vendorData.phone;
    if (vendorData.address !== undefined) payload.address = vendorData.address;
    if (vendorData.description !== undefined) payload.description = vendorData.description;
    if (vendorData.paymentTerms !== undefined) payload.payment_terms = vendorData.paymentTerms;
    if (vendorData.minOrderQty !== undefined) payload.min_order_qty = vendorData.minOrderQty;
    if (vendorData.leadTime !== undefined) payload.lead_time = vendorData.leadTime;
    if (vendorData.status !== undefined) payload.status = vendorData.status;
    if (vendorData.performanceScore !== undefined) payload.performance_score = vendorData.performanceScore;
    if (vendorData.ytdSpend !== undefined) payload.ytd_spend = vendorData.ytdSpend;
    if (vendorData.activePOs !== undefined) payload.active_pos = vendorData.activePOs;
    if (vendorData.pendingDeliveries !== undefined) payload.pending_deliveries = vendorData.pendingDeliveries;

    const response = await apiRequest(`${API_BASE_URL}/vendors/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update vendor'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  getVendorPayments: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_vendor_payments') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  createVendorPayment: async (paymentData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_vendor_payments') || '[]';
    const list = JSON.parse(dataStr);
    const newPayment = {
      ...paymentData,
      id: `VPAY-${Math.floor(2000 + Math.random() * 8000)}`,
      date: new Date().toISOString(),
      status: 'Completed'
    };
    list.unshift(newPayment);
    localStorage.setItem('cs_vendor_payments', JSON.stringify(list));

    // Update Vendor spend
    const vendorStr = localStorage.getItem('cs_vendors') || '[]';
    const vendors = JSON.parse(vendorStr);
    const vIdx = vendors.findIndex((v: any) => v.id === paymentData.vendorId);
    if (vIdx !== -1) {
      vendors[vIdx].ytdSpend += Number(paymentData.amount);
      localStorage.setItem('cs_vendors', JSON.stringify(vendors));
    }

    return { success: true, data: newPayment };
  },

  // ── Purchase Orders Endpoints ──
  getPurchaseOrders: async (params?: { search?: string; status?: string }) => {
    const url = new URL(`${API_BASE_URL}/purchase-orders`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          url.searchParams.append(key, String(val));
        }
      });
    }
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch purchase orders'));
    }
    const res = await response.json();
    return { success: true, data: res.data || [] };
  },

  getPurchaseOrder: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/purchase-orders/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Purchase order not found'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  createPurchaseOrder: async (poData: any) => {
    const payload = {
      vendor_id: poData.vendorId,
      vendor_name: poData.vendorName,
      total: poData.total,
      expected_delivery: poData.expectedDelivery,
      items: poData.items,
      notes: poData.notes,
      status: poData.status || 'Sent',
    };
    const response = await apiRequest(`${API_BASE_URL}/purchase-orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create purchase order'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  updatePurchaseOrder: async (id: string, updates: { status?: string; comments?: any[]; notes?: string }) => {
    const response = await apiRequest(`${API_BASE_URL}/purchase-orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update purchase order'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },
  getSalesOrder: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/sales-orders/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Sales order not found'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  getSalesOrders: async (params?: { search?: string; status?: string }) => {
    const url = new URL(`${API_BASE_URL}/sales-orders`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          url.searchParams.append(key, String(val));
        }
      });
    }
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch sales orders'));
    }
    const res = await response.json();
    return { success: true, data: res.data || [] };
  },

  // ── Shipments Endpoints ──
  getShipments: async (params?: { status?: string }) => {
    const url = new URL(`${API_BASE_URL}/shipments`);
    if (params?.status) url.searchParams.append('status', params.status);
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch shipments'));
    }
    const res = await response.json();
    return { success: true, data: res.data || [] };
  },

  getShipment: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/shipments/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Shipment not found'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  updateShipmentStatus: async (id: string, update: { status: string; activity: string }) => {
    const response = await apiRequest(`${API_BASE_URL}/shipments/${id}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(update),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update shipment status'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  // ── Quotations Endpoints ──
  getQuotes: async (params?: { search?: string; status?: string }) => {
    const url = new URL(`${API_BASE_URL}/quotations`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '' && val !== 'All') {
          url.searchParams.append(key, String(val));
        }
      });
    }
    const response = await apiRequest(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch quotations'));
    }
    const res = await response.json();
    return { success: true, data: res.data || [] };
  },

  getQuote: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/quotations/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Quotation not found'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  createQuote: async (quoteData: any) => {
    const payload = {
      customer_id: quoteData.customerId,
      customer_name: quoteData.customerName,
      total: quoteData.total,
      valid_until: quoteData.validUntil,
      items: quoteData.items,
      notes: quoteData.notes,
      status: quoteData.status || 'Sent',
    };
    const response = await apiRequest(`${API_BASE_URL}/quotations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create quotation'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  updateQuote: async (id: string, updates: { status?: string; notes?: string }) => {
    const response = await apiRequest(`${API_BASE_URL}/quotations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update quotation'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  // ── Customer Invoices Endpoints ──
  getInvoices: async () => {
    const response = await apiRequest(`${API_BASE_URL}/invoices`, {
      method: 'GET',
      headers: { ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch invoices'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  getInvoice: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/invoices/${id}`, {
      method: 'GET',
      headers: { ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch invoice'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  createInvoice: async (invoiceData: any) => {
    const payload = {
      id: invoiceData.id,
      customerId: invoiceData.customerId,
      customerName: invoiceData.customerName,
      date: invoiceData.date,
      dueDate: invoiceData.dueDate,
      items: invoiceData.items,
      subtotal: invoiceData.subtotal,
      tax: invoiceData.tax,
      total: invoiceData.total,
      status: invoiceData.status || 'Unpaid',
      history: invoiceData.history,
    };
    const response = await apiRequest(`${API_BASE_URL}/invoices`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create invoice'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  updateInvoice: async (id: string, invoiceData: any) => {
    const payload = {
      status: invoiceData.status,
      dueDate: invoiceData.dueDate,
      history: invoiceData.history,
    };
    const response = await apiRequest(`${API_BASE_URL}/invoices/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update invoice'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  // ── Financial & Account Endpoints ──
  getCustomerPaymentsLocal: async () => {
    const response = await apiRequest(`${API_BASE_URL}/payments`, {
      method: 'GET',
      headers: { ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch payments'));
    }
    const res = await response.json();
    const mapped = (res.data || []).map((p: any) => ({
      ...p,
      paymentMethod: p.method || p.paymentMethod
    }));
    return { success: true, data: mapped };
  },

  createCustomerPaymentLocal: async (paymentData: any) => {
    const payload = {
      id: paymentData.id,
      invoiceId: paymentData.invoiceId,
      customerId: paymentData.customerId,
      customerName: paymentData.customerName,
      amount: paymentData.amount,
      method: paymentData.paymentMethod || paymentData.method,
      status: paymentData.status || 'Pending',
      date: paymentData.date,
      transactionFee: paymentData.transactionFee || 0.0,
      settlementDate: paymentData.settlementDate,
    };
    const response = await apiRequest(`${API_BASE_URL}/payments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create payment'));
    }
    const res = await response.json();
    const mapped = res.data ? { ...res.data, paymentMethod: res.data.method } : null;
    return { success: true, data: mapped };
  },

  getPaymentDetails: async (id: string) => {
    const response = await apiRequest(`${API_BASE_URL}/payments/${id}`, {
      method: 'GET',
      headers: { ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch payment details'));
    }
    const res = await response.json();
    const mapped = res.data ? { ...res.data, paymentMethod: res.data.method } : null;
    return { success: true, data: mapped };
  },

  updatePayment: async (id: string, paymentData: any) => {
    const payload = {
      status: paymentData.status,
      settlement_date: paymentData.settlementDate,
    };
    const response = await apiRequest(`${API_BASE_URL}/payments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update payment'));
    }
    const res = await response.json();
    const mapped = res.data ? { ...res.data, paymentMethod: res.data.method } : null;
    return { success: true, data: mapped };
  },

  getExpenses: async () => {
    const response = await apiRequest(`${API_BASE_URL}/expenses`, {
      method: 'GET',
      headers: { ...api.getAuthHeaders() },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch expenses'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  createExpense: async (expenseData: any) => {
    const payload = {
      id: expenseData.id,
      amount: expenseData.amount,
      category: expenseData.category,
      merchant: expenseData.merchant,
      date: expenseData.date,
      status: expenseData.status || 'Pending',
      description: expenseData.description,
      approvedBy: expenseData.approvedBy,
    };
    const response = await apiRequest(`${API_BASE_URL}/expenses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create expense'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  updateExpense: async (id: string, expenseData: any) => {
    const payload = {
      status: expenseData.status,
      approved_by: expenseData.approvedBy,
    };
    const response = await apiRequest(`${API_BASE_URL}/expenses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...api.getAuthHeaders() },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update expense'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  // ── Phase 2 User & Admin Mock Endpoints ──
  getUsers: async () => {
    const response = await apiRequest(`${API_BASE_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch users'));
    }
    const res = await response.json();
    const mapped = (res.data?.users || []).map((u: any) => ({
      id: u.id,
      name: u.full_name,
      email: u.email,
      role: u.roles && u.roles.length > 0 ? u.roles[0] : 'User',
      department: u.department || 'General',
      status: u.is_active ? 'Active' : 'Suspended',
      lastLogin: u.last_login || null,
    }));
    return { success: true, data: mapped };
  },

  createUser: async (userData: any) => {
    const response = await apiRequest(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify({
        email: userData.email,
        full_name: userData.name,
        role: userData.role,
        department: userData.department,
        phone: userData.phone || null
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create user'));
    }
    const res = await response.json();
    const created = res.data;
    return {
      success: true,
      data: {
        id: created.id,
        name: created.full_name,
        email: created.email,
        role: created.roles && created.roles.length > 0 ? created.roles[0] : 'User',
        department: created.department || 'General',
        status: created.is_active ? 'Active' : 'Suspended',
        lastLogin: null
      }
    };
  },

  updateUser: async (id: string, updates: any) => {
    const payload: any = {};
    if (updates.status !== undefined) {
      payload.is_active = updates.status === 'Active';
    }
    if (updates.name !== undefined) {
      payload.full_name = updates.name;
    }
    if (updates.phone !== undefined) {
      payload.phone = updates.phone;
    }
    if (updates.department !== undefined) {
      payload.department = updates.department;
    }
    if (updates.role !== undefined) {
      payload.role = updates.role;
    }

    const response = await apiRequest(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to update user'));
    }
    const res = await response.json();
    const updated = res.data;
    return {
      success: true,
      data: {
        id: updated.id,
        name: updated.full_name,
        email: updated.email,
        role: updated.roles && updated.roles.length > 0 ? updated.roles[0] : 'User',
        department: updated.department || 'General',
        status: updated.is_active ? 'Active' : 'Suspended'
      }
    };
  },

  getRoles: async () => {
    const response = await apiRequest(`${API_BASE_URL}/roles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch roles'));
    }
    const res = await response.json();
    const mapped = (res.data || []).map((r: any) => {
      const perms = r.permissions || [];
      const modules: Record<string, string> = {
        CRM: perms.includes('customer.read') ? 'View' : 'None',
        Inventory: perms.includes('inventory.read') ? 'View' : 'None',
        Finance: 'None',
        Settings: perms.includes('role.manage') ? 'Manage' : 'None'
      };
      if (perms.includes('customer.create') || perms.includes('customer.update')) {
        modules.CRM = 'Edit';
      }
      if (perms.includes('inventory.create') || perms.includes('inventory.update')) {
        modules.Inventory = 'Edit';
      }
      if (r.name.toLowerCase() === 'admin' || r.name.toLowerCase() === 'administrator') {
        modules.CRM = 'Manage';
        modules.Inventory = 'Manage';
        modules.Finance = 'Manage';
        modules.Settings = 'Manage';
      }
      return {
        id: r.id,
        name: r.name,
        description: r.description || '',
        usersCount: 0,
        modules
      };
    });
    return { success: true, data: mapped };
  },

  createRole: async (roleData: { name: string; description: string }) => {
    const response = await apiRequest(`${API_BASE_URL}/roles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
      body: JSON.stringify(roleData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to create role'));
    }
    const res = await response.json();
    return { success: true, data: res.data };
  },

  updateRole: async (_id: string, roleData: any) => {
    return { success: true, data: roleData };
  },

  getSecurityLogs: async () => {
    const response = await apiRequest(`${API_BASE_URL}/audit-logs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...api.getAuthHeaders(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(extractError(error, 'Failed to fetch audit logs'));
    }
    const res = await response.json();
    const mapped = (res.data?.logs || []).map((log: any) => ({
      id: log.id,
      userId: log.userId,
      userName: log.userName,
      action: log.action,
      module: log.module,
      status: log.status,
      ipAddress: log.ipAddress,
      timestamp: log.timestamp,
      details: typeof log.details === 'object' ? JSON.stringify(log.details) : log.details
    }));
    return { success: true, data: mapped };
  },

  // ── Phase 2 Communication Mock Endpoints ──
  getNotifications: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_notifications') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  markNotificationAsRead: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_notifications') || '[]';
    const list = JSON.parse(dataStr);
    const idx = list.findIndex((n: any) => n.id === id);
    if (idx !== -1) {
      list[idx].read = true;
      localStorage.setItem('cs_notifications', JSON.stringify(list));
    }
    return { success: true };
  },

  getAnnouncements: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_announcements') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  createAnnouncement: async (annData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_announcements') || '[]';
    const list = JSON.parse(dataStr);
    const newAnn = {
      ...annData,
      id: `ANN-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString(),
      author: 'John Doe',
      role: 'Administrator'
    };
    list.unshift(newAnn);
    localStorage.setItem('cs_announcements', JSON.stringify(list));
    return { success: true, data: newAnn };
  },

  // ── Phase 2 Settings Mock Endpoints ──
  getSystemSettings: async () => {
    initInventoryData();
    const activeEmail = localStorage.getItem('cs_current_user_email') || 'default';
    const key = `cs_system_settings_${activeEmail}`;
    let dataStr = localStorage.getItem(key);
    if (!dataStr) {
      const fallback = localStorage.getItem('cs_system_settings');
      if (fallback) {
        localStorage.setItem(key, fallback);
        dataStr = fallback;
      } else {
        const initial = {
          theme: {
            mode: 'light',
            primaryColor: '#1976D2',
            density: 'comfortable',
            fontSize: 'medium'
          }
        };
        localStorage.setItem(key, JSON.stringify(initial));
        dataStr = JSON.stringify(initial);
      }
    }
    return { success: true, data: JSON.parse(dataStr) };
  },

  updateSystemSettings: async (section: string, settingsData: any) => {
    initInventoryData();
    const activeEmail = localStorage.getItem('cs_current_user_email') || 'default';
    const key = `cs_system_settings_${activeEmail}`;
    const dataStr = localStorage.getItem(key) || localStorage.getItem('cs_system_settings') || '{}';
    const current = JSON.parse(dataStr);
    current[section] = { ...current[section], ...settingsData };
    localStorage.setItem(key, JSON.stringify(current));
    if (activeEmail === 'default') {
      localStorage.setItem('cs_system_settings', JSON.stringify(current));
    }
    return { success: true, data: current };
  },

  // ═══ HELPERS ════════════════════════════════════════════

  getAuthHeaders: (): Record<string, string> => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  },
};
