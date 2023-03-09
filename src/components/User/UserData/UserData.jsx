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
  const defaultAvatar ='https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__480.png';

  const [userInfo, setUserInfo] = useState();
  // const [update, setUpdate] = useState(false);

  const filePicker = useRef(null);

  const token = useSelector(selectToken);




  const userDataInfo = async () => {
    const info = await fetchUserPets(token).then(setUserInfo);
    return info;
  };

  useEffect(() => {
    userDataInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const handleOnChange= async(img)=>{

    console.log(img)
 
    const formData = new FormData();
    formData.append("avatar", img)
  
   const res = await fetchUserAvatar(formData, token)

   const data = await res.json()

   console.log(data)

  }



  const handleSendFile=()=>{
    filePicker.current.click()
  }

  // const { id, name, email, birthday, city, phone, avatarUrl } = userInfo;


  return (
    <UserInfo>
      <ImageItem>
        {userInfo && userInfo.user.avatarUrl ? (
          <ImageUser src={userInfo.user.avatarUrl} alt={userInfo.user.name} />
        ) : (
          <ImageUser src={defaultAvatar} alt="name" />
        )}
        <input type="file"
          id='file'
          accept='image/*, .png,.jpg,.gif,.web'
          ref={filePicker}
          hidden
          onChange={(e) => {handleOnChange(e.target.files[0])}}
            
        />
        <Button
          type="button"
          onClick={handleSendFile}
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
