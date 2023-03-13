import {
  Card,
  Image,
  Title,
  LearnMoneBtn,
  DeleteBtn,
  HeartBtn,
  CategoryInfo,
  ImageWrapper,
  InfoWrapper,
  ButtonWrapper,
} from './NoticeCategoryItem.styled';
import { toast } from 'react-toastify';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { useState } from 'react';
import ModalNotice from 'components/ModalNotice';
import {
  deleteOwnNoticeById,
  addNoticeToFavourite,
  deleteNoticeFromFavorite,
} from 'redux/notices/noticeOperation';
import { selectToken } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';

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
  price,
}) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToFavorite = id => {
    if (!token) {
      toast.error('Oops..You must be logged in to add to favorites');
      return;
    }
    if (isFavorite) {
      dispatch(deleteNoticeFromFavorite({ id, token }))
        .then(() => toast.success('Deleted from favorite successfully'))
        .catch(err => {
          toast.error(
            'Oops...Something went wrong. Failed to add to the favorite list'
          );
        });
      return;
    }

    dispatch(addNoticeToFavourite({ id, token }))
      .then(() => toast.success('Added to favorite successfully'))
      .catch(err => {
        toast.error(
          'Oops...Something went wrong.  Failed to delete from the favorite list'
        );
      });
  };

  const handleDelete = id => {
    dispatch(deleteOwnNoticeById({ id, token }))
      .then(() => toast.success('Deleted successfully'))
      .catch(err => {
        toast.error('Oops...Something went wrong. Failed to delete');
      });
  };
  return (
    <Card>
      <ImageWrapper>
        <Image src={petPhotoURL} />
        <HeartBtn
          isFavorite={isFavorite}
          onClick={() => handleAddToFavorite(id)}
        >
          <AiOutlineHeart size="100%" color={isFavorite ? '#fff' : '#F59256'} />
        </HeartBtn>
        <CategoryInfo>
          {category === 'lost-found'
            ? 'lost/found'
            : category === 'in-good-hands'
            ? 'in good hands'
            : 'sell'}
        </CategoryInfo>
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>

        <table
          style={{
            borderCollapse: 'separate',
            borderSpacing: '8px',
            marginBottom: '20px',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '22px',
          }}
        >
          <tbody>
            <tr style={{ marginBottom: '8px' }}>
              <th style={{ textAlign: 'left', minWidth: '50px' }}>Breed:</th>
              <td style={{ marginLeft: '37px', display: 'block' }}>{breed}</td>
            </tr>
            <tr style={{ marginBottom: '8px' }}>
              <th style={{ textAlign: 'left', minWidth: '50px' }}>Place:</th>
              <td style={{ marginLeft: '37px', display: 'block' }}>
                {location}
              </td>
            </tr>
            <tr style={{ marginBottom: '8px' }}>
              <th style={{ textAlign: 'left', minWidth: '50px' }}>Age:</th>
              <td style={{ marginLeft: '37px', display: 'block' }}>
                {birthday}
              </td>
            </tr>
            {category === 'sell' && (
              <tr>
                <th style={{ textAlign: 'left', minWidth: '50px' }}>Price:</th>
                <td style={{ marginLeft: '37px', display: 'block' }}>
                  {price}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <ButtonWrapper>
          <LearnMoneBtn isOwn={isOwn} onClick={() => setIsModalOpen(true)}>
            Learn more
          </LearnMoneBtn>
          {isOwn && (
            <DeleteBtn onClick={() => handleDelete(id)}>
              Delete <BsTrash color="#F59256" />
            </DeleteBtn>
          )}
        </ButtonWrapper>
      </InfoWrapper>
      {isModalOpen && (
        <ModalNotice
          handleDelete={handleDelete}
          handleAddToFavorite={handleAddToFavorite}
          id={id}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Card>
  );
}
