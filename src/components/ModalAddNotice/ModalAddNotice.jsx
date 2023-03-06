import { WrapperContainer, ModalWrap, FormWrapper, ModalTitle } from "./ModalAddNotice.styled";
import FirstStep from "./FirstStep";
import { useState } from "react";


const ModalAddNotice = () => {
  const [firstStepValues, setFirstStepValues] = useState({
    category: 'sell',
    title: '',
    name: '',
    birthDate: '',
    breed: '',
  });


  return (
    <WrapperContainer>
      <ModalWrap>
        <FormWrapper>
        <ModalTitle>Add pet</ModalTitle>
        <FirstStep
              firstStepValues={firstStepValues}
              setFirstStepValues={setFirstStepValues}
              />

        </FormWrapper>
      </ModalWrap>
    </WrapperContainer>
  )
}

export default ModalAddNotice;
