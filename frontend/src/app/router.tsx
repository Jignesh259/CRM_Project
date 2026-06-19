import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ActivityFeed from '../features/activity/pages/ActivityFeed';
import EnterpriseAnalytics from '../features/analytics/pages/EnterpriseAnalytics';
import Dashboard from '../features/dashboard/pages/Dashboard';
import ForgotPassword from '../features/auth/pages/ForgotPassword';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import ResetPassword from '../features/auth/pages/ResetPassword';
import VerifyOTP from '../features/auth/pages/VerifyOTP';
import ModulePage from '../features/modules/pages/ModulePage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<EnterpriseAnalytics />} />
        <Route path="/activity" element={<ActivityFeed />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
