import Logout from '../Logaut/Logout';
import UserDataItem from '../UserDataItem/UserDataItem';
import { UserInfo, Button, ImageItem, DataItem } from './userData.styled';
import { Icons } from '../Icons/Icons';
import { fetchUserPets } from 'services/apiService';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

// import { useSelector } from 'react-redux';
// import { fetchUserInfo } from 'services/apiService';



const UserData = () => {
  // const defaultAvatar = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__480.png';
  // const [userInfo, setUserInfo] = useState([]);
  const [setUserInfo] = useState([]);

  const token = useSelector(selectToken);

  const userDataInfo = async () => {
    const info = await fetchUserPets(token).then(setUserInfo);
    return info;
  };

  useEffect(() => {
    userDataInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const { id, name, email, birthday, city, phone, avatarUrl } = userInfo;


  return (
    <UserInfo>
      <ImageItem>
        {/* <ImageUser src={avatarUrl||defaultAvatar} alt={name} /> */}
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
