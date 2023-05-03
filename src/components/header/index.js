import MainLogo from './mainlogo';
import UserProfile from './userprofile';

const { default: SearchBar } = require('./searchbar');
const Header = () => {
  return (
    <>
      <div className="absolute top-0 h-16 w-full z-50 bg-white">
        <div className="flex justify-between max-w-7xl p-2 m-auto border-b-4 border-gray-100">
          <MainLogo props={{ width: '97px', height: '20px' }} />
          <SearchBar />
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Header;
