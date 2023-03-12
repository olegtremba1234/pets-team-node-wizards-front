import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import Spinner from './Spinner/Spinner';

const Home = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/UserPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="user"
            element={<PrivateRoute component={UserPage} redirectTo="/login" />}
          />
          <Route
            path="register"
            element={
              <PublicRoute
                component={RegisterPage}
                restricted
                redirectTo="/user"
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                component={LoginPage}
                restricted
                redirectTo="/user"
              />
            }
          />
          <Route path="news" element={<PublicRoute component={NewsPage} />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route path=":categoryName" />
          </Route>
          <Route
            path="friends"
            element={<PublicRoute component={OurFriendsPage} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
