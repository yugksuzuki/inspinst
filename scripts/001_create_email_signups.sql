-- Create table for email signups
CREATE TABLE IF NOT EXISTS public.email_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  signup_type TEXT NOT NULL DEFAULT 'early_access',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public signup form)
-- Allow anyone to insert emails (for signups)
CREATE POLICY "Allow public email signups" ON public.email_signups
  FOR INSERT 
  WITH CHECK (true);

-- Allow reading own email (if we add user auth later)
CREATE POLICY "Allow users to view their own signups" ON public.email_signups
  FOR SELECT 
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_email_signups_email ON public.email_signups(email);
CREATE INDEX IF NOT EXISTS idx_email_signups_created_at ON public.email_signups(created_at);
