# Supabase Setup Guide - AKOStack Waitlist (Refined)

This document provides step-by-step instructions to configure a Supabase PostgreSQL backend database and link it to the AKOStack marketing landing page waitlist form.

---

## 1. Complete Database SQL Script

Copy and paste the following SQL script directly into the **Supabase SQL Editor** and click **Run**:

```sql
-- 1. Create the waitlist table with serial queue number
CREATE TABLE IF NOT EXISTS public.waitlist (
    id UUID UNIQUE DEFAULT gen_random_uuid(),
    queue_number SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    company TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    company_size TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'PENDING',
    created_from TEXT NOT NULL DEFAULT 'landing-page',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Restart waitlist queue number sequence at 101
ALTER SEQUENCE IF EXISTS public.waitlist_queue_number_seq RESTART WITH 101;

-- 3. Create index on the email column for duplicate check performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist (email);

-- 4. Create helper function to update updated_at column automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 5. Create trigger to automatically maintain updated_at on modify
CREATE OR REPLACE TRIGGER update_waitlist_updated_at
    BEFORE UPDATE ON public.waitlist
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 6. Enable Row Level Security (RLS) on the table
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- 7. Create INSERT policy for anonymous users (Frontend Form Submissions)
CREATE POLICY "Allow public insert to waitlist" 
ON public.waitlist 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 7. Note on permissions:
-- Because RLS is enabled and no SELECT, UPDATE, or DELETE policies are declared for the "anon" role,
-- anonymous public users cannot read, modify, or delete any records.
```

---

## 2. Step-by-Step Supabase Project Setup

1. Go to [Supabase](https://supabase.com) and sign in or create an account.
2. Click **New Project** and select your organization.
3. Define a project name (e.g., `AKOStack-Marketing`) and database password. Choose your nearest hosting region, then click **Create New Project**.
4. Once the project is initialized, navigate to the **SQL Editor** tab from the left sidebar (represented by the console `SQL` symbol).
5. Click **New Query**, paste the complete SQL script from Section 1, and click **Run**.
6. The editor should indicate success. You can verify that the table has been created by clicking the **Table Editor** tab.

---

## 3. Environment Variables Configuration

### Where to Find API Keys:
1. Navigate to the **Project Settings** (represented by the cog icon in the bottom left).
2. Click on the **API** tab in the sidebar.
3. Locate the following keys under the **Project API keys** and **Project Configuration** sections:
   - **Project URL:** Found under the *Project URL* heading.
   - **Anon Public Key:** The key labeled `anon` and `public`.
   *(Note: The Service Role Key is kept out of the frontend project entirely as it is reserved for the future FastAPI backend).*

### Where to Paste the Keys:
Open the `.env.local` file in the root of the `akostack-LandingPage` workspace and insert the copied credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

---

## 4. Installed Packages

The following package must be installed in the Next.js project to facilitate Supabase connections (already pre-installed in the workspace):
```bash
npm install @supabase/supabase-js
```

---

## 5. Verification Checklist

- [ ] **Database Connection Check:** Run the project locally (`npm run dev`) and submit a waitlist registration. Ensure the page redirects to `/waitlist-success`.
- [ ] **Data Ingestion Verification:** Check the Supabase **Table Editor** under the `waitlist` table to confirm the record was added with `created_from` set to `landing-page`.
- [ ] **Duplicate Email Rejection:** Attempt to register the exact same email address again. The form should stop submission and display the warning: *"This email is already registered on our waitlist."*
- [ ] **Validation Integrity:** Submit the form with an invalid email address (e.g., `invalidemail`). Verify that validation catches the input.
- [ ] **Build Validation:** Run `npm run build` locally to verify that there are no compilation errors when environment keys are absent.

---

## 6. Troubleshooting Guide

### Issue: "Database connection parameters are unconfigured..."
- **Cause:** The environment variables in `.env.local` are empty or were not loaded by the development server.
- **Solution:** Restart the Next.js dev server (`npm run dev`) to force loading of the `.env.local` file. Ensure that the variables do not have any surrounding quotation marks or spaces.

### Issue: "TypeError: Cannot read properties of null (reading 'from')"
- **Cause:** The client failed to initialize because `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` is undefined.
- **Solution:** Verify that keys are correctly spelt in `.env.local` and match the API page in the dashboard.

### Issue: unique constraint error not displaying friendly text
- **Cause:** PostgreSQL returned an error but the error code was not detected.
- **Solution:** Ensure that the SQL index is correctly built with the `UNIQUE` keyword on the table creation phase (as specified in the SQL script).
