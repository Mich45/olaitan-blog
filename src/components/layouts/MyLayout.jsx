import { Outlet, useLocation } from 'react-router-dom';
import Header from '../ui/header/Header';
import Footer from '../ui/footer/Footer';
import ContextApi from '../contextApi/ContextApi';
import Access from '../access/Access';

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <ContextApi>
        <Header />
        <Outlet />
        <div
          className={`${
            location.pathname === '/academy' ? 'mt-0' : 'mt-[100px]'
          }`}
        >
          {location.pathname === '/academy' || location.pathname === '/' ? (
            <Access />
          ) : null}
        </div>
        <Footer />
      </ContextApi>
    </>
  );
}
