import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Auth Routes
const Login = lazy(() => import('./page/Auth/Login').then(m => ({ default: m.Login })));
const Register = lazy(() => import('./page/Auth/Register').then(m => ({ default: m.Register })));
const ForgotPassword = lazy(() => import('./page/Auth/ForgotPassword').then(m => ({ default: m.ForgotPassword })));
const VerifyOTP = lazy(() => import('./page/Auth/VerifyOTP').then(m => ({ default: m.VerifyOTP })));
const ResetPassword = lazy(() => import('./page/Auth/ResetPassword').then(m => ({ default: m.ResetPassword })));
const TermsOfService = lazy(() => import('./page/Auth/TermsOfService').then(m => ({ default: m.TermsOfService })));
const PrivacyPolicy = lazy(() => import('./page/Auth/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));

// Main Dashboard & Analytics
const Dashboard = lazy(() => import('./page/Dashboard/Dashboard').then(m => ({ default: m.Dashboard })));
const Analytics = lazy(() => import('./page/Dashboard/Analytics').then(m => ({ default: m.Analytics })));
const ActivityFeed = lazy(() => import('./page/Dashboard/ActivityFeed').then(m => ({ default: m.ActivityFeed })));

// Lead Management
const LeadList = lazy(() => import('./page/Leads/LeadList').then(m => ({ default: m.LeadList })));
const LeadProfile = lazy(() => import('./page/Leads/LeadProfile').then(m => ({ default: m.LeadProfile })));
const LeadKanban = lazy(() => import('./page/Leads/LeadKanban').then(m => ({ default: m.LeadKanban })));
const ScheduleFollowUp = lazy(() => import('./page/Leads/ScheduleFollowUp').then(m => ({ default: m.ScheduleFollowUp })));
const AddLead = lazy(() => import('./page/Leads/AddLead').then(m => ({ default: m.AddLead })));
const EditLead = lazy(() => import('./page/Leads/EditLead').then(m => ({ default: m.EditLead })));

// Customer Management
const CustomerList = lazy(() => import('./page/Customers/CustomerList').then(m => ({ default: m.CustomerList })));
const CustomerProfile = lazy(() => import('./page/Customers/CustomerProfile').then(m => ({ default: m.CustomerProfile })));
const AddCustomer = lazy(() => import('./page/Customers/AddCustomer').then(m => ({ default: m.AddCustomer })));
const CustomerOrderHistory = lazy(() => import('./page/Customers/CustomerOrderHistory').then(m => ({ default: m.CustomerOrderHistory })));
const CustomerBillingInvoices = lazy(() => import('./page/Customers/CustomerBillingInvoices').then(m => ({ default: m.CustomerBillingInvoices })));
const CustomerPaymentRecords = lazy(() => import('./page/Customers/CustomerPaymentRecords').then(m => ({ default: m.CustomerPaymentRecords })));

// Product/Inventory Management
const ProductInventoryGrid = lazy(() => import('./page/Inventory/ProductInventoryGrid').then(m => ({ default: m.ProductInventoryGrid })));
const ProductDetailedOverview = lazy(() => import('./page/Inventory/ProductDetailedOverview').then(m => ({ default: m.ProductDetailedOverview })));
const AddProduct = lazy(() => import('./page/Inventory/AddProduct').then(m => ({ default: m.AddProduct })));
const EditProductInformation = lazy(() => import('./page/Inventory/EditProductInformation').then(m => ({ default: m.EditProductInformation })));
const ProductCategoryManager = lazy(() => import('./page/Inventory/ProductCategoryManager').then(m => ({ default: m.ProductCategoryManager })));
const BrandManagementBoard = lazy(() => import('./page/Inventory/BrandManagementBoard').then(m => ({ default: m.BrandManagementBoard })));

// New Integrated Screens
const InventoryOverviewDashboard = lazy(() => import('./page/Inventory/InventoryOverviewDashboard').then(m => ({ default: m.InventoryOverviewDashboard })));
const ReceiveInventory = lazy(() => import('./page/Inventory/ReceiveInventory').then(m => ({ default: m.ReceiveInventory })));
const DispatchInventory = lazy(() => import('./page/Inventory/DispatchInventory').then(m => ({ default: m.DispatchInventory })));
const WarehouseTransfer = lazy(() => import('./page/Inventory/WarehouseTransfer').then(m => ({ default: m.WarehouseTransfer })));
const TransactionLedger = lazy(() => import('./page/Inventory/TransactionLedger').then(m => ({ default: m.TransactionLedger })));

const VendorDirectory = lazy(() => import('./page/Vendors/VendorDirectory').then(m => ({ default: m.VendorDirectory })));
const VendorProfile = lazy(() => import('./page/Vendors/VendorProfile').then(m => ({ default: m.VendorProfile })));
const OnboardVendor = lazy(() => import('./page/Vendors/OnboardVendor').then(m => ({ default: m.OnboardVendor })));
const VendorPayments = lazy(() => import('./page/Vendors/VendorPayments').then(m => ({ default: m.VendorPayments })));

const PurchaseOrderManagement = lazy(() => import('./page/Purchases/PurchaseOrderManagement').then(m => ({ default: m.PurchaseOrderManagement })));
const PurchaseOrderDetails = lazy(() => import('./page/Purchases/PurchaseOrderDetails').then(m => ({ default: m.PurchaseOrderDetails })));

const SalesOrderDetails = lazy(() => import('./page/Sales/SalesOrderDetails').then(m => ({ default: m.SalesOrderDetails })));
const LogisticsTracking = lazy(() => import('./page/Sales/LogisticsTracking').then(m => ({ default: m.LogisticsTracking })));
const CustomerQuotations = lazy(() => import('./page/Sales/CustomerQuotations').then(m => ({ default: m.CustomerQuotations })));

const InvoicingManagementCenter = lazy(() => import('./page/Invoices/InvoicingManagementCenter').then(m => ({ default: m.InvoicingManagementCenter })));
const CreateInvoice = lazy(() => import('./page/Invoices/CreateInvoice').then(m => ({ default: m.CreateInvoice })));
const InvoiceDetails = lazy(() => import('./page/Invoices/InvoiceDetails').then(m => ({ default: m.InvoiceDetails })));
const InvoicePreview = lazy(() => import('./page/Invoices/InvoicePreview').then(m => ({ default: m.InvoicePreview })));

// Phase 2 Financial & Account Components
const CustomerPaymentLedger = lazy(() => import('./page/Finance/CustomerPaymentLedger').then(m => ({ default: m.CustomerPaymentLedger })));
const PendingPaymentSettlements = lazy(() => import('./page/Finance/PendingPaymentSettlements').then(m => ({ default: m.PendingPaymentSettlements })));
const PaymentTransactionDetails = lazy(() => import('./page/Finance/PaymentTransactionDetails').then(m => ({ default: m.PaymentTransactionDetails })));
const PaymentHistoryAnalytics = lazy(() => import('./page/Finance/PaymentHistoryAnalytics').then(m => ({ default: m.PaymentHistoryAnalytics })));
const RevenueFinancialInsights = lazy(() => import('./page/Finance/RevenueFinancialInsights').then(m => ({ default: m.RevenueFinancialInsights })));
const ExpenseCostManagement = lazy(() => import('./page/Finance/ExpenseCostManagement').then(m => ({ default: m.ExpenseCostManagement })));

// Phase 2 Reports & Analytics Components
const ProductPerformanceReport = lazy(() => import('./page/Reports/ProductPerformanceReport').then(m => ({ default: m.ProductPerformanceReport })));
const SalesPerformanceAnalytics = lazy(() => import('./page/Reports/SalesPerformanceAnalytics').then(m => ({ default: m.SalesPerformanceAnalytics })));
const CustomerAnalyticsRetention = lazy(() => import('./page/Reports/CustomerAnalyticsRetention').then(m => ({ default: m.CustomerAnalyticsRetention })));
const InventoryStockOptimization = lazy(() => import('./page/Reports/InventoryStockOptimization').then(m => ({ default: m.InventoryStockOptimization })));

// Phase 2 Administration & Security Components
const UserManagementDirectory = lazy(() => import('./page/Admin/UserManagementDirectory').then(m => ({ default: m.UserManagementDirectory })));
const OnboardNewUser = lazy(() => import('./page/Admin/OnboardNewUser').then(m => ({ default: m.OnboardNewUser })));
const OrganizationalRolesControl = lazy(() => import('./page/Admin/OrganizationalRolesControl').then(m => ({ default: m.OrganizationalRolesControl })));
const SecurityAuditActivityLogs = lazy(() => import('./page/Admin/SecurityAuditActivityLogs').then(m => ({ default: m.SecurityAuditActivityLogs })));
const GranularAccessPermissions = lazy(() => import('./page/Admin/GranularAccessPermissions').then(m => ({ default: m.GranularAccessPermissions })));

// Phase 2 Communication Components
const NotificationCenter = lazy(() => import('./page/Communication/NotificationCenter').then(m => ({ default: m.NotificationCenter })));
const CompanyAnnouncements = lazy(() => import('./page/Communication/CompanyAnnouncements').then(m => ({ default: m.CompanyAnnouncements })));

// Phase 2 Settings Components
const UserProfileSettings = lazy(() => import('./page/Settings/UserProfileSettings').then(m => ({ default: m.UserProfileSettings })));
const OrganizationBrandingSettings = lazy(() => import('./page/Settings/OrganizationBrandingSettings').then(m => ({ default: m.OrganizationBrandingSettings })));
const EmailCommunicationSettings = lazy(() => import('./page/Settings/EmailCommunicationSettings').then(m => ({ default: m.EmailCommunicationSettings })));
const CoreSystemConfiguration = lazy(() => import('./page/Settings/CoreSystemConfiguration').then(m => ({ default: m.CoreSystemConfiguration })));

import { AuthProvider } from './components/AuthContext';
import { ProtectedRoute, PublicRoute, LoadingScreen } from './components/RouteGuards';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            {/* Redirect root to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Auth Routes */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
            <Route path="/verify-otp" element={<PublicRoute><VerifyOTP /></PublicRoute>} />
            <Route path="/reset-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />

            {/* Legal Routes */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* ── Main Dashboard Routes ── */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/activity" element={<ProtectedRoute><ActivityFeed /></ProtectedRoute>} />

            {/* ── Lead Management Routes ── */}
            <Route path="/leads" element={<ProtectedRoute><LeadList /></ProtectedRoute>} />
            <Route path="/leads/kanban" element={<ProtectedRoute><LeadKanban /></ProtectedRoute>} />
            <Route path="/leads/new" element={<ProtectedRoute><AddLead /></ProtectedRoute>} />
            <Route path="/leads/:id" element={<ProtectedRoute><LeadProfile /></ProtectedRoute>} />
            <Route path="/leads/:id/edit" element={<ProtectedRoute><EditLead /></ProtectedRoute>} />
            <Route path="/leads/:id/schedule" element={<ProtectedRoute><ScheduleFollowUp /></ProtectedRoute>} />

            {/* ── Customer Management Routes ── */}
            <Route path="/customers" element={<ProtectedRoute><CustomerList /></ProtectedRoute>} />
            <Route path="/customers/new" element={<ProtectedRoute><AddCustomer /></ProtectedRoute>} />
            <Route path="/customers/:id" element={<ProtectedRoute><CustomerProfile /></ProtectedRoute>} />
            <Route path="/customers/:id/orders" element={<ProtectedRoute><CustomerOrderHistory /></ProtectedRoute>} />
            <Route path="/customers/:id/invoices" element={<ProtectedRoute><CustomerBillingInvoices /></ProtectedRoute>} />
            <Route path="/customers/:id/payments" element={<ProtectedRoute><CustomerPaymentRecords /></ProtectedRoute>} />

            {/* ── Product/Inventory Management Routes ── */}
            <Route path="/inventory" element={<ProtectedRoute><ProductInventoryGrid /></ProtectedRoute>} />
            <Route path="/inventory/dashboard" element={<ProtectedRoute><InventoryOverviewDashboard /></ProtectedRoute>} />
            <Route path="/inventory/new" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
            <Route path="/inventory/stock-in" element={<ProtectedRoute><ReceiveInventory /></ProtectedRoute>} />
            <Route path="/inventory/stock-out" element={<ProtectedRoute><DispatchInventory /></ProtectedRoute>} />
            <Route path="/inventory/stock-transfer" element={<ProtectedRoute><WarehouseTransfer /></ProtectedRoute>} />
            <Route path="/inventory/transaction-ledger" element={<ProtectedRoute><TransactionLedger /></ProtectedRoute>} />
            <Route path="/inventory/categories" element={<ProtectedRoute><ProductCategoryManager /></ProtectedRoute>} />
            <Route path="/inventory/brands" element={<ProtectedRoute><BrandManagementBoard /></ProtectedRoute>} />
            <Route path="/inventory/:id" element={<ProtectedRoute><ProductDetailedOverview /></ProtectedRoute>} />
            <Route path="/inventory/:id/edit" element={<ProtectedRoute><EditProductInformation /></ProtectedRoute>} />

            {/* ── Vendor Management Routes ── */}
            <Route path="/vendors" element={<ProtectedRoute><VendorDirectory /></ProtectedRoute>} />
            <Route path="/vendors/new" element={<ProtectedRoute><OnboardVendor /></ProtectedRoute>} />
            <Route path="/vendors/payments" element={<ProtectedRoute><VendorPayments /></ProtectedRoute>} />
            <Route path="/vendors/:id" element={<ProtectedRoute><VendorProfile /></ProtectedRoute>} />

            {/* ── Procurement (PO) Routes ── */}
            <Route path="/purchase-orders" element={<ProtectedRoute><PurchaseOrderManagement /></ProtectedRoute>} />
            <Route path="/purchase-orders/:id" element={<ProtectedRoute><PurchaseOrderDetails /></ProtectedRoute>} />

            {/* ── Sales & Logistics Routes ── */}
            <Route path="/sales/:id" element={<ProtectedRoute><SalesOrderDetails /></ProtectedRoute>} />
            <Route path="/quotes" element={<ProtectedRoute><CustomerQuotations /></ProtectedRoute>} />
            <Route path="/logistics" element={<ProtectedRoute><LogisticsTracking /></ProtectedRoute>} />

            {/* ── Invoices Routes ── */}
            <Route path="/invoices" element={<ProtectedRoute><InvoicingManagementCenter /></ProtectedRoute>} />
            <Route path="/invoices/new" element={<ProtectedRoute><CreateInvoice /></ProtectedRoute>} />
            <Route path="/invoices/:id" element={<ProtectedRoute><InvoiceDetails /></ProtectedRoute>} />
            <Route path="/invoices/:id/preview" element={<ProtectedRoute><InvoicePreview /></ProtectedRoute>} />

            {/* ── Phase 2 Financial & Account Routes ── */}
            <Route path="/finance/payments" element={<ProtectedRoute><CustomerPaymentLedger /></ProtectedRoute>} />
            <Route path="/finance/settlements" element={<ProtectedRoute><PendingPaymentSettlements /></ProtectedRoute>} />
            <Route path="/finance/transactions/:id" element={<ProtectedRoute><PaymentTransactionDetails /></ProtectedRoute>} />
            <Route path="/finance/analytics" element={<ProtectedRoute><PaymentHistoryAnalytics /></ProtectedRoute>} />
            <Route path="/finance/revenue" element={<ProtectedRoute><RevenueFinancialInsights /></ProtectedRoute>} />
            <Route path="/finance/expenses" element={<ProtectedRoute><ExpenseCostManagement /></ProtectedRoute>} />

            {/* ── Phase 2 Reports & Analytics Routes ── */}
            <Route path="/reports/products" element={<ProtectedRoute><ProductPerformanceReport /></ProtectedRoute>} />
            <Route path="/reports/sales" element={<ProtectedRoute><SalesPerformanceAnalytics /></ProtectedRoute>} />
            <Route path="/reports/customers" element={<ProtectedRoute><CustomerAnalyticsRetention /></ProtectedRoute>} />
            <Route path="/reports/inventory" element={<ProtectedRoute><InventoryStockOptimization /></ProtectedRoute>} />

            {/* ── Phase 2 Administration & Security Routes ── */}
            <Route path="/admin/users" element={<ProtectedRoute><UserManagementDirectory /></ProtectedRoute>} />
            <Route path="/admin/users/new" element={<ProtectedRoute><OnboardNewUser /></ProtectedRoute>} />
            <Route path="/admin/roles" element={<ProtectedRoute><OrganizationalRolesControl /></ProtectedRoute>} />
            <Route path="/admin/security" element={<ProtectedRoute><SecurityAuditActivityLogs /></ProtectedRoute>} />
            <Route path="/admin/permissions" element={<ProtectedRoute><GranularAccessPermissions /></ProtectedRoute>} />

            {/* ── Phase 2 Communication Routes ── */}
            <Route path="/notifications" element={<ProtectedRoute><NotificationCenter /></ProtectedRoute>} />
            <Route path="/announcements" element={<ProtectedRoute><CompanyAnnouncements /></ProtectedRoute>} />

            {/* ── Phase 2 Settings Routes ── */}
            <Route path="/settings" element={<Navigate to="/settings/profile" replace />} />
            <Route path="/settings/profile" element={<ProtectedRoute><UserProfileSettings /></ProtectedRoute>} />
            <Route path="/settings/organization" element={<ProtectedRoute><OrganizationBrandingSettings /></ProtectedRoute>} />
            <Route path="/settings/email" element={<ProtectedRoute><EmailCommunicationSettings /></ProtectedRoute>} />
            <Route path="/settings/system" element={<ProtectedRoute><CoreSystemConfiguration /></ProtectedRoute>} />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
