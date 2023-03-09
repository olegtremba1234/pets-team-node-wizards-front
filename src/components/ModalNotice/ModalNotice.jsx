import { useEffect, useState, Fragment } from 'react';
import { fetchNoticeById } from 'services/apiService';
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
} from './ModalNotice.styled';
import { Overlay } from 'components/ModalAddsPet/ModalAddsPet.styled';
import defaultCat from './images/defaultCat.jpg';
import Media from 'react-media';
import transormDate from 'helpers/transformDate';

export default function ModalNotice({ id, setIsModalOpen }) {
  const [noticeDetails, setNoticesDetails] = useState(null);

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
            <Comment>{noticeDetails.comments}</Comment>
            <ButtonWrapper>
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
                <ButtonAdd type="button">
                  Add to <HeartIcon />
                </ButtonAdd>
              </Li>
            </ButtonWrapper>
          </ModalWindow>
        </Overlay>
      )}
    </>
  );
}
