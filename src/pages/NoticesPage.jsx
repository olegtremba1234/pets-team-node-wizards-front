import Categories from '../components/NoticesPage/Categories/Categories';
import SearchForm from 'components/SearchForm/SearchForm';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchNoticesByCategory } from 'services/apiService';
export default function NoticesPage() {
  const [notices, setNotices] = useState([]);
  const { categoryName } = useParams();

  console.log(categoryName);
  useEffect(() => {
    fetchNoticesByCategory(categoryName);
  }, [categoryName]);

  return (
    <>
      <SearchForm />
      <Categories />
      <NoticesCategoriesList />
    </>
  );
}
