-- =====================================================================
-- KANNADA JOURNEY: Supabase setup for the enquiry form
-- Run this in Supabase: SQL Editor > New query > paste > Run.
-- If your table already exists, you only need the "row level security"
-- part (steps 2 and 3), and the table name must match the one set in
-- assets/storybook.js (ENQUIRY.table, currently "enquiries").
-- =====================================================================

-- 1) The table (skip if you already created it)
create table if not exists public.enquiries (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name       text not null check (char_length(name)     between 1 and 100),
  email      text not null check (char_length(email)    between 3 and 150),
  phone      text          check (char_length(phone)    <= 30),
  category   text not null check (char_length(category) <= 100),
  level      text not null check (char_length(level)    <= 100),
  goal       text not null check (char_length(goal)     between 1 and 1000),
  details    text          check (char_length(details)  <= 2000)
);

-- 2) Turn on row level security: with no policy, nobody can read or write
alter table public.enquiries enable row level security;

-- 3) Let website visitors ADD a row, and nothing else.
--    (They cannot read, change or delete anything.)
drop policy if exists "Visitors can send an enquiry" on public.enquiries;
create policy "Visitors can send an enquiry"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

-- Your own enquiries are visible to you in the Supabase dashboard
-- (Table Editor), which does not depend on these policies.
