import React from 'react';
import {
  fetchAllNews,
  fetchNextNews,
  fetchSearchNews,
} from 'services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchForm from '../SearchForm/SearchForm';
import moment from 'moment';
import { ScrollUpButton, scrollTopPage } from 'components/ScrollUpButton';
import { SlArrowUp } from 'react-icons/sl';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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

const PAGE_SCROLL_DOWN = 100;

const News = () => {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState('');
  const [searchNews, setSearchNews] = useState(null);
  const [isHiden, setIsHiden] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    async function getNews() {
      try {
        if (page !== 1) {
          const { data } = await fetchNextNews(page);
          setNews(news => [...news, ...data]);
          if (data.length < 6) {
            setHasMore(false);
            toast.success('Це всі новини');
          }
        }
      } catch (error) {
        return toast.error('От халепа! Спробуйте ще раз');
      }
    }
    getNews();
  }, [page]);

  useEffect(() => {
    fetchAllNews().then(setNews);
  }, []);

  const nextPage = () => {
    setPage(page + 1);
  };

  const handleSearchSubmit = async e => {
    e.preventDefault();
    setIsHiden(true);
    const search = e.currentTarget.elements.search.value.trim();
    if (search === '') {
      setSearchNews(null);
      return;
    }

    try {
      const renderSearchedQuery = await fetchSearchNews(search);
      setSearchNews(renderSearchedQuery);
    } catch (error) {
      toast.error(
        'Sorry, there are no matches on your search,  please try another query.'
      );
    }
  };

  const handleClick = e => {
    setInput(e.currentTarget.value);
  };

  const handleCloseBtn = () => {
    setInput('');
    setSearchNews(null);
    setIsHiden(false);
  };

  const shortenText = (text, max) => {
    return text && text.length > max
      ? `${text.slice(0, max).split(' ').slice(0, -1).join(' ')}...`
      : text;
  };

  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

  return (
    <NewsWrap>
      <StyledContainer>
        <Title>News</Title>
        <SearchForm
          onSubmit={handleSearchSubmit}
          onChange={handleClick}
          value={input}
          onClose={handleCloseBtn}
          isHiden={isHiden}
        />
        {searchNews ? (
          <NewsList>
            {searchNews.map(({ _id, title, description, date, url }) => {
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
          <InfiniteScroll
            dataLength={news.length}
            next={nextPage}
            hasMore={hasMore}
            scrollThreshold={1}
          >
            <NewsList>
              {news.map(({ _id, title, description, date, url }) => (
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
              ))}
            </NewsList>
          </InfiniteScroll>
        )}
      </StyledContainer>
      {isShowButtonTop && (
        <ScrollUpButton onClick={scrollTopPage} aria-label="To top page">
          <SlArrowUp />
        </ScrollUpButton>
      )}
    </NewsWrap>
  );
};

export default News;
