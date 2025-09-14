'use server';

import { supabase } from '../_libs/_supabase/adminClient';

export async function createNewUser(data, company) {
  const { email, password } = data;

  const { data: newUser, error } = await supabase.auth.admin.createUser({
    email: email,
    password: password,
    email_confirm: true,
  });

  if (error) return { error: 'Error in creating user' };

  if (newUser) {
    const { error: insertError } = await supabase.from('users').insert({
      userId: newUser.user.id,
      company: company,
      role: 'member',
    });

    if (insertError) return { error: insertError };
  }

  return { success: true, newUser };
}
