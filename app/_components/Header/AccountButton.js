'use client';

import { useRouter } from 'next/navigation';

function AccountButton() {
  const router = useRouter();

  return (
    <div>
      <button
        className="bg-gray-800 p-3 rounded-md font-semibold cursor-pointer"
        onClick={() => router.push('/account')}
      >
        Account
      </button>
    </div>
  );
}

export default AccountButton;
