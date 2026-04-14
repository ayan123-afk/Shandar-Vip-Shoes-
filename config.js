// =============================================
// SHANDAR VIP SHOES - SUPABASE CONFIGURATION
// =============================================

const supabaseUrl = "https://yudgecjcfrfhpkbzeuik.supabase.co";
const supabaseKey = "sb_publishable_eZIaW_GFZsJanVNo6tZIzA_1-7yyQ4E";

// Initialize Supabase client
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Export for use in other files
window.supabaseClient = supabase;
window.supabaseUrl = supabaseUrl;
