import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ScrollManager from './ScrollManager';

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
