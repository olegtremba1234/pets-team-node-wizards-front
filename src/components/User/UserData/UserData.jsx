import Logout from '../Logaut/Logout';
import UserDataItem from '../UserDataItem/UserDataItem';
import { UserInfo, ImageUser, Button, ImageItem , DataItem} from './userData.styled';
import { Icons } from '../Icons/Icons';


// import { useSelector } from 'react-redux';
// import { fetchUserInfo } from 'services/apiService';



const UserData = () => {
  const defaultAvatar ='https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__480.png';


  // const userInfo = useSelector(fetchUserInfo)
  // console.log(userInfo)

  return (
    <UserInfo>
      <ImageItem>
        <ImageUser src={defaultAvatar} alt="name" />
        <Button type="button">
          <Icons id="camera" />
          Edit photo
        </Button>
      </ImageItem>
      <DataItem>
        <UserDataItem />
        <Logout />
      </DataItem>
    </UserInfo>
  );
};

export default UserData;
