import { getNotes } from '@/app/_actions/notes';
import AddNoteButton from './AddNoteButton';
import { getSession } from '@/app/_hooks/useSession';
import { getPremium } from '@/app/_actions/premuim';
import AccountButton from './AccountButton';

async function Account() {
  const { profile } = await getSession();

  if (!profile) return null;

  return (
    <div>
      <AccountButton />
    </div>
  );
}

export default Account;
