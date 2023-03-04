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
} from './OurFriends.styled';
import { useState, useEffect } from 'react';
import { fetchOurFriends } from 'services/apiService';
import defaultImage from '../OurFriends/image/default.svg';


const OurFriends = ({ data }) => {
  const [friends, setFriends] = useState([]);

  let days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  useEffect(() => {
    fetchOurFriends().then(setFriends);
  }, []);

  const getWorkTime = arr => {
    if (!arr || arr.length === 0) {
      return;
    }
    const filtered = arr.find(item => item.isOpen === true);
    return `${filtered.from}-${filtered.to}`;
  };

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
                      Time: <br />
                      {workDays ? (
                        <p> {getWorkTime(workDays)}</p>
                      ) : (
                        <span>-------------</span>
                      )}
                      {workDays && (
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
                        <CardAddress href={addressUrl}>
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
    </FriendsWrap>
  );
};
export default OurFriends;
