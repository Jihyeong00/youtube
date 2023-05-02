import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="relative mt-14 z-10">
        <div className="w-5/6 m-auto flex items-center justify-between">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
