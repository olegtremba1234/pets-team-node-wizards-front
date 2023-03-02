import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';
// import UserPage from 'pages/UserPage';
// import LoginPage from 'pages/LoginPage';
// import NewsPage from 'pages/NewsPage';
// import NoticesPage from 'pages/NoticesPage';
// import OurFriendsPage from 'pages/OurFriendsPage';
// import Home from 'pages/Home';

const Home = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/UserPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<UserPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
