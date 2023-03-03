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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>

  );
};
