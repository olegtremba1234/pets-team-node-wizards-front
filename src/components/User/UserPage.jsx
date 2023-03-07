import PetsData from './PetsData/PetsData';
import UserData from './UserData/UserData';
import { UserPage, MyInfo, UserInfo } from './UserPage.styled';

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
