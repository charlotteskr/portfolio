import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ScrollManager from './ScrollManager';
import BackToTop from './BackToTop';

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
}
