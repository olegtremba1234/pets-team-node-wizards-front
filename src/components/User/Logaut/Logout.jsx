import { useDispatch } from 'react-redux';
import { Icons } from '../Icons/Icons';
import { Button } from './LogOut.styled';
import { logOut } from '../../../redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { userSelector } from 'redux/user/userSelector';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const isUserLogin = userSelector(selectIsLoggedIn);

  const onLogout = () => {
    dispatch(logOut());
    if (!isUserLogin) {
      return <Navigate to={'/news'} />;
    }
  };

  return (
    <div>
      <Button className="" type="button" onClick={onLogout}>
        <Icons className="icon" id="icon-user_logout" />
        <span>Log Out</span>
      </Button>
    </div>
  );
};

// onClick={onLogout}
// variant="contained"
export default Logout;
