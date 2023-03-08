import Categories from '../components/NoticesPage/Categories/Categories';
import SearchForm from 'components/SearchForm/SearchForm';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import axios from 'axios';
import { ScrollUpButton, scrollTopPage } from 'components/ScrollUpButton';
import { SlArrowUp } from "react-icons/sl";

const PAGE_SCROLL_DOWN = 100;

export default function NoticesPage() {
  const token = useSelector(selectToken);
  const [notices, setNotices] = useState([]);
  const { categoryName } = useParams();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

  return (
    <>
      <SearchForm />
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
