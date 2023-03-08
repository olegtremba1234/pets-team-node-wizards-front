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
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

export default function NoticeCategoryItem({
  title,
  breed,
  location,
  birthday,
  petPhotoURL,
  category,
}) {
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
  return (
    <Card>
      <ImageWrapper>
        <Image src={petPhotoURL} />
        <HeartBtn>
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
        <LearnMoneBtn>Learn more</LearnMoneBtn>
        <DeleteBtn>
          Delete <BsTrash color="#F59256" />
        </DeleteBtn>
      </InfoWrapper>
    </Card>
  );
}
