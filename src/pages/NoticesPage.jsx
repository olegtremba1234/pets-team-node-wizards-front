import Categories from '../components/NoticesPage/Categories/Categories';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  fetchUserNotices,
  fetchAllNotices,
  fetchNoticesByQuery,
  fetchNoticesByCategoryAndQuery,
} from 'services/apiService';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import SearchNotices from 'components/NoticesPage/NoticesSearch/SearchNotices';
import axios from 'axios';
import { ScrollUpButton, scrollTopPage } from 'components/ScrollUpButton';
import { SlArrowUp } from 'react-icons/sl';

const PAGE_SCROLL_DOWN = 100;

export default function NoticesPage() {
  const token = useSelector(selectToken);
  const [notices, setNotices] = useState([]);
  const [query, setQuery] = useState('');
  const { categoryName } = useParams();
  const [scrollTop, setScrollTop] = useState(0);
  const onHandleSubmit = result => {
    setQuery(result);
  };

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
    if (query && !categoryName) {
      const result = fetchNoticesByQuery(query);
      setNotices(result);
      setQuery('');
      return;
    }

    if (!categoryName) {
      const result = fetchAllNotices();
      setNotices(result);
      return;
    }
    if (categoryName && query) {
      const result = fetchNoticesByCategoryAndQuery(query, categoryName, token);
      setNotices(result);
      setQuery('');
      return;
    }

    if (categoryName === 'favorite-ads') {
      const result = fetchFavoriteNotices(token);
      setNotices(result);
      return;
    }
    if (categoryName === 'my-ads') {
      const result = fetchUserNotices(token);
      setNotices(result);
      return;
    }
    const result = fetchNoticesByCategory(categoryName);
    setNotices(result);
  }, [categoryName, token, query]);

  return (
    <>
      <SearchNotices onSubmit={onHandleSubmit} />
      <Categories />
      <NoticesCategoriesList notices={notices} />
    </>
  );
}
