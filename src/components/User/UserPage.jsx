// import { fetchUser } from 'services/apiService';
import PetsData from './PetsData/PetsData';
import UserData from './UserData/UserData';
import { UserPage, MyInfo, UserInfo } from './UserPage.styled';
// import { selectToken } from 'redux/auth/authSelectors';
// import { useSelector } from 'react-redux';


const User = () => {
  



  return (
    <UserPage>
      <UserInfo>
        <MyInfo>My information</MyInfo>
        <UserData />
      </UserInfo>
      <PetsData />
    </UserPage>
  );
};

export default User;
