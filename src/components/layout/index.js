import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const Layout = () => {
  return (
    <div className="font-sans">
      <Header />
      <div className="relative mt-16 pt-2 z-10">
        <div className="max-w-7xl m-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
