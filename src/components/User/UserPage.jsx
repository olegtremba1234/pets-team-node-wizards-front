import { useSelector } from 'react-redux';
import { userSelector } from 'redux/user/userSelector';
// import { fetchUser } from 'redux/user/userOperations';
import PetsData from './PetsData/PetsData';
import UserData from './UserData/UserData';
import { UserPage, MyInfo, UserInfo } from './UserPage.styled';




const User = () => {
  
  const userInfo = useSelector(userSelector )
  
  console.log(userInfo)
 


  return (
    <UserPage>
      <UserInfo>
        <MyInfo>My information</MyInfo>
        <UserData user={userInfo}/>
      </UserInfo>
      <PetsData />
    </UserPage>
  );
};

export default User;
