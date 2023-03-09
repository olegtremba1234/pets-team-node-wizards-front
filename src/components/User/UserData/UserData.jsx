import Logout from '../Logaut/Logout';
import UserDataItem from '../UserDataItem/UserDataItem';
import {
  UserInfo,
  ImageUser,
  Button,
  ImageItem,
  DataItem,
} from './userData.styled';
import { Icons } from '../Icons/Icons';
import { fetchUserPets, fetchUserAvatar } from 'services/apiService';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { useEffect, useRef, useState } from 'react';

// import { useSelector } from 'react-redux';
// import { fetchUserInfo } from 'services/apiService';

const UserData = () => {
  const defaultAvatar =
    'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__480.png';

  const [userInfo, setUserInfo] = useState();


  const filePicker = useRef(null);

  const token = useSelector(selectToken);

  const userDataInfo = async () => {
    const info = await fetchUserPets(token).then(setUserInfo);
    return info;
  };
 
  useEffect(() => {
    userDataInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUserInfo]);

  const handleOnChange = async img => {
    const formData = new FormData();
    formData.append('avatar', img);

    await fetchUserAvatar(formData, token);
    userDataInfo()
   
  };

  const handleSendFile = () => {
    filePicker.current.click();
  };

  return (
    <UserInfo>
      <ImageItem>
        {userInfo && userInfo.user.avatarUrl ? (
          <ImageUser src={userInfo.user.avatarUrl} alt={userInfo.user.name} />
        ) : (
          <ImageUser src={defaultAvatar} alt="name" />
        )}
        <input
          type="file"
          id="file"
          accept=".png,.jpg,"
          ref={filePicker}
          hidden
          onChange={e => {
            handleOnChange(e.target.files[0]);
          }}
        />
        <Button type="button" onClick={handleSendFile}>
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
