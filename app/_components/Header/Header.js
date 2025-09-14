import AddNote from './AddNote';
import AddUser from './AddUser';
import Logo from './Logo';
import Logout from './Logout';
import Upgrade from './Upgrade';

function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-5">
      <Logo />
      <AddUser />
      <AddNote />
      <Upgrade />
      <Logout />
    </div>
  );
}

export default Header;
