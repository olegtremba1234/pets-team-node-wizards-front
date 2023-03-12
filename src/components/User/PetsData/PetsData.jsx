import ModalAddsPet from 'components/ModalAddsPet';
import { useState } from 'react';

import PetsList from '../PetsList/PetsList';
import { AddPets, Pets, BtnWrapper } from './PetsData.styled';

const PetsData = ({user}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Pets>
      <AddPets>
        <h3>My pets:</h3>
        <BtnWrapper>
          <ModalAddsPet infoModal={handleOpenModal}>
            {/* <Icons id="icon-user_plus"/> */}
          </ModalAddsPet>
        </BtnWrapper>
      </AddPets>
      <PetsList refresh={openModal} refreshStop={setOpenModal} data={user}/>
    </Pets>
  );
};

export default PetsData;
