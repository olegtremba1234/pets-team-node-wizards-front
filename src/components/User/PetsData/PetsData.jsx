import ModalAddsPet from 'components/ModalAddsPet';
import { Icons } from '../Icons/Icons';
import PetsList from '../PetsList/PetsList';
import { AddPets, ButtonBack, Pets, BtnWrapper } from './PetsData.styled';

const PetsData = () => {
  return (
    <Pets>
      <AddPets>
        <h3>My pets:</h3>
        <BtnWrapper>
          <ModalAddsPet>
            <ButtonBack>
              <Icons id="icon-user_plus" />
            </ButtonBack>
          </ModalAddsPet>
        </BtnWrapper>
      </AddPets>
      <PetsList />
    </Pets>
  );
};

export default PetsData;
