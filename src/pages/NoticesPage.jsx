import Categories from '../components/NoticesPage/Categories/Categories';
import SearchForm from 'components/SearchForm/SearchForm';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  fetchUserNotices,
  fetchAllNotices,
} from 'services/apiService';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export default function NoticesPage() {
  const token = useSelector(selectToken);
  const [notices, setNotices] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (!categoryName) {
      const result = fetchAllNotices();
      setNotices(result);
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
  }, [categoryName, token]);

  return (
    <>
      <SearchForm />
      <Categories />
      <NoticesCategoriesList notices={notices} />
    </>
  );
}
