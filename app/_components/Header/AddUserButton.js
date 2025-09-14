'use client';

import { useRouter } from 'next/navigation';

function AddUserButton() {
  const router = useRouter();

  return (
    <div>
      <button
        className="bg-gray-800 p-3 rounded-md font-semibold cursor-pointer"
        onClick={() => router.push('/addNewUser')}
      >
        Add New User
      </button>
    </div>
  );
}

export default AddUserButton;
