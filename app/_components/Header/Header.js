import Account from './Account';
import AddNote from './AddNote';
import AddUser from './AddUser';
import Logo from './Logo';
import Logout from './Logout';
import Upgrade from './Upgrade';

function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-5">
      <Logo />

      <div className="flex items-center gap-10">
        <AddUser />
        <AddNote />
        <Upgrade />
        <Account />
        <Logout />
      </div>
    </div>
  );
}

export default Header;
