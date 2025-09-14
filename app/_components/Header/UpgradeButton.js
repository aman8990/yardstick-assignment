'use client';

import { useRouter } from 'next/navigation';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

function UpgradeButton() {
  const router = useRouter();

  return (
    <div>
      <button
        className="flex bg-green-700 p-3 rounded-md font-semibold cursor-pointer items-center gap-2"
        onClick={() => router.push('/upgrade')}
      >
        <span>Upgrade</span>
        <span>
          <RiMoneyDollarCircleFill size={20} color="orange" />
        </span>
      </button>
    </div>
  );
}

export default UpgradeButton;
