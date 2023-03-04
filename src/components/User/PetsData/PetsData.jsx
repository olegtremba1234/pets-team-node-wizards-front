import { Icons } from '../Icons/Icons';
import PetsList from '../PetsList/PetsList';
import { AddPets, ButtonIcon , ButtonBack, Pets} from './PetsData.styled';

const PetsData = () => {
  return (
    <Pets>
      <AddPets>
        <h3>My pets:</h3>
        <ButtonIcon type="button">
          Add pet
          <ButtonBack>
            <Icons id="icon-user_plus" />
          </ButtonBack>
        </ButtonIcon>
      </AddPets>
      <PetsList/>
    </Pets>
  );
};

export default PetsData;
