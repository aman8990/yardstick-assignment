import { getNotes } from '@/app/_actions/notes';
import AddNoteButton from './AddNoteButton';
import { getSession } from '@/app/_hooks/useSession';
import { getPremium } from '@/app/_actions/premuim';

async function AddNote() {
  const { profile } = await getSession();

  const notes = await getNotes();
  const noNewNotes = notes.length >= 3;

  const company = profile?.company;
  const premium = await getPremium(company);

  const hasPremium = premium.length !== 0;

  if (!profile) return null;

  return (
    <div>
      <AddNoteButton noNewNotes={noNewNotes} hasPremium={hasPremium} />
    </div>
  );
}

export default AddNote;
