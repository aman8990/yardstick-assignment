import { getSession } from '@/app/_hooks/useSession';
import UpgradeButton from './UpgradeButton';
import { getPremium } from '@/app/_actions/premuim';

async function Upgrade() {
  const { profile } = await getSession();
  const isAdmin = profile?.role === 'admin';

  const company = profile?.company;
  const premium = await getPremium(company);
  const hasPremium = premium.length !== 0;

  if (!isAdmin || hasPremium) return null;

  return (
    <div>
      <UpgradeButton />
    </div>
  );
}

export default Upgrade;
