
import PetsData from "./PetsData/PetsData";
import UserData from "./UserData/UserData";
import {UserPage, MyInfo} from "./UserPage.styled"


const User = () => {
  return (
    <UserPage>
      <MyInfo>My information</MyInfo>
      <UserData/>
      <PetsData/>
    </UserPage>
  );
};

export default User;