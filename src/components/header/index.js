import MainLogo from './mainlogo';
import UserProfile from './userprofile';

const { default: SearchBar } = require('./searchbar');
const Header = () => {
  return (
    <>
      <div className="fixed top-0 h-14 w-full z-50 bg-white">
        <div className="flex justify-between p-2 ">
          <MainLogo props={{ width: '97px', height: '20px' }} />
          <SearchBar />
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Header;
