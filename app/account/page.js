import { getSession } from '../_hooks/useSession';
import AccountInfo from './_components/AccountInfo';

async function Page() {
  const { user, profile } = await getSession();

  return (
    <div>
      <AccountInfo user={user} profile={profile} />
    </div>
  );
}

export default Page;
