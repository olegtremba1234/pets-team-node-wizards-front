import { Icons } from '../Icons/Icons';
import { Button } from './LogOut.styled';

const Logout = () => {
  return (
    <div >
      <Button  className='' type="button">
        <Icons  className='icon' id="icon-user_logout" />
         <span>Log Out</span>
      </Button>
    </div>
  );
};

// onClick={onLogout}
// variant="contained"
export default Logout;
