import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
// import { userSelector } from 'redux/user/userSelector';
import { fetchUserPets } from 'services/apiService';
import { Icons } from '../Icons/Icons';
import {
  Image,
  ButtonDel,
  PetsDescribed,
  DescribedItem,
  PetsDescribedItem,
  Item,
  ItemList,
} from './PestList.styled';

const PetsList = () => {
  const [petsInfo, setPetsInfo] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
   
    fetchUserPets(token).then(setPetsInfo);
    
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log(petsInfo.petUser);
 

  return (
    <PetsDescribed>
      {petsInfo.petUser.map(({id,name,birthDay,breed,comments,avatarURL})=><li></li>)}
      {/* {petUser.map((el)=>{})} */}
      {/* <PetsDescribedItem>
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/28/11/31/dog-220274__480.jpg"
          alt="name"
        />
        <ItemList>
          <ButtonDel type="button">
            <Icons id="icon-user_delete" />
          </ButtonDel>
          <DescribedItem>
            <Item>
              Name:<span>Cat</span>
            </Item>
            <Item>
              Date of birth:<span> March </span>
            </Item>
            <Item>
              Breed:<span>Cat</span>
            </Item>
            <Item>
              Comment:
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, praesentium fugiat. Soluta, reprehenderit obcaecati.
                Pariatur modi omnis perspiciatis architecto earum reiciendis
                rerum recusandae, fugit provident cupiditate maiores error illo
                numquam?
              </span>
            </Item>
          </DescribedItem>
        </ItemList>
      </PetsDescribedItem> */}
    </PetsDescribed>
  );
};

export default PetsList;
