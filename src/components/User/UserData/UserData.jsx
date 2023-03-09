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
  const [update, setUpdate] = useState(false);
  // const avatarRef = useRef(null)
  const token = useSelector(selectToken);
  const avatarRef = useRef(null);
  // ////////////////////////////////////////
  //  const[ selectedFile, setSelectedFile]= useState()

  //   const [up, setUp]= useState()

  // ///////////////////////////////////
  const userDataInfo = async () => {
    const info = await fetchUserPets(token).then(setUserInfo);
    return info;
  };

  useEffect(() => {
    userDataInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditPhoto = async img => {
    const form = new FormData();
    form.append('avatar', img);

    // const res = await fetchUserAvatar(form, {
    //   method: 'POST',
    //   body: form,
    // });

    const data = await res.json()

    setUpdate(data)

    // setUserInfo((state) => {
    //   state.avatarURL = res.data.avatarURL;
    //   console.log(res.data.avatarURL);
    //   return state;
    // });
    // setUpdate(!update);
    
   
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
          accept='image/*, .png,.jpg,.gif,.web'
          ref={avatarRef}
          hidden

          onChange={e => {
            handleEditPhoto(e.target.files[0]);
          }}
        />
        <Button
          type="button"
          onClick={() => {
            avatarRef.current.click();
          }}
        >
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
