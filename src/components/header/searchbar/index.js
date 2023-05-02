import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [isset, setIsset] = useState(false);
  const [string, setString] = useState('');
  const navigate = useNavigate();
  const searchHandling = (e) => {
    e.preventDefault();

    if (string.trim().length !== 0) {
      navigate(`/${string}`);
    }
  };

  const textHandling = (e) => {
    setString(e.target.value);
    if (string.length !== 0) {
      setIsset(true);
    } else {
      setIsset(false);
    }
  };

  const textResetHandling = (e) => {
    e.preventDefault();
    setString('');
  };
  return (
    <form onSubmit={searchHandling} className="flex flex-01728 h-10">
      <label
        htmlFor="searchbar"
        className="border solid border-gray-400 border-r-0 w-full ml-8 pl-4 pr-4 flex items-center rounded-l-3xl max-w-2xl cursor-pointer relative"
      >
        <input
          onChange={textHandling}
          id="searchbar"
          type="text"
          placeholder="검색"
          className="font-sans text-xls outline-none w-full text-ellipsis"
          value={string}
        />
        {isset && (
          <button type="button" onClick={textResetHandling}>
            <TfiClose />
          </button>
        )}
      </label>
      <button
        type="submit"
        className="bg-slate-100 border solid border-gray-400 w-16 h-10 flex justify-center items-center rounded-r-3xl"
      >
        <AiOutlineSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
