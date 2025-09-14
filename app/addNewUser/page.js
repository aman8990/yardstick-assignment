import { redirect } from 'next/navigation';
import { getSession } from '../_hooks/useSession';
import NewUserForm from './_components/NewUserForm';

export const metadata = {
  title: 'Add New User',
};

async function page() {
  const { profile } = await getSession();
  const isAdmin = profile?.role === 'admin';
  const company = profile?.company;

  if (!isAdmin) return redirect('/notes');

  return (
    <div className="flex justify-center mt-32">
      <NewUserForm company={company} />
    </div>
  );
}

export default page;
