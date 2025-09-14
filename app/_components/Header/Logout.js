import { getSession } from '@/app/_hooks/useSession';
import LogoutButton from './LogoutButton';

async function Logout() {
  const { profile } = await getSession();

  if (!profile) return null;

  return (
    <div>
      <LogoutButton />
    </div>
  );
}

export default Logout;
