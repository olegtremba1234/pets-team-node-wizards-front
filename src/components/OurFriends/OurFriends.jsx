import {CardLink, CardAddress, CardMenu, CardMenuItem, CardImg, CardWrapper, CardLeftWrapper, CardsList, CardsItem, FriendsCardsItem, FriendsCardsWrap, FriendsName, FriendsTitle, FriendsWrap, StyledContainer } from "./OurFriends.styled";
import { useState, useEffect } from 'react';
import { fetchOurFriends } from "services/apiService";
import defaultImage from '../OurFriends/image/default.jpg';
const OurFriends = () => {

  const [friends, setFriends] = useState([]);


  useEffect(() => {
    fetchOurFriends().then(setFriends);
  }, []);


  const getWorkDays =  (arr) => {
    const filtered = arr.find(item => item.isOpen === true);
    console.log(filtered)
    console.log(`${filtered.from} ${filtered.to}`)
    return `${filtered.from} ${filtered.to}`;
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
                      {/* Time: <br />
                      {workDays ? (
                        <p> {getWorkDays(workDays)}</p>
                      ) : (
                        <span>-------------</span>
                      )} */}
                      {/* {workDays && (
                        <CardMenu>
                          {workDays.map(({ day, from, to, id }) => (
                            <CardMenuItem
                              key={id.toString()}
                            >
                              <p>{day}</p>
                              <p>
                                {from}-{to}
                              </p>
                            </CardMenuItem>
                          ))}
                        </CardMenu>
                      )} */}
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
                        <CardLink href={`mailto:${email}`}>
                          {email}
                        </CardLink>
                      ) : (
                        <span>----------</span>
                      )}
                    </CardsItem>
                    <CardsItem>
                      Phone:
                      <br />
                      {phone ? (
                        <CardLink href={`tel:${phone}`}>
                          {phone}
                        </CardLink>
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

  )
}
export default OurFriends;
