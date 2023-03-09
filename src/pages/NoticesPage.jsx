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
import { ScrollUpButton, scrollTopPage } from 'components/ScrollUpButton';
import { SlArrowUp } from 'react-icons/sl';

const PAGE_SCROLL_DOWN = 100;

export default function NoticesPage() {
  const token = useSelector(selectToken);
  const [notices, setNotices] = useState([]);
  const [query, setQuery] = useState('');
  const { categoryName } = useParams();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onHandleSubmit = result => {
    setQuery(result);
  };

  useEffect(() => {
    const Interaction_With_API = async () => {
      if (query && !categoryName) {
        const result = await fetchNoticesByQuery(query);
        setNotices(result);
        setQuery('');
        return;
      }

      if (!categoryName) {
        const result = await fetchAllNotices();
        setNotices(result);
        return;
      }
      if (categoryName && query) {
        const result = await fetchNoticesByCategoryAndQuery(
          query,
          categoryName,
          token
        );
        setNotices(result);
        setQuery('');
        return;
      }

      if (categoryName === 'favorite-ads') {
        const result = await fetchFavoriteNotices(token);
        setNotices(result);
        return;
      }
      if (categoryName === 'my-ads') {
        const result = await fetchUserNotices(token);
        setNotices(result);
        return;
      }
      const result = await fetchNoticesByCategory(categoryName);
      setNotices(result);
    };
    Interaction_With_API();
  }, [categoryName, token, query]);
  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;
  return (
    <>
      <SearchNotices onSubmit={onHandleSubmit} />
      <Categories />
      <NoticesCategoriesList notices={notices} />
      {isShowButtonTop && (
        <ScrollUpButton onClick={scrollTopPage} aria-label="To top page">
          <SlArrowUp />
        </ScrollUpButton>
      )}
    </>
  );
}
