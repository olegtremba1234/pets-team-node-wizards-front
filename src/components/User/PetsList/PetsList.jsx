import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
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

const PetsList = ({ refresh, refreshStop }) => {
  const [petsInfo, setPetsInfo] = useState({});
  const token = useSelector(selectToken);

  if (refresh) {
    const fetchPetData = async () => {
      const petData = await fetchUserPets(token);
      setPetsInfo(petData);
      refreshStop(false);
    };
    fetchPetData();
  }

  const handleDeletePets = async petId => {
    try {
      await fetchPetsDelete(token, petId);

      setPetsInfo(prevState => ({
        petUser: prevState.petUser.filter(pets => pets._id !== petId),
      }));
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    const fetchPetData = async () => {
      const petData = await fetchUserPets(token);
      setPetsInfo(petData);
    };
    fetchPetData();
  }, [token]);

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
