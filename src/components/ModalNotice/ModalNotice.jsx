import { useEffect, useState, Fragment } from 'react';
import {
  addNoticeToFavourite,
  deleteOwnNoticeById,
  fetchNoticeById,
  deleteNoticeFromFavorite,
} from 'services/apiService';
import {
  ModalWindow,
  ContentWrapper,
  Image,
  CategoryWrapper,
  CategoryText,
  H3,
  TableWrapper,
  Ul,
  KeyLi,
  ValueLi,
  Link,
  Comment,
  CloseBtn,
  ButtonWrapper,
  Li,
  ButtonAdd,
  HeartIcon,
  LinkContact,
  CloseIcon,
  SpanComment,
  ButtonRemoveFromFavorite,
} from './ModalNotice.styled';
import { Overlay } from 'components/ModalAddsPet/ModalAddsPet.styled';
import defaultCat from './images/defaultCat.jpg';
import Media from 'react-media';
import transormDate from 'helpers/transformDate';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ModalNotice({ id, setIsModalOpen }) {
  const [noticeDetails, setNoticesDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector(state => state.auth.accessToken);

  const handleAddToFavorite = async id => {
    setIsLoading(true);
    if (!token) {
      setIsLoading(false);
      toast.error('Oops...You must be logged in to add to favorites');
      return;
    }
    try {
      await addNoticeToFavourite(id, token);
      setIsFavorite(true);
      toast.success('Added to favorite list successfully');
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      toast.error(
        'Oops...Something went wrong. Failed to add to the favorite list'
      );
      setIsLoading(false);
    }
  };

  const handleRemoveFromFavorite = async id => {
    setIsLoading(true);
    try {
      await deleteNoticeFromFavorite(id, token);
      toast.success('Deleted from favorite list successfully');
      setIsFavorite(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(
        'Oops...Something went wrong. Failed to delete from the favorite list'
      );
      setIsLoading(false);
    }
  };

  const handleDelete = async id => {
    setIsLoading(true);
    try {
      await deleteOwnNoticeById(id, token);
      setIsLoading(false);
      toast.success('Deleted successfully');
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('Oops...Something went wrong. Failed to delete');
      setIsLoading(false);
    }
  };

  const fetchCurrentNotice = async () => {
    try {
      const data = await fetchNoticeById(id, token);
      setNoticesDetails(data);
      setIsFavorite(data.isFavorite);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCurrentNotice();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const escapeModal = event => {
      if (event.code === 'Escape') {
        event.preventDefault();
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  });

  const handleCloseModal = event => {
    if (event.currentTarget === event.target) {
      setIsModalOpen(false);
    }
  };

  return (
    <Overlay onClick={handleCloseModal}>
      {isLoading && (
        <ClipLoader
          color="#F59256"
          cssOverride={{
            zIndex: 1000,
            position: 'fixed',
            top: ' 50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        />
      )}
      {noticeDetails && (
        <>
          <ModalWindow>
            <CloseBtn onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </CloseBtn>
            <ContentWrapper>
              <div>
                <Image
                  src={
                    noticeDetails.petPhotoURL
                      ? noticeDetails.petPhotoURL
                      : defaultCat
                  }
                  alt={noticeDetails.breed}
                  loading="lazy"
                />
                <CategoryWrapper>
                  <CategoryText>{noticeDetails.category}</CategoryText>
                </CategoryWrapper>
              </div>
              <div>
                <H3>{noticeDetails.title} </H3>
                <TableWrapper>
                  <Ul>
                    <KeyLi>Name:</KeyLi>
                    <KeyLi>Birtday:</KeyLi>
                    <KeyLi>Breed:</KeyLi>
                    <KeyLi>Place:</KeyLi>
                    <KeyLi>The sex:</KeyLi>
                    <KeyLi> Email:</KeyLi>
                    <KeyLi>Phone:</KeyLi>
                    {noticeDetails.category === 'sell' && <KeyLi>Price:</KeyLi>}
                  </Ul>
                  <Ul>
                    <ValueLi>{noticeDetails.name}</ValueLi>
                    <ValueLi>{transormDate(noticeDetails.birthday)}</ValueLi>
                    <ValueLi>{noticeDetails.breed}</ValueLi>
                    <ValueLi>{noticeDetails.location}</ValueLi>
                    <ValueLi>{noticeDetails.sex}</ValueLi>
                    <ValueLi>
                      <Link href={`mailto:${noticeDetails.email}`}>
                        {noticeDetails.email}
                      </Link>
                    </ValueLi>
                    <ValueLi>
                      <Link href={`tel:${noticeDetails.phone}`}>
                        {noticeDetails.phone}
                      </Link>
                    </ValueLi>
                    {noticeDetails.category === 'sell' && (
                      <ValueLi>{noticeDetails.price} &#36;</ValueLi>
                    )}
                  </Ul>
                </TableWrapper>
              </div>
            </ContentWrapper>
            <Comment>
              <SpanComment>Comments: </SpanComment>
              {noticeDetails.comments}
            </Comment>
            <ButtonWrapper>
              {noticeDetails.isOwn ? (
                <>
                  <Li>
                    <ButtonAdd
                      type="button"
                      onClick={() => handleDelete(noticeDetails.id)}
                    >
                      Delete
                    </ButtonAdd>
                  </Li>
                  <Li>
                    {isFavorite ? (
                      <ButtonRemoveFromFavorite
                        type="button"
                        onClick={() =>
                          handleRemoveFromFavorite(noticeDetails.id)
                        }
                      >
                        Remove from <HeartIcon />
                      </ButtonRemoveFromFavorite>
                    ) : (
                      <ButtonAdd
                        type="button"
                        onClick={() => handleAddToFavorite(noticeDetails.id)}
                      >
                        Add to <HeartIcon />
                      </ButtonAdd>
                    )}
                  </Li>
                </>
              ) : (
                <>
                  <Li>
                    <Media
                      queries={{
                        small: '(max-width: 767px)',
                        medium: '(min-width: 768px) and (max-width: 1279px)',
                        large: '(min-width: 1280px)',
                      }}
                    >
                      {matches => (
                        <Fragment>
                          {matches.small && (
                            <LinkContact href={`tel:${noticeDetails.phone}`}>
                              Contact
                            </LinkContact>
                          )}
                          {(matches.medium || matches.large) && (
                            <LinkContact href={`mailto:${noticeDetails.email}`}>
                              Contact
                            </LinkContact>
                          )}
                        </Fragment>
                      )}
                    </Media>
                  </Li>
                  <Li>
                    {isFavorite ? (
                      <ButtonRemoveFromFavorite
                        type="button"
                        onClick={() =>
                          handleRemoveFromFavorite(noticeDetails.id)
                        }
                      >
                        Remove from <HeartIcon />
                      </ButtonRemoveFromFavorite>
                    ) : (
                      <ButtonAdd
                        type="button"
                        onClick={() => handleAddToFavorite(noticeDetails.id)}
                      >
                        Add to <HeartIcon />
                      </ButtonAdd>
                    )}
                  </Li>
                </>
              )}
            </ButtonWrapper>
          </ModalWindow>
        </>
      )}
    </Overlay>
  );
}
