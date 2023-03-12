import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { fetchUserPets } from 'services/apiService';
import PetsData from './PetsData/PetsData';
import UserData from './UserData/UserData';
import { UserPage, MyInfo, UserInfo } from './UserPage.styled';

const User = () => {
  const [userInfo, setUserInfo] = useState(null);
  const token = useSelector(selectToken);

  useEffect(() => {
    const userDataInfo = async () => {
      const data = await fetchUserPets(token);
      setUserInfo(data);
    };
    userDataInfo();
  }, [token]);

  return (
    <UserPage>
      <UserInfo>
        <MyInfo>My information</MyInfo>
        {userInfo && <UserData user={userInfo} />}
      </UserInfo>
      <PetsData />
    </UserPage>
  );
};

export default User;
