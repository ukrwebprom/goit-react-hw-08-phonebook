import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';
import { useWindowSize } from 'usehooks-ts';
import './usermenu.scss';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { width } = useWindowSize();
  return width > 480 ? (
    <div className="usermenu">
      <p>{user.email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  ) : (
    <p onClick={() => dispatch(logout())} style={{ cursor: 'pointer' }}>
      Logout
    </p>
  );
};
