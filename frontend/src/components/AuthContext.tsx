import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../api/api';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  is_active: boolean;
  is_verified: boolean;
  roles: string[];
  created_at: string;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('cs_current_user_email');
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const response = await api.getMe();
      if (response.success && response.data) {
        localStorage.setItem('cs_current_user_email', response.data.email);
        setUser(response.data);
      } else {
        // Revoke token if response structure is unexpected or failed
        localStorage.removeItem('cs_current_user_email');
        api.logout();
        setUser(null);
      }
    } catch (err) {
      console.error('Failed to verify session token:', err);
      // Clean up token if it is expired/invalid
      localStorage.removeItem('cs_current_user_email');
      api.logout();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    try {
      await api.login(credentials);
      await fetchProfile();
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('cs_current_user_email');
    api.logout();
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser: fetchProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
