import { redirect } from 'next/navigation';
import { getPremium } from '../_actions/premuim';
import { getSession } from '../_hooks/useSession';
import UpgradeMain from './_components/UpgradeMain';
import Hint from './_components/Hint';

async function page() {
  const { user, profile } = await getSession();
  const isAdmin = profile?.role === 'admin';
  const email = user?.email;

  const company = profile?.company;
  const premium = await getPremium(company);
  const hasPremium = premium.length !== 0;

  if (!isAdmin || hasPremium) return redirect('/notes');

  return (
    <div>
      <UpgradeMain email={email} />
      <Hint />
    </div>
  );
}

export default page;
