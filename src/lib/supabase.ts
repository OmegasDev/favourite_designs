import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbjfqrnnbjygmxnvjvbr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiamZxcm5uYmp5Z214bnZqdmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxOTc3NjQsImV4cCI6MjA2Mzc3Mzc2NH0.hBwil3A05_STYMjcC0tlhleOJIggE5RYpfWFl1zsAEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
