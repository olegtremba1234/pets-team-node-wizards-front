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

export default function NoticeCategoryItem() {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={
            ' https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
          }
        />
        <HeartBtn>
          <AiOutlineHeart size="10x" color="#F59256" />
        </HeartBtn>
        <CategoryInfo>In good hands</CategoryInfo>
      </ImageWrapper>
      <InfoWrapper>
        <Title>Сute dog looking for a home</Title>
        <DescriptionWrapper>
          <DescriptionList>
            <li>Breed:</li>
            <li>Place:</li>
            <li>Age:</li>
          </DescriptionList>
          <DescriptionInfo>
            <li>Pomeranian</li>
            <li>Lviv</li>
            <li>one year</li>
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
