import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zfggltatdqqlawjczzyp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZ2dsdGF0ZHFxbGF3amN6enlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNjE0OTAsImV4cCI6MjAxNTgzNzQ5MH0.JMQ6WKlKYuyOvR3qAtcRNMhkJ47MNuip2NTwD4fcZkM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
