import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
};

export default Layout;