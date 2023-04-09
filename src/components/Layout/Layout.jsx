import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import './layout.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
