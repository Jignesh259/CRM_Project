-- Companies
CREATE TABLE companies (
    company_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Roles
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(100) UNIQUE NOT NULL
);

-- Users
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES companies(company_id) ON DELETE CASCADE,
    role_id INT REFERENCES roles(role_id),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- OTP Verification
CREATE TABLE otp_verifications (
    otp_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    otp_code VARCHAR(6),
    expires_at TIMESTAMP,
    verified BOOLEAN DEFAULT FALSE
);

-- Refresh Tokens
CREATE TABLE refresh_tokens (
    token_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    refresh_token TEXT,
    expires_at TIMESTAMP
);

-- Leads
CREATE TABLE leads (
    lead_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES companies(company_id),
    owner_id UUID REFERENCES users(user_id),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(20),
    source VARCHAR(100),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contacts
CREATE TABLE contacts (
    contact_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES companies(company_id),
    owner_id UUID REFERENCES users(user_id),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(20)
);

-- Accounts
CREATE TABLE accounts (
    account_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES companies(company_id),
    owner_id UUID REFERENCES users(user_id),
    account_name VARCHAR(255),
    industry VARCHAR(100),
    website VARCHAR(255)
);

-- Deals
CREATE TABLE deals (
    deal_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID REFERENCES accounts(account_id),
    contact_id UUID REFERENCES contacts(contact_id),
    owner_id UUID REFERENCES users(user_id),
    deal_name VARCHAR(255),
    amount NUMERIC(18,2),
    stage VARCHAR(50),
    close_date DATE
);

-- Tasks
CREATE TABLE tasks (
    task_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(deal_id),
    assigned_to UUID REFERENCES users(user_id),
    title VARCHAR(255),
    due_date DATE,
    status VARCHAR(50)
);

-- Activities
CREATE TABLE activities (
    activity_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(user_id),
    lead_id UUID REFERENCES leads(lead_id),
    activity_type VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Notes
CREATE TABLE notes (
    note_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(deal_id),
    user_id UUID REFERENCES users(user_id),
    note_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products
CREATE TABLE products (
    product_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES companies(company_id),
    product_name VARCHAR(255),
    unit_price NUMERIC(18,2)
);

-- Quotes
CREATE TABLE quotes (
    quote_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(deal_id),
    created_by UUID REFERENCES users(user_id),
    total NUMERIC(18,2)
);

-- Quote Items
CREATE TABLE quote_items (
    quote_item_id SERIAL PRIMARY KEY,
    quote_id UUID REFERENCES quotes(quote_id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(product_id),
    quantity INT,
    price NUMERIC(18,2)
);

-- Invoices
CREATE TABLE invoices (
    invoice_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID REFERENCES accounts(account_id),
    total_amount NUMERIC(18,2),
    status VARCHAR(50)
);

-- Invoice Items
CREATE TABLE invoice_items (
    invoice_item_id SERIAL PRIMARY KEY,
    invoice_id UUID REFERENCES invoices(invoice_id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(product_id),
    quantity INT,
    unit_price NUMERIC(18,2)
);

-- Payments
CREATE TABLE payments (
    payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id UUID REFERENCES invoices(invoice_id),
    amount NUMERIC(18,2),
    payment_method VARCHAR(50),
    payment_date DATE
);

-- Notifications
CREATE TABLE notifications (
    notification_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(user_id),
    title VARCHAR(255),
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE
);

-- Audit Logs
CREATE TABLE audit_logs (
    log_id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    action VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);