import {
  CardLink,
  CardAddress,
  CardMenu,
  CardMenuItem,
  CardImg,
  CardWrapper,
  CardLeftWrapper,
  CardsList,
  CardsItem,
  FriendsCardsItem,
  FriendsCardsWrap,
  FriendsName,
  FriendsTitle,
  FriendsWrap,
  StyledContainer,
  CardsWithoutSchedule,
} from './OurFriends.styled';
import { useState, useEffect } from 'react';
import { fetchOurFriends } from 'services/apiService';
import defaultImage from '../OurFriends/image/default.svg';
import { ScrollUpButton, scrollTopPage } from 'components/ScrollUpButton';
import { SlArrowUp } from "react-icons/sl";

const PAGE_SCROLL_DOWN = 100;

const OurFriends = ({ data }) => {
  const [friends, setFriends] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);

  let days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchOurFriends().then(setFriends);
  }, []);

  const getWorkTime = arr => {
    const filtered = arr.find(item => item.isOpen === true);
    return `${filtered.from}-${filtered.to}`;
  };

  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

  return (
    <FriendsWrap>
      <StyledContainer>
        <FriendsTitle>Our friends</FriendsTitle>
        <FriendsCardsWrap>
          {friends.map(
            ({
              _id,
              url,
              imageUrl,
              title,
              address,
              addressUrl,
              email,
              phone,
              workDays,
            }) => (
              <FriendsCardsItem key={_id}>
                <a href={url} target="blank">
                  <FriendsName>{title}</FriendsName>
                </a>
                <CardWrapper>
                  <CardLeftWrapper>
                    <CardImg
                      src={imageUrl ? imageUrl : defaultImage}
                      alt={`${title} img`}
                    />
                  </CardLeftWrapper>
                  <CardsList>
                    <CardsItem>
                      {workDays !== null && workDays.length ? (
                        <CardsWithoutSchedule>
                          Time: <br />
                          {getWorkTime(workDays)}
                        </CardsWithoutSchedule>
                      ) : (
                        <span>
                          Time:
                          <br /> -------------
                        </span>
                      )}
                      {workDays !== null && workDays.length !== 0 && (
                        <CardMenu>
                          {days.map((day, _id) => (
                            <CardMenuItem key={_id}>
                              <p>{day}</p>
                              <p>{getWorkTime(workDays)}</p>
                            </CardMenuItem>
                          ))}
                        </CardMenu>
                      )}
                    </CardsItem>
                    <CardsItem>
                      Address: <br />
                      {address ? (
                        <CardAddress href={addressUrl} target="blank">
                          <span>{address}</span>
                        </CardAddress>
                      ) : (
                        <span>----------</span>
                      )}
                    </CardsItem>
                    <CardsItem>
                      Email: <br />
                      {email ? (
                        <CardLink href={`mailto:${email}`}>{email}</CardLink>
                      ) : (
                        <span>----------</span>
                      )}
                    </CardsItem>
                    <CardsItem>
                      Phone:
                      <br />
                      {phone ? (
                        <CardLink href={`tel:${phone}`}>{phone}</CardLink>
                      ) : (
                        <span>----------</span>
                      )}
                    </CardsItem>
                  </CardsList>
                </CardWrapper>
              </FriendsCardsItem>
            )
          )}
        </FriendsCardsWrap>
      </StyledContainer>
      {isShowButtonTop && (
        <ScrollUpButton onClick={scrollTopPage} aria-label="To top page">
          <SlArrowUp />
        </ScrollUpButton>
      )}
    </FriendsWrap>
  );
};
export default OurFriends;
