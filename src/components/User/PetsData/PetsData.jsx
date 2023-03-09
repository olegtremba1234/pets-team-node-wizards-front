import ModalAddsPet from 'components/ModalAddsPet';

import PetsList from '../PetsList/PetsList';
import { AddPets, Pets, BtnWrapper } from './PetsData.styled';

const PetsData = () => {
  return (
    <Pets>
      <AddPets>
        <h3>My pets:</h3>
        <BtnWrapper>
          <ModalAddsPet>
            
              {/* <Icons id="icon-user_plus"/> */}
           
          </ModalAddsPet>
        </BtnWrapper>
      </AddPets>
      <PetsList />
    </Pets>
  );
};

export default PetsData;
