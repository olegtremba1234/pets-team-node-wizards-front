import {
  Card,
  Image,
  Title,
  DescriptionList,
  DescriptionInfo,
  LearnMoneBtn,
  DeleteBtn,
  HeartBtn,
  CategoryInfo,
  ImageWrapper,
  DescriptionWrapper,
  InfoWrapper,
  ButtonWrapper,
} from './NoticeCategoryItem.styled';
import { toast } from 'react-toastify';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { useState } from 'react';
import ModalNotice from 'components/ModalNotice';
import { addNoticeToFavourite, deleteOwnNoticeById } from 'services/apiService';
import { selectToken } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function NoticeCategoryItem({
  title,
  breed,
  location,
  birthday,
  petPhotoURL,
  category,
  id,
  isOwn,
  isFavorite,
  handleDeleteItem,
}) {
  const token = useSelector(selectToken);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const handleAddToFavorite = id => {
    if (!token) {
      toast.error('Oops..You must be logged in to add to favorites');
      return;
    }
    addNoticeToFavourite(id, token)
      .then(() => toast.success('Added to favorite successfully'))
      .catch(console.log);
  };

  const handleDelete = id => {
    deleteOwnNoticeById(id, token)
      .then(() => toast.success('Deleted successfully'))
      .catch(console.log);
  };
  return (
    <Card>
      <ImageWrapper>
        <Image src={petPhotoURL} />
        <HeartBtn
          isLiked={isLiked}
          isFavorite={isFavorite}
          disabled={isFavorite || isLiked}
          onClick={() => {
            handleAddToFavorite(id);
            setIsLiked(true);
          }}
        >
          <AiOutlineHeart
            size="10x"
            color={isFavorite || isLiked ? '#fff' : '#F59256'}
          />
        </HeartBtn>
        <CategoryInfo>{category}</CategoryInfo>
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <DescriptionWrapper>
          <DescriptionList>
            <li>Breed:</li>
            <li>Place:</li>
            <li>Age:</li>
          </DescriptionList>
          <DescriptionInfo>
            <li>{breed}</li>
            <li>{location}</li>
            <li>{birthday && getAge(birthday)}</li>
          </DescriptionInfo>
        </DescriptionWrapper>
        <ButtonWrapper>
          <LearnMoneBtn onClick={() => setIsModalOpen(true)}>
            Learn more
          </LearnMoneBtn>
          {isOwn && (
            <DeleteBtn
              onClick={() => {
                handleDelete(id);
                handleDeleteItem(id);
              }}
            >
              Delete <BsTrash color="#F59256" />
            </DeleteBtn>
          )}
        </ButtonWrapper>
      </InfoWrapper>
      {isModalOpen && <ModalNotice id={id} setIsModalOpen={setIsModalOpen} />}
    </Card>
  );
}
