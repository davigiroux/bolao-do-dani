import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://shbyhfvgiouuazqyxwlb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoYnloZnZnaW91dWF6cXl4d2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NjA0MzQsImV4cCI6MjA0NDQzNjQzNH0.m9atvtplXozqKXkEOcMnQ9-NAO3mdb4Lu9aGoJG9lFw"
  );