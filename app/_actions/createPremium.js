import { supabase } from '../_libs/_supabase/adminClient';

export async function createPremium(premiumData) {
  const { error } = await supabase.from('premium').insert([premiumData]);

  if (error) return { error: 'Error in updating booking' };

  return { success: true };
}
