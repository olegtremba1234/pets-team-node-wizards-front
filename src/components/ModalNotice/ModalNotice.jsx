import { useEffect, useState, Fragment } from 'react';
import {
  addNoticeToFavourite,
  deleteOwnNoticeById,
  fetchNoticeById,
  fetchUserNotices,
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
} from './ModalNotice.styled';
import { Overlay } from 'components/ModalAddsPet/ModalAddsPet.styled';
import defaultCat from './images/defaultCat.jpg';
import Media from 'react-media';
import transormDate from 'helpers/transformDate';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import getIsNoticeOfUser from 'helpers/getIsNoticeOfUser';

export default function ModalNotice({ id, setIsModalOpen }) {
  const [noticeDetails, setNoticesDetails] = useState(null);
  const [userNotices, setUserNotices] = useState(null);
  const [isOwnNotice, setIsOwnNotice] = useState(false);

  const token = useSelector(state => state.auth.accessToken);

  const handleAddToFavorite = id => {
    if (!token) {
      toast.error('Oops..You must be logged in to add to favorites');
      return;
    }
    addNoticeToFavourite(id, token);
  };

  const handleDelete = id => {
    deleteOwnNoticeById(id, token)
      .then(() => toast.success('Deleted successfully'))
      .catch(console.log);
  };

  useEffect(() => {
    fetchNoticeById(id).then(setNoticesDetails).catch(console.log);
  }, [id]);
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

  useEffect(() => {
    if (token) {
      fetchUserNotices(token).then(setUserNotices).catch(console.log);
      if (noticeDetails && userNotices) {
        const isOwnNoticeRes = getIsNoticeOfUser(userNotices, noticeDetails.id);
        setIsOwnNotice(isOwnNoticeRes);
      }
    }
    // eslint-disable-next-line
  }, [token, noticeDetails]);

  return (
    <>
      {noticeDetails && (
        <Overlay onClick={handleCloseModal}>
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
              {isOwnNotice ? (
                <Li>
                  <ButtonAdd
                    type="button"
                    onClick={() => handleDelete(noticeDetails.id)}
                  >
                    Delete
                  </ButtonAdd>
                </Li>
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
                    <ButtonAdd
                      type="button"
                      onClick={() => handleAddToFavorite(noticeDetails.id)}
                    >
                      Add to <HeartIcon />
                    </ButtonAdd>
                  </Li>
                </>
              )}
            </ButtonWrapper>
          </ModalWindow>
        </Overlay>
      )}
    </>
  );
}
