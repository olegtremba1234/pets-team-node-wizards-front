import React from 'react';
import { fetchNews, fetchSearchNews } from 'services/apiService';
import SearchForm from '../SearchForm/SearchForm';

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
  const [searchNews, setSearchNews] = useState(null);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  const handleSearchSubmit = async e => {
    e.preventDefault();
    const { search } = e.target.elements;
    if (search.value.trim() === '') {
      setSearchNews(null);
      return;
    }

    try {
      const { data: searchData } = await fetchSearchNews(search.value);
      setSearchNews(searchData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickInput = e => {
    if (e.target.value.trim()) {
      return;
    }
    setSearchNews(null);
  };

  const shortenText = (text, max) => {
    return text && text.length > max
      ? `${text.slice(0, max).split(' ').slice(0, -1).join(' ')}...`
      : text;
  };

  return (
    <NewsWrap>
      <StyledContainer>
        <Title>News</Title>
        <SearchForm onSubmit={handleSearchSubmit} onChange={handleClickInput} />
        {searchNews ? (
          <NewsList>
            {news.map(({ _id, title, description, date, url }) => {
              return (
                <NewsItem key={_id}>
                  <NewsTitle>{shortenText(title, 50)}</NewsTitle>
                  <Description>{shortenText(description, 225)}</Description>
                  <Wrapper>
                    <Date>{date}</Date>
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
                    <Date>{date}</Date>
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
