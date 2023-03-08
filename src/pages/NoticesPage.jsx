import Categories from '../components/NoticesPage/Categories/Categories';
import SearchForm from 'components/SearchForm/SearchForm';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import axios from 'axios';

export default function NoticesPage() {
  const token = useSelector(selectToken);
  const [notices, setNotices] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchAllNotices = async () => {
      const response = await axios.get('/notices');
      setNotices(response.data);
    };

    const fetchFavoriteNotices = async token => {
      const response = await axios.get('/notices/my-favorites', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(response.data);
    };

    const fetchUserNotices = async token => {
      const response = await axios.get('/notices/my-notices', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(response.data);
    };

    const fetchNoticesByCategory = async query => {
      const response = await axios.get(`/notices/by-category/${query}`);
      setNotices(response.data);
    };

    if (!categoryName) {
      fetchAllNotices();

      return;
    }

    if (categoryName === 'favorite-ads') {
      fetchFavoriteNotices(token);

      return;
    }
    if (categoryName === 'my-ads') {
      fetchUserNotices(token);

      return;
    }
    fetchNoticesByCategory(categoryName);
  }, [categoryName, token]);

  return (
    <>
      <SearchForm />
      <Categories />
      <NoticesCategoriesList notices={notices} />
    </>
  );
}
