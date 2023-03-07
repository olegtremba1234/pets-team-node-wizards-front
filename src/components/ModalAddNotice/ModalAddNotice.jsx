import { WrapperContainer, ModalWrap, FormWrapper, ModalTitle } from "./ModalAddNotice.styled";
import FirstModalPage from './FirstModalPage'
import { useState } from "react";


const ModalAddNotice = () => {
  const [page, setPage] = useState(0);
  const [firstModalValues, setFirstModalValues] = useState({
    category: 'sell',
    title: '',
    name: '',
    birthDate: '',
    breed: '',
  });


  const handleFirstInputSubmit = values => {
    setFirstModalValues(values);
    setPage(prevPage => prevPage + 1);
  };


  return (
    <WrapperContainer>
      <ModalWrap>
        <FormWrapper>
        <ModalTitle>Add pet</ModalTitle>
        <FirstModalPage
              firstValues={firstModalValues}
              setFirstValues={setFirstModalValues}
              handleFirstInputSubmit={handleFirstInputSubmit}
              />

        </FormWrapper>
      </ModalWrap>
    </WrapperContainer>
  )
}

export default ModalAddNotice;
