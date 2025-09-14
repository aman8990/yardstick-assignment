import { getSession } from '@/app/_hooks/useSession';
import AddUserButton from './AddUserButton';

async function AddUser() {
  const { profile } = await getSession();
  const isAdmin = profile?.role === 'admin';

  if (!isAdmin) return null;

  return (
    <div>
      <AddUserButton />
    </div>
  );
}

export default AddUser;
