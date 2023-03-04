import React from 'react';
import { fetchNews } from 'services/apiService';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import moment from 'moment';

import { useState, useEffect } from 'react';
import {
  NewsWrap,
  StyledContainer,
  Title,
  NewsList,
  NewsItem,
  NewsTitle,
  Description,
  Date,
  Wrapper,
  LinkReadMore,
} from './News.styled';

const News = () => {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  console.log(query)

  const handleClick = e => {
    setInput(e.currentTarget.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value.trim() });

  };


  useEffect(() => {
    fetchNews().then(setNews);
  }, []);


  const shortenText = (text, max) => {
    return text && text.length > max
      ? `${text.slice(0, max).split(' ').slice(0, -1).join(' ')}...`
      : text;
  };

  return (
    <NewsWrap>
      <StyledContainer>
        <Title>News</Title>
        <SearchForm onSubmit={handleSearchSubmit} onChange={handleClick}  value={input} />
        {searchParams ? (
          <NewsList>
            {news.map(({ _id, title, description, date, url }) => {
              return (
                <NewsItem key={_id}>
                  <NewsTitle>{shortenText(title, 45)}</NewsTitle>
                  <Description>{shortenText(description, 225)}</Description>
                  <Wrapper>
                    <Date>{moment(date).format('DD/MM/YYYY')}</Date>
                    <LinkReadMore href={url} target="_blank" rel="noreferrer">
                      Read more
                    </LinkReadMore>
                  </Wrapper>
                </NewsItem>
              );
            })}
          </NewsList>
        ) : (
          <NewsList>
            {news.map(({ _id, title, description, date, url }) => {
              return (
                <NewsItem key={_id}>
                  <NewsTitle>{shortenText(title, 45)}</NewsTitle>
                  <Description>{shortenText(description, 215)}</Description>
                  <Wrapper>
                    <Date>{moment(date).format('DD/MM/YYYY')}</Date>
                    <LinkReadMore href={url} target="_blank" rel="noreferrer">
                      Read more
                    </LinkReadMore>
                  </Wrapper>
                </NewsItem>
              );
            })}
          </NewsList>
        )}
      </StyledContainer>
    </NewsWrap>
  );
};

export default News;
