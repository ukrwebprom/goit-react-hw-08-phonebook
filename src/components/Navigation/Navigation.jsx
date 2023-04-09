import { Link } from 'react-router-dom';
import { getIsLogged } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import './navigation.scss';

export const Navigation = () => {
  const logged = useSelector(getIsLogged);

  return (
    <ul className="nav">
      {logged ? (
        <>
          <li>
            <Link to="contacts">Contacts</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="register">Sign Up</Link>
          </li>
          <li>
            <Link to="login">Log In</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export const MobileNav = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const onMenuClick = () => {
    setIsDropdown(i => !i);
  };
  return (
    <>
      <button type="button" onClick={onMenuClick} className="mobile-menu">
        <HiMenuAlt3 size="30px" />
      </button>
      {isDropdown && <Dropdown />}
    </>
  );
};

const Dropdown = () => {
  return (
    <div className="menu-dropdown">
      <Navigation />
    </div>
  );
};
