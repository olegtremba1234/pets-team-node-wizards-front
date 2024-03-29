import Categories from '../components/NoticesPage/Categories/Categories';
import NoticesCategoriesList from 'components/NoticesPage/NoticesCategoriesList/NoticesCategoriesList';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  fetchUserNotices,
  fetchAllNotices,
  fetchNoticesByQuery,
  fetchNoticesByCategoryAndQuery,
} from 'redux/notices/noticeOperation';
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
// import Spinner from 'components/Spinner/Spinner';
import {
  // selectIsLoading,
  selectfetchedNotices,
} from 'redux/notices/noticeSelector';
import { toast } from 'react-toastify';

const PAGE_SCROLL_DOWN = 100;

export default function NoticesPage() {
  const fetchedNotices = useSelector(selectfetchedNotices);
  const dispatch = useDispatch();
  // const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const addedNotice = useSelector(state => state.notices.notices);
  // const loadingAddedNotice = useSelector(selectIsLoading);
  const token = useSelector(selectToken);
  // const [notices, setNotices] = useState([]);
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { categoryName } = useParams();
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  let x = Math.random() * 100;
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
    setSearchQuery(result + x);
    setQuery(result);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Interaction_With_API = async () => {
    try {
      if (searchQuery.length && categoryName === 'all') {
        dispatch(fetchNoticesByQuery(query));
        setQuery('');
        return;
      }

      if (categoryName && searchQuery.length) {
        setQuery(searchQuery);
        dispatch(
          fetchNoticesByCategoryAndQuery({ query, categoryName, token })
        );
        setQuery('');
        return;
      }
      if (categoryName === 'all') {
        setQuery('');
        dispatch(fetchAllNotices());
        return;
      }

      if (categoryName === 'favorite-ads') {
        setQuery('');
        dispatch(fetchFavoriteNotices(token));
        return;
      }
      if (categoryName === 'my-ads') {
        setQuery('');
        dispatch(fetchUserNotices(token));
        return;
      }

      if (categoryName) {
        setQuery('');
        dispatch(fetchNoticesByCategory(categoryName));
        return;
      }
      if (!categoryName) {
        navigate('sell');
      }
    } catch (error) {
      return toast.error('От халепа! Спробуйте ще раз');
    }
  };

  useEffect(() => {
    Interaction_With_API();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, token, searchQuery, addedNotice]);
  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

  return (
    <>
      {/* {loadingAddedNotice ? (
        <Spinner />
      ) : ( */}
      <StyledNoticesPageContainer>
        <StyledTitle>Find your favorite pet</StyledTitle>
        <SearchNotices onSubmit={onHandleSubmit} />
        <AddButtonAndCategoriesWrapper>
          <Categories />
          <AddNoticeButton />
        </AddButtonAndCategoriesWrapper>
        <NoticesCategoriesList
          notices={
            categoryName === 'favorite-ads' ? favoriteNotices : fetchedNotices
          }
          // callback={handleDelete}
        />
        {isShowButtonTop && (
          <ScrollUpButton onClick={scrollTopPage} aria-label="To top page">
            <SlArrowUp />
          </ScrollUpButton>
        )}
      </StyledNoticesPageContainer>
    </>
  );
}
