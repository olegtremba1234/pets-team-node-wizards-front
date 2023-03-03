import Logout from '../Logaut/Logaut';
import UserDataItem from '../UserDataItem/UserDataItem';
import { UserInfo, ImageUser, Button } from './userData.styled';
import { Icons } from '../Icons/Icons';

const UserData = () => {
  const defaultAvatar =
    'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__480.png';

  return (
    <UserInfo>
      <ImageUser src={defaultAvatar} alt="name" />
      <Button type="button">
        <Icons id="camera" />
        Edit photo
      </Button>
      <UserDataItem />
      <Logout />
    </UserInfo>
  );
};

export default UserData;
