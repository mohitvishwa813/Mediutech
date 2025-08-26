// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yuwpugaftkhdpqelwfos.supabase.co"!
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1d3B1Z2FmdGtoZHBxZWx3Zm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMjU4ODIsImV4cCI6MjA3MTcwMTg4Mn0.Xq5Bys72nJI9kpqCIMgF1qiWV3KYnMYNqEcIMyMQAlY"!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


