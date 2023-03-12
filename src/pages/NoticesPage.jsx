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
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import SearchNotices from 'components/NoticesPage/NoticesSearch/SearchNotices';
import { ScrollUpButton, scrollTopPage } from 'components/ScrollUpButton';
import { SlArrowUp } from 'react-icons/sl';
import AddNoticeButton from 'components/NoticesPage/AddNoticeButton/AddNoticeButton';
import {
  AddButtonAndCategoriesWrapper,
  StyledNoticesPageContainer,
  StyledTitle,
} from 'components/NoticesPage/Categories/Categories.styled';
import Spinner from 'components/Spinner/Spinner';
import { selectIsLoading } from 'redux/notices/noticeSelector';

const PAGE_SCROLL_DOWN = 100;

export default function NoticesPage() {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const addedNotice = useSelector(state => state.notices.notices);
  const loadingAddedNotice = useSelector(selectIsLoading);
  const token = useSelector(selectToken);
  const [notices, setNotices] = useState([]);
  const [query, setQuery] = useState('');
  const { categoryName } = useParams();
  const [scrollTop, setScrollTop] = useState(0);
  const dispatch = useDispatch()

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Interaction_With_API = async () => {
    setIsSpinnerVisible(true);
    if (!categoryName && !query.length) {
      const result = await fetchAllNotices();
      setIsSpinnerVisible(false);
      setNotices(result.reverse());
      return;
    }
    if (query.length && !categoryName) {
      const result = await fetchNoticesByQuery(query);
      setIsSpinnerVisible(false);
      setNotices(result.reverse());
      return;
    }
    if (categoryName === 'favorite-ads') {
      const result = await fetchFavoriteNotices(token);
      setIsSpinnerVisible(false);
      setNotices(result.reverse());
      return;
    }
    if (categoryName === 'my-ads') {
      const result = await fetchUserNotices(token);
      setIsSpinnerVisible(false);
      setNotices(result.reverse());
      return;
    }

    if (!query.length && categoryName) {
      const result = await fetchNoticesByCategory(categoryName);
      setIsSpinnerVisible(false);
      setNotices(result.reverse());
      return;
    }
    if (query.length && categoryName === 'all') {
      dispatch(fetchNoticesByQuery(query));
      return;
    }

    if (categoryName && query.length) {
      const result = await fetchNoticesByCategoryAndQuery(
        query,
        categoryName,
        token
      );
      setIsSpinnerVisible(false);
      setNotices(result.reverse());
      return;
    }
  };

  useEffect(() => {
    Interaction_With_API();
    if (query.length) {
      setQuery('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, token, query, addedNotice]);
  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

  const handleDelete = id => {
    setNotices(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      {isSpinnerVisible || loadingAddedNotice ? (
        <Spinner />
      ) : (
        <StyledNoticesPageContainer>
          <StyledTitle>Find your favorite pet</StyledTitle>
          <SearchNotices onSubmit={onHandleSubmit} />
          <AddButtonAndCategoriesWrapper>
            <Categories />
            <AddNoticeButton />
          </AddButtonAndCategoriesWrapper>
          <NoticesCategoriesList notices={notices} callback={handleDelete} />
          {isShowButtonTop && (
            <ScrollUpButton onClick={scrollTopPage} aria-label="To top page">
              <SlArrowUp />
            </ScrollUpButton>
          )}
        </StyledNoticesPageContainer>
      )}
    </>
  );
}
