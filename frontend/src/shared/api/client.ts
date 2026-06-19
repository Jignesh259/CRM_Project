export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000/api';

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: BodyInit | Record<string, unknown> | null;
};

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, headers, ...rest } = options;
  const isJsonBody = body !== null && typeof body === 'object' && !(body instanceof FormData);
  const requestHeaders = new Headers(headers);

  if (isJsonBody) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: requestHeaders,
    body: isJsonBody ? JSON.stringify(body) : (body as BodyInit | null | undefined),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export type DashboardMetric = {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'flat';
};

export type RevenuePoint = {
  month: string;
  revenue: number;
  target: number;
};

export type ActivityItem = {
  id: number;
  title: string;
  description: string;
  time: string;
  type: 'lead' | 'invoice' | 'task' | 'system';
};

export type PipelineStage = {
  stage: string;
  count: number;
};

export type DashboardResponse = {
  metrics: DashboardMetric[];
  revenue: RevenuePoint[];
  pipeline: PipelineStage[];
  activities: ActivityItem[];
};

export type AnalyticsResponse = {
  winRate: number;
  customerGrowth: number;
  recurringRevenue: number;
  regionPerformance: Array<{ region: string; revenue: number; customers: number }>;
  topProducts: Array<{ name: string; sales: number; margin: number }>;
};

export type ModuleSummary = {
  module: string;
  title: string;
  summary: string;
  stats: Array<{ label: string; value: string }>;
  actions: string[];
};

export type AuthResponse = {
  success: boolean;
  message: string;
  nextPath?: string;
  token?: string;
};

export const api = {
  login: (body: { email: string; password: string }) =>
    request<AuthResponse>('/auth/login', { method: 'POST', body }),
  register: (body: { name: string; email: string; company: string; password: string }) =>
    request<AuthResponse>('/auth/register', { method: 'POST', body }),
  forgotPassword: (body: { email: string }) =>
    request<AuthResponse>('/auth/forgot-password', { method: 'POST', body }),
  verifyOtp: (body: { email: string; otp: string }) =>
    request<AuthResponse>('/auth/verify-otp', { method: 'POST', body }),
  resetPassword: (body: { email: string; password: string; confirmPassword: string }) =>
    request<AuthResponse>('/auth/reset-password', { method: 'POST', body }),
  getDashboard: () => request<DashboardResponse>('/dashboard'),
  getAnalytics: () => request<AnalyticsResponse>('/analytics'),
  getActivities: () => request<ActivityItem[]>('/activities'),
  getModule: (moduleId: string) => request<ModuleSummary>(`/modules/${moduleId}`),
};
