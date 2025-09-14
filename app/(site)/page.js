import { redirect } from 'next/navigation';
import LoginForm from './_components/LoginForm';
import { getSession } from '../_hooks/useSession';

export const metadata = {
  title: 'Sign In',
};

async function Page() {
  const { user, profile } = await getSession();

  if (user !== null) return redirect('/notes');

  return (
    <div className="flex justify-center mt-32">
      <div className="w-[30%]">
        <LoginForm />
      </div>
    </div>
  );
}

export default Page;
