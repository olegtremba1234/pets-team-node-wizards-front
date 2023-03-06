import React from 'react';
import { fetchNews, fetchSearchNews } from 'services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';import SearchForm from '../SearchForm/SearchForm';
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
  const [searchingNewsData, setSearchingNewsData] = useState(null);


  const handleClick = e => {
      if (e.target.value.trim()) {
        return;
      }
    };


  const handleSearchSubmit = async e => {
    e.preventDefault();
    const { search } = e.target.elements;
    console.log(search.value)

    if (search.value.trim() === '') {
      return;
    }

    try {
      const { data: searchData } =  await fetchSearchNews(search.value);
      setSearchingNewsData(searchData);
    } catch (error) {
      return toast.error('Вибачте, новин не знайдено.');
    }
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
        <SearchForm onSubmit={handleSearchSubmit} onChange={handleClick}  />
        {searchingNewsData ? (
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
