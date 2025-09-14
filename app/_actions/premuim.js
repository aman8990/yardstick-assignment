'use server';

import { createClient } from '../_libs/_supabase/server';

export async function getPremium(company) {
  const supabase = await createClient();

  const { data: premium, error } = await supabase
    .from('premium')
    .select('*')
    .eq('companyName', company);

  if (error) throw new Error('Error in getting premiums');

  return premium;
}
