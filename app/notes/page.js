import { redirect } from 'next/navigation';
import { getNotes } from '../_actions/notes';
import { getSession } from '../_hooks/useSession';
import Notes from './_components/Notes';

export const metadata = {
  title: 'Notes',
};

async function Page() {
  const notes = await getNotes();

  return (
    <div>
      <Notes notes={notes} />
    </div>
  );
}

export default Page;
