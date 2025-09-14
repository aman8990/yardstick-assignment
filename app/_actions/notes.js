'use server';

import { getSession } from '../_hooks/useSession';
import { createClient } from '../_libs/_supabase/server';
import { getPremium } from './premuim';

export async function getNotes() {
  const supabase = await createClient();

  const { data, error } = await supabase.from('notes').select('*');

  if (error) {
    return { error: 'Error in getting notes' };
  }

  return data;
}

export async function createNote(title, content) {
  const supabase = await createClient();

  const { user, profile } = await getSession();
  if (!user || !profile) throw new Error('You must be logged in');

  const notes = await getNotes();
  const noNewNotes = notes.length >= 3;

  const company = profile?.company;
  const premium = await getPremium(company);

  if (noNewNotes && premium.length === 0) return { error: 'Limit Exceeds' };

  const note = {
    title: title,
    content: content,
    company: profile?.company,
    userId: profile.userId,
  };

  const { data, error } = await supabase.from('notes').insert([note]);

  if (error) {
    return { error: 'Error in creating note' };
  }

  return { success: true };
}

export async function deleteNote(id) {
  const supabase = await createClient();

  const { user, profile } = await getSession();
  if (!user || !profile) throw new Error('You must be logged in');

  let { data: notes, error: noteError } = await supabase
    .from('notes')
    .select('*')
    .eq('id', id);

  if (!notes || noteError || notes.length === 0) {
    return { error: 'No such note found' };
  }

  const note = notes[0];

  if (note.company === profile.company) {
    const { error } = await supabase.from('notes').delete().eq('id', id);

    if (error) {
      return { error: 'Error in deleting note' };
    }

    return { success: true };
  }

  return { error: 'You do not have permission to delete this note' };
}

export async function updateNote(id, title, content) {
  const supabase = await createClient();

  const { user, profile } = await getSession();
  if (!user || !profile) throw new Error('You must be logged in');

  let { data: notes, error: noteError } = await supabase
    .from('notes')
    .select('*')
    .eq('id', id);

  if (!notes || noteError || notes.length === 0) {
    return { error: 'No such note found' };
  }

  const note = notes[0];

  if (note.company === profile.company) {
    const updatedNote = {
      title: title,
      content: content,
    };

    const { data, error } = await supabase
      .from('notes')
      .update({
        title,
        content,
      })
      .eq('id', id)
      .select();

    if (error) {
      return { error: 'Error in updating note' };
    }

    console.log(data, title, content);

    return { success: true };
  }

  return { error: 'You do not have permission to update this note' };
}

// export async function updateNote(id, title, content) {
//   const supabase = await createClient();

//   const { user, profile } = await getSession();
//   if (!user || !profile) {
//     return { error: 'You must be logged in' };
//   }

//   const { data, error } = await supabase
//     .from('notes')
//     .update({
//       title,
//       content,
//     })
//     .eq('id', id)
//     .eq('company', profile.company)
//     .select()
//     .single();

//   if (error) {
//     return { error: 'Error in updating note' };
//   }

//   if (!data) {
//     return { error: 'No such note found or no permission' };
//   }

//   return { success: true, note: data };
// }
