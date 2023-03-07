import { WrapperContainer, ModalWrap, FormWrapper, ModalTitle, CloseButton} from "./ModalAddNotice.styled";
import FirstModalPage from './FirstModalPage';
import SecondModalPage from "./SecondModalPage";
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


  const [secondStepValues, setSecondStepValues] = useState({
    sex: '',
    location: '',
    price: '',
    avatar: '',
    comments: '',
  });

  const handleFirstInputSubmit = values => {
    setFirstModalValues(values);
    setPage(prevPage => prevPage + 1);
  };


  const handleBackToFirst = values => {
    setSecondStepValues(values);
    setPage(prevPage => prevPage - 1);
  };

  const handleSecondStepSubmit = values => {
    const { comments, avatar, price, location, sex } = values;
    const formData = new FormData();

    formData.append('category', firstModalValues.category);
    formData.append('title', firstModalValues.title);
    formData.append('petName', firstModalValues.name);
    formData.append('breed', firstModalValues.breed);
    formData.append('sex', sex);
    formData.append('location', location);
    formData.append('avatar', avatar);
    formData.append('comments', comments);
    firstModalValues.category === 'sell' &&
      formData.append('price', Number(price));
    firstModalValues.category !== 'lost-found' &&
      formData.append('birthDate', firstModalValues.birthDate);

    // dispatch(noticesOperations.addNotice(formData));
  };


  const [fileValue, setFileValue] = useState('');
  return (
    <WrapperContainer>
      <ModalWrap>
        <FormWrapper>
        <ModalTitle>Add pet</ModalTitle>
{/*
        <FirstModalPage
              firstValues={firstModalValues}
              setFirstValues={setFirstModalValues}
              handleFirstInputSubmit={handleFirstInputSubmit}
              /> */}
              <SecondModalPage
              handleBackToFirst={handleBackToFirst}
              secondStepValues={secondStepValues}
              // handleAddAvatar={handleAddAvatar}
              file={fileValue}
              handleSecondStepSubmit={handleSecondStepSubmit}
              category={firstModalValues.category}
              />
               <CloseButton

            // onClick={handleModalClose}
          >
          </CloseButton>


        </FormWrapper>
      </ModalWrap>
    </WrapperContainer>
  )
}

export default ModalAddNotice;
