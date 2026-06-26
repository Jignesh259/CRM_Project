import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './page/Auth/Login';
import { Register } from './page/Auth/Register';
import { ForgotPassword } from './page/Auth/ForgotPassword';
import { VerifyOTP } from './page/Auth/VerifyOTP';
import { ResetPassword } from './page/Auth/ResetPassword';
import { TermsOfService } from './page/Auth/TermsOfService';
import { PrivacyPolicy } from './page/Auth/PrivacyPolicy';

// Main Dashboard & Analytics
import { Dashboard } from './page/Dashboard/Dashboard';
import { Analytics } from './page/Dashboard/Analytics';
import { ActivityFeed } from './page/Dashboard/ActivityFeed';

// Lead Management
import { LeadList } from './page/Leads/LeadList';
import { LeadProfile } from './page/Leads/LeadProfile';
import { LeadKanban } from './page/Leads/LeadKanban';
import { ScheduleFollowUp } from './page/Leads/ScheduleFollowUp';
import { AddLead } from './page/Leads/AddLead';
import { EditLead } from './page/Leads/EditLead';

// Customer Management
import { CustomerList } from './page/Customers/CustomerList';
import { CustomerProfile } from './page/Customers/CustomerProfile';
import { AddCustomer } from './page/Customers/AddCustomer';
import { CustomerOrderHistory } from './page/Customers/CustomerOrderHistory';
import { CustomerBillingInvoices } from './page/Customers/CustomerBillingInvoices';
import { CustomerPaymentRecords } from './page/Customers/CustomerPaymentRecords';

// Product/Inventory Management
import { ProductInventoryGrid } from './page/Inventory/ProductInventoryGrid';
import { ProductDetailedOverview } from './page/Inventory/ProductDetailedOverview';
import { AddProduct } from './page/Inventory/AddProduct';
import { EditProductInformation } from './page/Inventory/EditProductInformation';
import { ProductCategoryManager } from './page/Inventory/ProductCategoryManager';
import { BrandManagementBoard } from './page/Inventory/BrandManagementBoard';

// New Integrated Screens
import { InventoryOverviewDashboard } from './page/Inventory/InventoryOverviewDashboard';
import { ReceiveInventory } from './page/Inventory/ReceiveInventory';
import { DispatchInventory } from './page/Inventory/DispatchInventory';
import { WarehouseTransfer } from './page/Inventory/WarehouseTransfer';
import { TransactionLedger } from './page/Inventory/TransactionLedger';

import { VendorDirectory } from './page/Vendors/VendorDirectory';
import { VendorProfile } from './page/Vendors/VendorProfile';
import { OnboardVendor } from './page/Vendors/OnboardVendor';
import { VendorPayments } from './page/Vendors/VendorPayments';

import { PurchaseOrderManagement } from './page/Purchases/PurchaseOrderManagement';
import { PurchaseOrderDetails } from './page/Purchases/PurchaseOrderDetails';

import { SalesOrderDetails } from './page/Sales/SalesOrderDetails';
import { LogisticsTracking } from './page/Sales/LogisticsTracking';
import { CustomerQuotations } from './page/Sales/CustomerQuotations';

import { InvoicingManagementCenter } from './page/Invoices/InvoicingManagementCenter';
import { CreateInvoice } from './page/Invoices/CreateInvoice';
import { InvoiceDetails } from './page/Invoices/InvoiceDetails';
import { InvoicePreview } from './page/Invoices/InvoicePreview';

// Phase 2 Financial & Account Components
import { CustomerPaymentLedger } from './page/Finance/CustomerPaymentLedger';
import { PendingPaymentSettlements } from './page/Finance/PendingPaymentSettlements';
import { PaymentTransactionDetails } from './page/Finance/PaymentTransactionDetails';
import { PaymentHistoryAnalytics } from './page/Finance/PaymentHistoryAnalytics';
import { RevenueFinancialInsights } from './page/Finance/RevenueFinancialInsights';
import { ExpenseCostManagement } from './page/Finance/ExpenseCostManagement';

// Phase 2 Reports & Analytics Components
import { ProductPerformanceReport } from './page/Reports/ProductPerformanceReport';
import { SalesPerformanceAnalytics } from './page/Reports/SalesPerformanceAnalytics';
import { CustomerAnalyticsRetention } from './page/Reports/CustomerAnalyticsRetention';
import { InventoryStockOptimization } from './page/Reports/InventoryStockOptimization';

// Phase 2 Administration & Security Components
import { UserManagementDirectory } from './page/Admin/UserManagementDirectory';
import { OnboardNewUser } from './page/Admin/OnboardNewUser';
import { OrganizationalRolesControl } from './page/Admin/OrganizationalRolesControl';
import { SecurityAuditActivityLogs } from './page/Admin/SecurityAuditActivityLogs';
import { GranularAccessPermissions } from './page/Admin/GranularAccessPermissions';

// Phase 2 Communication Components
import { NotificationCenter } from './page/Communication/NotificationCenter';
import { CompanyAnnouncements } from './page/Communication/CompanyAnnouncements';

// Phase 2 Settings Components
import { UserProfileSettings } from './page/Settings/UserProfileSettings';
import { OrganizationBrandingSettings } from './page/Settings/OrganizationBrandingSettings';
import { VisualThemeCustomization } from './page/Settings/VisualThemeCustomization';
import { EmailCommunicationSettings } from './page/Settings/EmailCommunicationSettings';
import { CoreSystemConfiguration } from './page/Settings/CoreSystemConfiguration';

import { AuthProvider } from './components/AuthContext';
import { ProtectedRoute, PublicRoute } from './components/RouteGuards';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
          <Route path="/settings/theme" element={<ProtectedRoute><VisualThemeCustomization /></ProtectedRoute>} />
          <Route path="/settings/email" element={<ProtectedRoute><EmailCommunicationSettings /></ProtectedRoute>} />
          <Route path="/settings/system" element={<ProtectedRoute><CoreSystemConfiguration /></ProtectedRoute>} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
