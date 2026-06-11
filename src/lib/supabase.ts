import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a dummy client if env vars are missing to avoid crashing the app
// in development or during build without env vars.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Tracking de cliques (fire-and-forget)
export async function trackClick(linkId: string, linkTitle: string) {
  if (!supabase) return;
  try {
    await supabase.from('link_clicks').insert({
      link_id: linkId,
      link_title: linkTitle,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });
  } catch (error) {
    console.error('Failed to track click:', error);
  }
}

// Tracking de page views
export async function trackPageView() {
  if (!supabase) return;
  try {
    await supabase.from('page_views').insert({
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}
