import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
// import { userSelector } from 'redux/user/userSelector';
import { fetchUserPets, fetchPetsDelete } from 'services/apiService';
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

  const handleDeletePets = async _idPet => {
    console.log(_idPet)
    try {
      await fetchPetsDelete(token, _idPet);

      return setPetsInfo(petsInfo =>
        petsInfo.filter(pets => pets._id !== _idPet)
      );
    } catch (error) {
      console.error();
    }
  };

  return (
    <PetsDescribed>
      {petsInfo.petUser &&
        petsInfo.petUser.map(
          ({ _id, name, birthDay, breed, comments, avatarURL }) => (
          
            <PetsDescribedItem key={_id}>
              <Image src={avatarURL} alt={name} />

              <ItemList>
                <ButtonDel type="button" onClick={() => handleDeletePets(_id)}>
                  <Icons id="icon-user_delete" />
                </ButtonDel>
                <DescribedItem>
                  <Item>
                    Name:<span>{name}</span>
                  </Item>
                  <Item>
                    Date of birth:<span>{birthDay}</span>
                  </Item>
                  <Item>
                    Breed:<span>{breed}</span>
                  </Item>
                  <Item>
                    Comment:
                    <span>{comments}</span>
                  </Item>
                </DescribedItem>
              </ItemList>
            </PetsDescribedItem>
          )
        )}
    </PetsDescribed>
  );
};

export default PetsList;
