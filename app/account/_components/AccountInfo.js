function AccountInfo({ user, profile }) {
  return (
    <div>
      <h1 className="mt-20 mb-10 text-4xl font-semibold text-center">
        Your Info
      </h1>
      <div className="flex flex-col items-center text-xl font-semibold gap-3">
        <h1>Email : {user?.email}</h1>
        <h1>Company : {profile?.company}</h1>
        <h1>Role : {profile?.role}</h1>
      </div>
    </div>
  );
}

export default AccountInfo;
