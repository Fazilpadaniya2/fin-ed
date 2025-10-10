// backend/config/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://feuzlqfqtuiggwwixowp.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // or anon key (not recommended for backend)

// ✅ You don’t connect manually — this creates the ready-to-use client
export const supabase = createClient(supabaseUrl, supabaseKey);
