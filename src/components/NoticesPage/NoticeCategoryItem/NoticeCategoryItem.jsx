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
}) {
  const token = useSelector(selectToken);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <HeartBtn onClick={() => handleAddToFavorite(id)}>
          <AiOutlineHeart size="10x" color="#F59256" />
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
        <LearnMoneBtn onClick={() => setIsModalOpen(true)}>
          Learn more
        </LearnMoneBtn>
        <DeleteBtn onClick={() => handleDelete(id)}>
          Delete <BsTrash color="#F59256" />
        </DeleteBtn>
      </InfoWrapper>
      {isModalOpen && <ModalNotice id={id} setIsModalOpen={setIsModalOpen} />}
    </Card>
  );
}
