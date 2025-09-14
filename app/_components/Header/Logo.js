'use client';

import { useRouter } from 'next/navigation';
import { AiFillAppstore } from 'react-icons/ai';

function Logo() {
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => router.push('/notes')}
    >
      <AiFillAppstore size={50} />
      <h1 className="text-2xl font-bold">Yardstick</h1>
    </div>
  );
}

export default Logo;
