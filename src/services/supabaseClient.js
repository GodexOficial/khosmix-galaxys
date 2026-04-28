import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fbqjcsqnkdpaayqggmsu.supabase.co";
const supabaseKey = "sb_publishable_uraOGu7GzzjefPqWTjO9Lg_lq4taljR";
export const supabase = createClient(supabaseUrl, supabaseKey);
