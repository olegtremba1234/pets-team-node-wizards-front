import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLoyaut() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
