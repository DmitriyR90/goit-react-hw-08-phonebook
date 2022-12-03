import { LogoutBtn, UserMenuLinks, User } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logout } from './../../redux/auth/authOperations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuLinks>
      <User>{user.email}</User>
      <LogoutBtn onClick={() => handleLogout()}>Logout</LogoutBtn>
    </UserMenuLinks>
  );
};
