'use server';

import { createClient } from '@/app/_libs/_supabase/server';

export async function getSession() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  let profile = null;
  let profileError = null;

  if (user) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('userId', user.id)
      .single();

    profile = data;
    profileError = error;
  }

  return { user, profile, authError, profileError };
}
