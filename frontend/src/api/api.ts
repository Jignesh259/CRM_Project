const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

/** Generic error extractor for FastAPI responses */
function extractError(error: any, fallback: string): string {
  if (!error) return fallback;
  if (typeof error.detail === 'string') return error.detail;
  if (Array.isArray(error.detail)) return error.detail[0]?.msg || fallback;
  if (typeof error.message === 'string') return error.message;
  return fallback;
}

const initInventoryData = () => {
  if (!localStorage.getItem('cs_products')) {
    const defaultProducts = [
      {
        id: 'CS-RTR-9000-V2',
        sku: 'CS-RTR-9000-V2',
        name: 'Nexus Enterprise Router 9000',
        category: 'Networking Core',
        brand: 'Nexus Connect',
        cost: 1240,
        retail: 1899,
        initialStock: 170,
        stock: 142,
        lowStock: 50,
        status: 'Active',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmTKL8C728Ky103hKeR_gzw7juI0cNH8R7PCVaANrGKu1Kse6nalh2WBnbLLHPuOHcVnJoyyXByyLaBdDmtrsUXizqlEEvdPqYnjueYOfKEUnIa_yragu78_xYE2fxVFEi6988mEVZvupyboBz40bNDLHef4AL13Xw1OSIP4LjeMrTjEr9luP31WfsHD834vTx-GC_XRd7gcdeFbVF5TQ222wgazpht_zF67SsLnKhfVURkECuaDdK8Gyj2ZYU0Peo0GlZjSl-tA',
        specs: {
          'Form Factor': '1U Rackmount',
          'Weight': '4.2 kg',
          'Power Supply': 'Dual AC 500W',
          'Warranty': '3 Yrs Next Business Day'
        },
        supplier: {
          name: 'NetTech Distributors',
          leadTime: '14-21 Days',
          moq: '10 Units',
          lastOrdered: 'Oct 12, 2023'
        },
        activity: [
          { id: '1', type: 'Stock Allocated', text: '12 units committed to Order #ORD-8821', subtext: 'Initiated by System Auto-Allocation', timestamp: 'Today, 10:45 AM' },
          { id: '2', type: 'Inventory Received', text: '50 units restocked from PO-2023-144', subtext: 'Received by Warehouse Team Alpha', timestamp: 'Nov 02, 2:15 PM' },
          { id: '3', type: 'Price Update', text: 'MSRP updated from $1,850.00 to $1,899.00', subtext: 'Updated by Sarah Jenkins (Product Mgr)', timestamp: 'Oct 28, 9:00 AM' }
        ]
      },
      {
        id: 'SKU-8924',
        sku: 'SKU-8924',
        name: 'Quantum Smart Watch Gen 4',
        category: 'Electronics',
        brand: 'TechNova',
        cost: 180,
        retail: 299,
        initialStock: 150,
        stock: 142,
        lowStock: 15,
        status: 'Active',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAriTukL4roMobEFMd93KnA2H2zcjka6yR5EJ-C4mhzepkSEmVuah6SYFouE2I7QdBadTyPtzxz_2OzEypZvytoF25RzuxjoIzPYqR_VJYcrfnpv5iZ2Q4I2NnsJeFRX7fU_myRoNOThlNxh1jUvBpBgAuvLX8gyNKgA2nFSzE5ZYBovMh2eiFFOaibn-diwLYxZ9lI-4DZWcS-DeQ9hzV1QMqdHdBM3qDhJzQF7-_tF6_GT39CbBzAjxrfFgTR2d0AUrQwmz3OgjU',
        specs: {
          'Battery': 'Up to 5 Days',
          'Chipset': 'NovaChip S2',
          'Display': 'AMOLED 1.4"',
          'Water Resistance': '50m IP68'
        },
        supplier: {
          name: 'TechNova Manufacturing',
          leadTime: '7-10 Days',
          moq: '50 Units',
          lastOrdered: 'May 10, 2026'
        },
        activity: []
      },
      {
        id: 'SKU-4412',
        sku: 'SKU-4412',
        name: 'AeroNoise Cancelling Headphones',
        category: 'Audio',
        brand: 'AeroDynamics',
        cost: 90,
        retail: 149.50,
        initialStock: 20,
        stock: 4,
        lowStock: 10,
        status: 'Active',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp6F23RGP5-nuP-WQcblmqPzj641hmbTmz3XqnnEhJruKKHSVVGNV0MQT1_SzLRP9NqM78JWxzP71QgRbIeGA4OO1bqxmATX082yivNT_Gma3vTQForoslTh5VeEdnKArGvR_pD5lpEpJqwtg7ctkO_ASxxKQOX_KdUyxm9g6aorUfnz8Q0X82SQ5MHh5Q005RS-1U7P1RtULILSbTz4ErUuedWF-eJ5ui9nO8gP9p0vUIiWFlUkscLrHcULdPWvp9ppyU49_5iEM',
        specs: {
          'Battery': 'Up to 30 Hours',
          'Connectivity': 'Bluetooth 5.2',
          'Weight': '250g',
          'Color': 'Matte Black'
        },
        supplier: {
          name: 'AeroDynamics Audio',
          leadTime: '5-7 Days',
          moq: '25 Units',
          lastOrdered: 'June 01, 2026'
        },
        activity: []
      },
      {
        id: 'SKU-9001',
        sku: 'SKU-9001',
        name: 'ErgoPro Executive Task Chair',
        category: 'Furniture',
        brand: 'TechNova',
        cost: 550,
        retail: 850,
        initialStock: 35,
        stock: 28,
        lowStock: 5,
        status: 'Active',
        image: '',
        specs: {
          'Load Capacity': '150 kg',
          'Mechanism': 'Synchro-Tilt',
          'Back Material': 'Premium Mesh',
          'Armrest': '4D Adjustable'
        },
        supplier: {
          name: 'OfficeFit Corp',
          leadTime: '20-30 Days',
          moq: '5 Units',
          lastOrdered: 'Jan 15, 2026'
        },
        activity: []
      },
      {
        id: 'SKU-1123',
        sku: 'SKU-1123',
        name: 'Nexus Connect Display 15"',
        category: 'Electronics',
        brand: 'Nexus Connect',
        cost: 380,
        retail: 599,
        initialStock: 100,
        stock: 85,
        lowStock: 15,
        status: 'Active',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_lSKvB0nTp_wudgJ1EbDt6qYCHumnJk8EOA2ovCuaFwKZl_PtH9Y0D14afyCzZkRGp0lJBOfjRftY-JrTk4ucDVfRGGvpCu1zFsgIAN79TS-W2HKkzr4AAfZUelYw5hkfHvcIyoClh5eZ4Zg7ooZFwtlaKVjqFYFfOuzC9EGOxGG08fo2iwGivDo7TI_5Hz32ct7p68Oobg2a4Ft3LSAwKcMmFJpomHCYbvrlj_Bp4oCxruixkeASao2RMhiZzC93STY_hjnew2s',
        specs: {
          'Size': '15.6 Inch',
          'Resolution': '4K UHD',
          'Ports': 'USB-C, HDMI',
          'Touchscreen': '10-Point Multi-touch'
        },
        supplier: {
          name: 'Nexus Displays',
          leadTime: '10-14 Days',
          moq: '20 Units',
          lastOrdered: 'Feb 20, 2026'
        },
        activity: []
      }
    ];
    localStorage.setItem('cs_products', JSON.stringify(defaultProducts));
  }

  if (!localStorage.getItem('cs_categories')) {
    const defaultCategories = [
      { id: '1', name: 'Hardware & Devices', description: 'Physical computing equipment and peripherals.', productsCount: 1245, status: 'Active', icon: 'laptop_mac', parentId: '' },
      { id: '2', name: 'Software Licenses', description: 'Digital products, subscriptions, and SaaS.', productsCount: 842, status: 'Active', icon: 'dns', parentId: '' },
      { id: '3', name: 'Office Furniture', description: 'Desks, ergonomic chairs, and storage units.', productsCount: 156, status: 'Draft', icon: 'desk', parentId: '' },
      { id: '4', name: 'Networking Core', description: 'Routers, switches, firewalls and access points.', productsCount: 12, status: 'Active', icon: 'router', parentId: '1' },
      { id: '5', name: 'Electronics', description: 'Smart devices, IoT devices and display units.', productsCount: 227, status: 'Active', icon: 'devices', parentId: '1' },
      { id: '6', name: 'Audio', description: 'Headphones, microphones and speakers.', productsCount: 45, status: 'Active', icon: 'headset', parentId: '1' }
    ];
    localStorage.setItem('cs_categories', JSON.stringify(defaultCategories));
  }

  if (!localStorage.getItem('cs_brands')) {
    const defaultBrands = [
      { id: '1', name: 'TechNova', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc0ldxIOicBHxOsnciVphJEG-23bXYFDbjuK9Aj8sJNGL2_8RZoXEipW3CyRfOnnRoj17l3zcrlcwgQ1hvtlDB2kjHjBzz4a96OMPeCG0wop4V_7n9FaXHmxN2aFwauyH-J_FuuYZEFGvgocmTinpKZTFL-9ijYBfv7ASo0D1onO6_f8ioyLYfbHYaqAkmk7eftiGRmyJP5n6ISU1HjisKHPvh57bFpJRO9ol_-HekKYqOrlfjtJRFLcOoP4dLK15UfMoWY-SKNbk', productsCount: 1240, lastRestock: '2d ago', status: 'Active', website: 'technova.example.com', description: 'Advanced electronics manufacturer.' },
      { id: '2', name: 'AeroDynamics', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_WcxMZ7w6J-hEg9o8OsDHd10aQ4iVwXxwrE_XgKNeaK2YDXIwZ-QlgipWaKFJ3FvOPGT3jnb96ODHUt7UpkjybfmlwqCx6CFUmg8k5BTKguY7k24cmcTun28JDTq-SYgubXmOwHRJIpUAnL-ip9R1f9kp8FNJ6HDCIWK7s8es1Q74nUB57tMt9HIQXqrfr3z3BBk5Xs39qTHiDypkmTnW73wcgZXr7vxdBYcfHJHpv9c-mUk7xi5jB47A1yime4dQHkSvYAopRUA', productsCount: 84, lastRestock: '5h ago', status: 'Active', website: 'aerodynamics.example.com', description: 'Premium audio supplier.' },
      { id: '3', name: 'Legacy Systems', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKD5Rs3aulZNafr3AUSa60LprQ94urAw8eWGDhKoHDvOY_3oK8AWCcUcq1yOo58j7enddYXGgYJRnb6avD7DnCMf5ldG5YslJc4rGQrOKFF3ow63MggA_MNwMRQK3HLHKAVhipNy_BZ2vu2pqjUAZ10TGlERtUXfP11zW-cF-Du6g2kJxuYF-N_lQ_TqlA0OD0jalrhYCb0g8Xg4clGSihOC-fMvOD_WzojG31L12eaDUsGqrZJ4-H6NwwgGOtMlP4ar7wk7Xa0zg', productsCount: 0, lastRestock: '1yr ago', status: 'Inactive', website: 'legacysystems.example.com', description: 'Old hardware supplier.' },
      { id: '4', name: 'Nexus Connect', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfQWwGdJbJjak4qUK3LHOJFPygwZhhUBLL4mJ4S3OdThvRSaSmxDmGqsBW9UJ5TbpSh7xF5bYIgg7YOwww9FyWNvi-i4KncWNsZV2UjEF_rzoF0SWNKrmLGnCWYEBdqDxrnRZNruMkoHYf0la7tu_1x-x0A1jvu2824fnQAtoAtFgPL2RHndLc6xSe6lX9njGRLIe9iNb43lYfNE6QmqckI4jcEdSgM0dJQyGQ0WSG3Y7g2hv7Bl5gd0ilbf4Q6V05pxv2rtaCUVY', productsCount: 412, lastRestock: 'Today', status: 'Active', website: 'nexusconnect.example.com', description: 'High-performance networking gear partner.' }
    ];
    localStorage.setItem('cs_brands', JSON.stringify(defaultBrands));
  }

  if (!localStorage.getItem('cs_warehouses')) {
    const defaultWarehouses = [
      { id: 'WH-A', name: 'Warehouse Alpha', location: 'San Francisco, CA', capacity: '82%', manager: 'John Doe', status: 'Active' },
      { id: 'WH-B', name: 'Warehouse Beta', location: 'Austin, TX', capacity: '45%', manager: 'Sarah Connor', status: 'Active' },
      { id: 'WH-C', name: 'Warehouse Gamma', location: 'Chicago, IL', capacity: '15%', manager: 'James Bond', status: 'Active' }
    ];
    localStorage.setItem('cs_warehouses', JSON.stringify(defaultWarehouses));
  }

  if (!localStorage.getItem('cs_transfers')) {
    const defaultTransfers = [
      { id: 'TR-1001', productId: 'CS-RTR-9000-V2', productName: 'Nexus Enterprise Router 9000', qty: 20, fromWarehouse: 'WH-A', toWarehouse: 'WH-B', status: 'In Transit', date: '2026-06-25T14:30:00Z', carrier: 'FedEx', trackingNumber: 'FX-882910' },
      { id: 'TR-1002', productId: 'SKU-8924', productName: 'Quantum Smart Watch Gen 4', qty: 50, fromWarehouse: 'WH-B', toWarehouse: 'WH-C', status: 'Completed', date: '2026-06-23T09:15:00Z', carrier: 'UPS', trackingNumber: '1Z-99281X' }
    ];
    localStorage.setItem('cs_transfers', JSON.stringify(defaultTransfers));
  }

  if (!localStorage.getItem('cs_inventory_ledger')) {
    const defaultLedger = [
      { id: 'TX-9082', productId: 'CS-RTR-9000-V2', productName: 'Nexus Enterprise Router 9000', type: 'Stock In', qty: 150, warehouse: 'WH-A', date: '2026-06-26T14:30:00Z', status: 'Completed', ref: 'PO-2023-144' },
      { id: 'TX-9081', productId: 'SKU-8924', productName: 'Quantum Smart Watch Gen 4', type: 'Stock Out', qty: -25, warehouse: 'WH-B', date: '2026-06-26T11:15:00Z', status: 'Completed', ref: 'SO-8821' },
      { id: 'TX-9080', productId: 'SKU-4412', productName: 'AeroNoise Cancelling Headphones', type: 'Transfer', qty: 50, warehouse: 'WH-A', date: '2026-06-25T16:45:00Z', status: 'In Transit', ref: 'TR-1001' }
    ];
    localStorage.setItem('cs_inventory_ledger', JSON.stringify(defaultLedger));
  }

  if (!localStorage.getItem('cs_vendors')) {
    const defaultVendors = [
      { id: 'VEND-001', name: 'NetTech Distributors', logo: '', contactPerson: 'Alice Smith', email: 'alice@nettech.example.com', phone: '555-0192', category: 'Networking', status: 'Active', rating: 4.8, performanceScore: 96, leadTime: '14-21 Days', moq: '10 Units', paymentTerms: 'Net 30', compliance: 98, qualityScore: 95, ytdSpend: 124500, activePOs: 2, pendingDeliveries: 1, description: 'Enterprise network hardware distributors.', address: '123 Tech Way, San Jose, CA' },
      { id: 'VEND-002', name: 'TechNova Manufacturing', logo: '', contactPerson: 'Bob Johnson', email: 'bob@technova.example.com', phone: '555-0183', category: 'Electronics', status: 'Active', rating: 4.5, performanceScore: 92, leadTime: '7-10 Days', moq: '50 Units', paymentTerms: 'Net 15', compliance: 90, qualityScore: 94, ytdSpend: 85000, activePOs: 1, pendingDeliveries: 0, description: 'Contract manufacturer for smart consumer electronics.', address: '456 Silicon Blvd, Austin, TX' },
      { id: 'VEND-003', name: 'AeroDynamics Audio', logo: '', contactPerson: 'Carol White', email: 'carol@aerodynamics.example.com', phone: '555-0174', category: 'Audio', status: 'Active', rating: 4.2, performanceScore: 88, leadTime: '5-7 Days', moq: '25 Units', paymentTerms: 'COD', compliance: 85, qualityScore: 91, ytdSpend: 45000, activePOs: 0, pendingDeliveries: 0, description: 'Premium commercial audio hardware developer.', address: '789 Sound Rd, Seattle, WA' }
    ];
    localStorage.setItem('cs_vendors', JSON.stringify(defaultVendors));
  }

  if (!localStorage.getItem('cs_vendor_payments')) {
    const defaultVendorPayments = [
      { id: 'VPAY-2001', vendorId: 'VEND-001', vendorName: 'NetTech Distributors', invoiceNo: 'INV-NET-9912', amount: 25000, paymentMethod: 'ACH Transfer', status: 'Completed', date: '2026-06-20T10:00:00Z' },
      { id: 'VPAY-2002', vendorId: 'VEND-002', vendorName: 'TechNova Manufacturing', invoiceNo: 'INV-NOVA-8821', amount: 12500, paymentMethod: 'Wire Transfer', status: 'Completed', date: '2026-06-18T14:30:00Z' },
      { id: 'VPAY-2003', vendorId: 'VEND-003', vendorName: 'AeroDynamics Audio', invoiceNo: 'INV-AERO-4411', amount: 8000, paymentMethod: 'Credit Card', status: 'Pending', date: '2026-06-25T09:00:00Z' }
    ];
    localStorage.setItem('cs_vendor_payments', JSON.stringify(defaultVendorPayments));
  }

  if (!localStorage.getItem('cs_purchase_orders')) {
    const defaultPOs = [
      { 
        id: 'PO-2026-001', 
        vendorId: 'VEND-001', 
        vendorName: 'NetTech Distributors', 
        total: 12400, 
        status: 'Sent', 
        date: '2026-06-24T11:00:00Z', 
        expectedDelivery: '2026-07-08T17:00:00Z', 
        items: [
          { productId: 'CS-RTR-9000-V2', name: 'Nexus Router 9000', qty: 10, cost: 1240, total: 12400 }
        ],
        notes: 'Urgent shipment for customer site deployment.',
        comments: [
          { id: '1', author: 'System', text: 'Purchase Order created.', timestamp: 'June 24, 11:00 AM' },
          { id: '2', author: 'Sarah Jenkins', text: 'PO approved and sent to NetTech.', timestamp: 'June 24, 11:15 AM' }
        ]
      },
      {
        id: 'PO-2026-002',
        vendorId: 'VEND-002',
        vendorName: 'TechNova Manufacturing',
        total: 9000,
        status: 'Received',
        date: '2026-06-15T09:00:00Z',
        expectedDelivery: '2026-06-25T17:00:00Z',
        items: [
          { productId: 'SKU-8924', name: 'Quantum Watch Gen 4', qty: 50, cost: 180, total: 9000 }
        ],
        notes: 'Monthly stock replacement.',
        comments: [
          { id: '1', author: 'System', text: 'Purchase Order created.', timestamp: 'June 15, 9:00 AM' },
          { id: '2', author: 'John Doe', text: 'Shipment received and checked into Warehouse Alpha.', timestamp: 'June 25, 2:15 PM' }
        ]
      }
    ];
    localStorage.setItem('cs_purchase_orders', JSON.stringify(defaultPOs));
  }

  if (!localStorage.getItem('cs_sales_orders')) {
    const defaultSalesOrders = [
      {
        id: 'SO-8821',
        customerId: '1',
        customerName: 'Acme Corp',
        status: 'Processing',
        total: 22788,
        date: '2026-06-25T10:45:00Z',
        shipmentId: 'SHIP-3001',
        items: [
          { productId: 'CS-RTR-9000-V2', name: 'Nexus Router 9000', qty: 12, retail: 1899, total: 22788 }
        ],
        billingAddress: '100 Acme Way, Suite 400, Los Angeles, CA',
        shippingAddress: '100 Acme Way, Suite 400, Los Angeles, CA'
      }
    ];
    localStorage.setItem('cs_sales_orders', JSON.stringify(defaultSalesOrders));
  }

  if (!localStorage.getItem('cs_shipments')) {
    const defaultShipments = [
      {
        id: 'SHIP-3001',
        orderId: 'SO-8821',
        customerName: 'Acme Corp',
        carrier: 'DHL Express',
        trackingCode: 'DHL-9928182910',
        status: 'In Transit',
        source: 'Warehouse Alpha (San Francisco)',
        destination: 'Acme Corp HQ (Los Angeles)',
        estDelivery: '2026-06-28T18:00:00Z',
        history: [
          { timestamp: '2026-06-25T10:45:00Z', activity: 'Order created & auto-allocated to Warehouse Alpha' },
          { timestamp: '2026-06-25T14:30:00Z', activity: 'Shipment packed & picked up by DHL' },
          { timestamp: '2026-06-26T08:00:00Z', activity: 'In Transit - Departed SF Facility' }
        ]
      }
    ];
    localStorage.setItem('cs_shipments', JSON.stringify(defaultShipments));
  }

  if (!localStorage.getItem('cs_quotations')) {
    const defaultQuotes = [
      {
        id: 'QT-4001',
        customerId: '1',
        customerName: 'Acme Corp',
        total: 5697,
        status: 'Accepted',
        validUntil: '2026-07-25T00:00:00Z',
        date: '2026-06-24T09:00:00Z',
        items: [
          { productId: 'CS-RTR-9000-V2', name: 'Nexus Router 9000', qty: 3, retail: 1899, total: 5697 }
        ]
      },
      {
        id: 'QT-4002',
        customerId: '2',
        customerName: 'Globex Corp',
        total: 1495,
        status: 'Sent',
        validUntil: '2026-07-15T00:00:00Z',
        date: '2026-06-26T10:00:00Z',
        items: [
          { productId: 'SKU-4412', name: 'AeroNoise Headphones', qty: 10, retail: 149.50, total: 1495 }
        ]
      }
    ];
    localStorage.setItem('cs_quotations', JSON.stringify(defaultQuotes));
  }

  if (!localStorage.getItem('cs_invoices')) {
    const defaultInvoices = [
      {
        id: 'INV-2026-001',
        customerId: '1',
        customerName: 'Acme Corp',
        amount: 22788,
        status: 'Paid',
        dueDate: '2026-07-25T00:00:00Z',
        date: '2026-06-25T11:00:00Z',
        items: [
          { productId: 'CS-RTR-9000-V2', name: 'Nexus Router 9000', qty: 12, retail: 1899, total: 22788 }
        ],
        subtotal: 22788,
        tax: 1823.04,
        total: 24611.04,
        history: [
          { date: '2026-06-25 11:00 AM', action: 'Invoice Generated', user: 'Sarah Jenkins' },
          { date: '2026-06-25 11:30 AM', action: 'Sent to Client (acme@example.com)', user: 'System' },
          { date: '2026-06-26 09:15 AM', action: 'Payment Received via Stripe', user: 'System' }
        ]
      },
      {
        id: 'INV-2026-002',
        customerId: '2',
        customerName: 'Globex Corp',
        amount: 1495,
        status: 'Overdue',
        dueDate: '2026-06-20T00:00:00Z',
        date: '2026-05-20T10:00:00Z',
        items: [
          { productId: 'SKU-4412', name: 'AeroNoise Headphones', qty: 10, retail: 149.50, total: 1495 }
        ],
        subtotal: 1495,
        tax: 119.60,
        total: 1614.60,
        history: [
          { date: '2026-05-20 10:00 AM', action: 'Invoice Generated', user: 'Sarah Jenkins' },
          { date: '2026-05-20 10:30 AM', action: 'Sent to Client (globex@example.com)', user: 'System' }
        ]
      }
    ];
    localStorage.setItem('cs_invoices', JSON.stringify(defaultInvoices));
  }

  if (!localStorage.getItem('cs_customer_payments')) {
    const defaultCustomerPayments = [
      { id: 'PAY-9824', customerId: '1', customerName: 'Acme Corp', amount: 12450.00, date: '2026-06-25T10:42:00Z', paymentMethod: 'Wire Transfer', status: 'Completed', invoiceId: 'INV-2026-001', transactionFee: 15.00, settlementDate: '2026-06-26T12:00:00Z' },
      { id: 'PAY-9825', customerId: '2', customerName: 'Globex Corp', amount: 3200.50, date: '2026-06-26T09:15:00Z', paymentMethod: 'Credit Card', status: 'Processing', invoiceId: 'INV-2026-002', transactionFee: 96.01, settlementDate: null },
      { id: 'PAY-9826', customerId: '3', customerName: 'Stark Industries', amount: 45000.00, date: '2026-06-24T16:30:00Z', paymentMethod: 'ACH', status: 'Completed', invoiceId: 'INV-2026-003', transactionFee: 5.00, settlementDate: '2026-06-25T10:00:00Z' },
      { id: 'PAY-9827', customerId: '4', customerName: 'Wayne Enterprises', amount: 8900.00, date: '2026-06-22T11:05:00Z', paymentMethod: 'Credit Card', status: 'Failed', invoiceId: 'INV-2026-004', transactionFee: 0.00, settlementDate: null, failureReason: 'Insufficient Funds' },
      { id: 'PAY-9828', customerId: '5', customerName: 'Cyberdyne Systems', amount: 150000.00, date: '2026-06-21T14:20:00Z', paymentMethod: 'Wire Transfer', status: 'Completed', invoiceId: 'INV-2026-005', transactionFee: 25.00, settlementDate: '2026-06-22T09:00:00Z' }
    ];
    localStorage.setItem('cs_customer_payments', JSON.stringify(defaultCustomerPayments));
  }

  if (!localStorage.getItem('cs_expenses')) {
    const defaultExpenses = [
      { id: 'EXP-1001', category: 'Software & SaaS', amount: 4250.00, date: '2026-06-15T09:00:00Z', merchant: 'AWS Cloud Services', description: 'Monthly production hosting & infrastructure cost', status: 'Approved', approvedBy: 'John Doe' },
      { id: 'EXP-1002', category: 'Office rent', amount: 12000.00, date: '2026-06-01T00:00:00Z', merchant: 'HQ Realty Partners', description: 'Main office space lease payment', status: 'Approved', approvedBy: 'John Doe' },
      { id: 'EXP-1003', category: 'Marketing', amount: 2500.00, date: '2026-06-20T14:30:00Z', merchant: 'Google Ads', description: 'Q3 product campaign keywords bidding', status: 'Pending', approvedBy: null },
      { id: 'EXP-1004', category: 'Travel & Utilities', amount: 450.25, date: '2026-06-24T18:15:00Z', merchant: 'PG&E Corp', description: 'Electricity & heating for server room', status: 'Approved', approvedBy: 'Sarah Jenkins' }
    ];
    localStorage.setItem('cs_expenses', JSON.stringify(defaultExpenses));
  }

  if (!localStorage.getItem('cs_users')) {
    const defaultUsers = [
      { id: 'USR-001', name: 'John Doe', email: 'john@example.com', role: 'Administrator', department: 'Executive', status: 'Active', lastLogin: '2026-06-26T17:45:00Z' },
      { id: 'USR-002', name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'Manager', department: 'Product Management', status: 'Active', lastLogin: '2026-06-26T16:30:00Z' },
      { id: 'USR-003', name: 'Michael Scott', email: 'michael@example.com', role: 'Sales Agent', department: 'Sales', status: 'Active', lastLogin: '2026-06-25T11:15:00Z' },
      { id: 'USR-004', name: 'Dwight Schrute', email: 'dwight@example.com', role: 'Sales Agent', department: 'Sales', status: 'Active', lastLogin: '2026-06-26T09:00:00Z' },
      { id: 'USR-005', name: 'Ryan Howard', email: 'ryan@example.com', role: 'Warehouse Staff', department: 'Logistics', status: 'Suspended', lastLogin: '2026-06-10T14:20:00Z' }
    ];
    localStorage.setItem('cs_users', JSON.stringify(defaultUsers));
  }

  if (!localStorage.getItem('cs_roles')) {
    const defaultRoles = [
      { id: '1', name: 'Administrator', description: 'Full access to all settings, records, and operations.', usersCount: 1, modules: { CRM: 'Manage', Inventory: 'Manage', Finance: 'Manage', Settings: 'Manage' } },
      { id: '2', name: 'Manager', description: 'Can view, create, edit records, and approve expenses.', usersCount: 1, modules: { CRM: 'Manage', Inventory: 'Manage', Finance: 'Edit', Settings: 'View' } },
      { id: '3', name: 'Sales Agent', description: 'Access to CRM, Leads, Quotes and Invoices creation.', usersCount: 2, modules: { CRM: 'Edit', Inventory: 'View', Finance: 'View', Settings: 'None' } },
      { id: '4', name: 'Warehouse Staff', description: 'Logistics, stock incoming/outgoing, and transfers control.', usersCount: 1, modules: { CRM: 'None', Inventory: 'Edit', Finance: 'None', Settings: 'None' } }
    ];
    localStorage.setItem('cs_roles', JSON.stringify(defaultRoles));
  }

  if (!localStorage.getItem('cs_security_logs')) {
    const defaultSecurityLogs = [
      { id: 'LOG-5001', userId: 'USR-001', userName: 'John Doe', action: 'User Login', module: 'Auth', status: 'Success', ipAddress: '192.168.1.45', timestamp: '2026-06-26T17:45:00Z' },
      { id: 'LOG-5002', userId: 'USR-002', userName: 'Sarah Jenkins', action: 'Update Invoice INV-2026-001', module: 'Finance', status: 'Success', ipAddress: '192.168.1.12', timestamp: '2026-06-26T16:35:00Z' },
      { id: 'LOG-5003', userId: 'USR-004', userName: 'Dwight Schrute', action: 'Export Customer List', module: 'CRM', status: 'Success', ipAddress: '192.168.1.99', timestamp: '2026-06-26T10:15:00Z' },
      { id: 'LOG-5004', userId: 'USR-003', userName: 'Michael Scott', action: 'Failed Login Attempt', module: 'Auth', status: 'Failed', ipAddress: '203.0.113.8', timestamp: '2026-06-25T11:10:00Z', details: 'Invalid credentials input' }
    ];
    localStorage.setItem('cs_security_logs', JSON.stringify(defaultSecurityLogs));
  }

  if (!localStorage.getItem('cs_notifications')) {
    const defaultNotifications = [
      { id: 'NTF-001', title: 'Low Stock Warning', message: 'Nexus Enterprise Router stock has dropped below minimum threshold (10 left).', type: 'warning', date: '2026-06-26T14:30:00Z', read: false },
      { id: 'NTF-002', title: 'New Sales Order', message: 'Globex Corp placed Order #ORD-8824 for $3,200.50.', type: 'info', date: '2026-06-26T09:15:00Z', read: true },
      { id: 'NTF-003', title: 'Security Alert', message: 'Failed admin login attempt detected from unknown IP 203.0.113.8.', type: 'error', date: '2026-06-25T11:10:00Z', read: false }
    ];
    localStorage.setItem('cs_notifications', JSON.stringify(defaultNotifications));
  }

  if (!localStorage.getItem('cs_announcements')) {
    const defaultAnnouncements = [
      { id: 'ANN-001', title: 'Annual Fiscal Review & Q3 Targets', content: 'Our Q3 fiscal targets are now live. All department managers are requested to review the targets spreadsheet in the shared workspace. High emphasis is on logistics cost reduction by 5%.', author: 'John Doe', role: 'CEO', date: '2026-06-25T09:00:00Z', category: 'Company Targets' },
      { id: 'ANN-002', title: 'Office Relocation & Hybrid Work Updates', content: 'Starting next month, the Austin satellite team will be moving to our new office block at 5th Avenue. Core policies on remote and in-office hybrid schedule remain unchanged.', author: 'HR Department', role: 'Operations', date: '2026-06-20T10:30:00Z', category: 'Operational' }
    ];
    localStorage.setItem('cs_announcements', JSON.stringify(defaultAnnouncements));
  }

  if (!localStorage.getItem('cs_system_settings')) {
    const defaultSystemSettings = {
      profile: { fullName: 'John Doe', email: 'john@example.com', phone: '555-0192', jobTitle: 'Chief Executive Officer', avatar: '' },
      organization: { companyName: 'CommSync Enterprise', taxId: 'TX-9988123', logo: '', address: '100 Tech Tower, San Francisco, CA' },
      theme: { mode: 'light', primaryColor: '#005dac', layoutPreset: 'Standard' },
      email: { smtpHost: 'smtp.commsync.example.com', smtpPort: '587', smtpUser: 'noreply@commsync.example.com', emailTriggerLowStock: true, emailTriggerNewInvoices: true },
      system: { timezone: 'PST (UTC-8)', currency: 'USD ($)', sessionDuration: '30 Minutes', autoBackup: true }
    };
    localStorage.setItem('cs_system_settings', JSON.stringify(defaultSystemSettings));
  }
};

export const api = {
  // ═══ AUTHENTICATION ══════════════════════════════════════

  /** Login user and get access + refresh tokens */
  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/resend-otp`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
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
    const response = await fetch(url.toString(), {
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
    const response = await fetch(`${API_BASE_URL}/leads/${leadId}`, {
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
    const response = await fetch(`${API_BASE_URL}/leads`, {
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
    const response = await fetch(`${API_BASE_URL}/leads/${leadId}`, {
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
    const response = await fetch(`${API_BASE_URL}/leads/${leadId}`, {
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
    const response = await fetch(`${API_BASE_URL}/leads/${leadId}/activities`, {
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
    const response = await fetch(url.toString(), {
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
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}`, {
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
    const response = await fetch(`${API_BASE_URL}/customers`, {
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
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}`, {
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
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}`, {
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
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}/orders`, {
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
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}/invoices`, {
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
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}/payments`, {
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
    const response = await fetch(url.toString(), {
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
    const response = await fetch(`${API_BASE_URL}/inventory/products/${productId}`, {
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
    const response = await fetch(`${API_BASE_URL}/inventory/products`, {
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
    const response = await fetch(`${API_BASE_URL}/inventory/products/${productId}`, {
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
    const response = await fetch(`${API_BASE_URL}/inventory/products/${productId}`, {
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
    const response = await fetch(`${API_BASE_URL}/inventory/categories`, {
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
    const response = await fetch(`${API_BASE_URL}/inventory/brands`, {
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
    initInventoryData();
    const dataStr = localStorage.getItem('cs_categories') || '[]';
    const list = JSON.parse(dataStr);
    const newCategory = {
      ...categoryData,
      id: String(list.length + 1),
      productsCount: 0
    };
    list.push(newCategory);
    localStorage.setItem('cs_categories', JSON.stringify(list));
    return { success: true, data: newCategory };
  },

  updateCategory: async (id: string, categoryData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_categories') || '[]';
    const list = JSON.parse(dataStr);
    const idx = list.findIndex((c: any) => c.id === id);
    if (idx === -1) throw new Error('Category not found');
    list[idx] = { ...list[idx], ...categoryData };
    localStorage.setItem('cs_categories', JSON.stringify(list));
    return { success: true, data: list[idx] };
  },

  deleteCategory: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_categories') || '[]';
    let list = JSON.parse(dataStr);
    list = list.filter((c: any) => c.id !== id);
    localStorage.setItem('cs_categories', JSON.stringify(list));
    return { success: true };
  },

  createBrand: async (brandData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_brands') || '[]';
    const list = JSON.parse(dataStr);
    const newBrand = {
      ...brandData,
      id: String(list.length + 1),
      productsCount: 0,
      lastRestock: 'Never'
    };
    list.push(newBrand);
    localStorage.setItem('cs_brands', JSON.stringify(list));
    return { success: true, data: newBrand };
  },

  updateBrand: async (id: string, brandData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_brands') || '[]';
    const list = JSON.parse(dataStr);
    const idx = list.findIndex((b: any) => b.id === id);
    if (idx === -1) throw new Error('Brand not found');
    list[idx] = { ...list[idx], ...brandData };
    localStorage.setItem('cs_brands', JSON.stringify(list));
    return { success: true, data: list[idx] };
  },

  deleteBrand: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_brands') || '[]';
    let list = JSON.parse(dataStr);
    list = list.filter((b: any) => b.id !== id);
    localStorage.setItem('cs_brands', JSON.stringify(list));
    return { success: true };
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
    initInventoryData();
    const dataStr = localStorage.getItem('cs_vendors') || '[]';
    let list = JSON.parse(dataStr);
    if (params?.search) {
      const q = params.search.toLowerCase();
      list = list.filter((v: any) => v.name.toLowerCase().includes(q) || v.contactPerson.toLowerCase().includes(q));
    }
    if (params?.category && params.category !== 'All') {
      list = list.filter((v: any) => v.category === params.category);
    }
    if (params?.status && params.status !== 'All') {
      list = list.filter((v: any) => v.status === params.status);
    }
    return { success: true, data: list };
  },

  getVendor: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_vendors') || '[]';
    const list = JSON.parse(dataStr);
    const item = list.find((v: any) => v.id === id);
    if (!item) throw new Error('Vendor not found');
    return { success: true, data: item };
  },

  createVendor: async (vendorData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_vendors') || '[]';
    const list = JSON.parse(dataStr);
    const newVendor = {
      ...vendorData,
      id: `VEND-${Math.floor(100 + Math.random() * 900)}`,
      rating: 5.0,
      performanceScore: 100,
      ytdSpend: 0,
      activePOs: 0,
      pendingDeliveries: 0,
      status: 'Active'
    };
    list.unshift(newVendor);
    localStorage.setItem('cs_vendors', JSON.stringify(list));
    return { success: true, data: newVendor };
  },

  updateVendor: async (id: string, vendorData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_vendors') || '[]';
    const list = JSON.parse(dataStr);
    const idx = list.findIndex((v: any) => v.id === id);
    if (idx === -1) throw new Error('Vendor not found');
    list[idx] = { ...list[idx], ...vendorData };
    localStorage.setItem('cs_vendors', JSON.stringify(list));
    return { success: true, data: list[idx] };
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

  // ── Purchase Orders Mock Endpoints ──
  getPurchaseOrders: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_purchase_orders') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  getPurchaseOrder: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_purchase_orders') || '[]';
    const list = JSON.parse(dataStr);
    const item = list.find((po: any) => po.id === id);
    if (!item) throw new Error('Purchase Order not found');
    return { success: true, data: item };
  },

  createPurchaseOrder: async (poData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_purchase_orders') || '[]';
    const list = JSON.parse(dataStr);
    const newPO = {
      ...poData,
      id: `PO-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString(),
      status: 'Sent',
      comments: [
        { id: '1', author: 'System', text: 'Purchase Order generated and sent.', timestamp: 'Just now' }
      ]
    };
    list.unshift(newPO);
    localStorage.setItem('cs_purchase_orders', JSON.stringify(list));

    // Increment active POs on Vendor
    const vendorStr = localStorage.getItem('cs_vendors') || '[]';
    const vendors = JSON.parse(vendorStr);
    const vIdx = vendors.findIndex((v: any) => v.id === poData.vendorId);
    if (vIdx !== -1) {
      vendors[vIdx].activePOs += 1;
      vendors[vIdx].pendingDeliveries += 1;
      localStorage.setItem('cs_vendors', JSON.stringify(vendors));
    }

    return { success: true, data: newPO };
  },

  // ── Sales Orders & Shipments Mock Endpoints ──
  getSalesOrder: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_sales_orders') || '[]';
    const list = JSON.parse(dataStr);
    const item = list.find((so: any) => so.id === id);
    if (!item) throw new Error('Sales Order not found');
    return { success: true, data: item };
  },

  getShipments: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_shipments') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  getShipment: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_shipments') || '[]';
    const list = JSON.parse(dataStr);
    const item = list.find((s: any) => s.id === id);
    if (!item) throw new Error('Shipment not found');
    return { success: true, data: item };
  },

  updateShipmentStatus: async (id: string, update: { status: string; activity: string }) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_shipments') || '[]';
    const list = JSON.parse(dataStr);
    const idx = list.findIndex((s: any) => s.id === id);
    if (idx === -1) throw new Error('Shipment not found');
    
    list[idx].status = update.status;
    list[idx].history.push({
      timestamp: new Date().toISOString(),
      activity: update.activity
    });
    localStorage.setItem('cs_shipments', JSON.stringify(list));
    return { success: true, data: list[idx] };
  },

  // ── Quotations Mock Endpoints ──
  getQuotes: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_quotations') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  getQuote: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_quotations') || '[]';
    const list = JSON.parse(dataStr);
    const item = list.find((q: any) => q.id === id);
    if (!item) throw new Error('Quote not found');
    return { success: true, data: item };
  },

  createQuote: async (quoteData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_quotations') || '[]';
    const list = JSON.parse(dataStr);
    const newQuote = {
      ...quoteData,
      id: `QT-${Math.floor(4000 + Math.random() * 6000)}`,
      date: new Date().toISOString(),
      status: 'Sent'
    };
    list.unshift(newQuote);
    localStorage.setItem('cs_quotations', JSON.stringify(list));
    return { success: true, data: newQuote };
  },

  // ── Customer Invoices Mock Endpoints ──
  getInvoices: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_invoices') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  getInvoice: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_invoices') || '[]';
    const list = JSON.parse(dataStr);
    const item = list.find((inv: any) => inv.id === id);
    if (!item) throw new Error('Invoice not found');
    return { success: true, data: item };
  },

  createInvoice: async (invoiceData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_invoices') || '[]';
    const list = JSON.parse(dataStr);
    const newInvoice = {
      ...invoiceData,
      id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString(),
      history: [
        { date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(), action: 'Invoice Created', user: 'System' }
      ]
    };
    list.unshift(newInvoice);
    localStorage.setItem('cs_invoices', JSON.stringify(list));
    return { success: true, data: newInvoice };
  },

  updateInvoice: async (id: string, invoiceData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_invoices') || '[]';
    const list = JSON.parse(dataStr);
    const idx = list.findIndex((inv: any) => inv.id === id);
    if (idx === -1) throw new Error('Invoice not found');
    
    list[idx] = { ...list[idx], ...invoiceData };
    list[idx].history.push({
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      action: 'Invoice Updated / Status changed to ' + invoiceData.status,
      user: 'System'
    });
    localStorage.setItem('cs_invoices', JSON.stringify(list));
    return { success: true, data: list[idx] };
  },

  // ── Phase 2 Financial & Account Mock Endpoints ──
  getCustomerPaymentsLocal: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_customer_payments') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  createCustomerPaymentLocal: async (paymentData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_customer_payments') || '[]';
    const list = JSON.parse(dataStr);
    const newPayment = {
      ...paymentData,
      id: `PAY-${Math.floor(9000 + Math.random() * 1000)}`,
      date: new Date().toISOString(),
      transactionFee: Number((Number(paymentData.amount) * 0.015 + 0.30).toFixed(2)),
      settlementDate: paymentData.status === 'Completed' ? new Date().toISOString() : null
    };
    list.unshift(newPayment);
    localStorage.setItem('cs_customer_payments', JSON.stringify(list));
    return { success: true, data: newPayment };
  },

  getPaymentDetails: async (id: string) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_customer_payments') || '[]';
    const list = JSON.parse(dataStr);
    const item = list.find((p: any) => p.id === id);
    if (!item) throw new Error('Payment transaction not found');
    return { success: true, data: item };
  },

  getExpenses: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_expenses') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  createExpense: async (expenseData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_expenses') || '[]';
    const list = JSON.parse(dataStr);
    const newExpense = {
      ...expenseData,
      id: `EXP-${Math.floor(1000 + Math.random() * 9000)}`,
      date: expenseData.date || new Date().toISOString(),
      status: expenseData.status || 'Pending',
      approvedBy: expenseData.status === 'Approved' ? 'John Doe' : null
    };
    list.unshift(newExpense);
    localStorage.setItem('cs_expenses', JSON.stringify(list));
    return { success: true, data: newExpense };
  },

  // ── Phase 2 User & Admin Mock Endpoints ──
  getUsers: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_users') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  createUser: async (userData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_users') || '[]';
    const list = JSON.parse(dataStr);
    const newUser = {
      ...userData,
      id: `USR-${Math.floor(100 + Math.random() * 900)}`,
      status: 'Active',
      lastLogin: null
    };
    list.unshift(newUser);
    localStorage.setItem('cs_users', JSON.stringify(list));
    return { success: true, data: newUser };
  },

  getRoles: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_roles') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
  },

  updateRole: async (id: string, roleData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_roles') || '[]';
    const list = JSON.parse(dataStr);
    const idx = list.findIndex((r: any) => r.id === id);
    if (idx === -1) throw new Error('Role not found');
    list[idx] = { ...list[idx], ...roleData };
    localStorage.setItem('cs_roles', JSON.stringify(list));
    return { success: true, data: list[idx] };
  },

  getSecurityLogs: async () => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_security_logs') || '[]';
    return { success: true, data: JSON.parse(dataStr) };
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
    const dataStr = localStorage.getItem('cs_system_settings');
    if (!dataStr) {
      return { success: false, data: null };
    }
    return { success: true, data: JSON.parse(dataStr) };
  },

  updateSystemSettings: async (section: string, settingsData: any) => {
    initInventoryData();
    const dataStr = localStorage.getItem('cs_system_settings') || '{}';
    const current = JSON.parse(dataStr);
    current[section] = { ...current[section], ...settingsData };
    localStorage.setItem('cs_system_settings', JSON.stringify(current));
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
