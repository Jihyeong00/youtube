import { useParams } from 'react-router-dom';
import SearchVideoList from './components/videoList/SearchVideoList.jsx';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const params = useParams();
  const keyword = params.searchString;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('/data/dummy/keyword.json')
      .then((res) => setVideos(res.data.items))
      .catch((err) => console.error(err));
  }, []);
  console.log(videos);
  return (
    <>
      <div>{keyword}검색 결과 페이지입니다.</div>
      <div>
        {videos.map((video) => (
          <SearchVideoList key={uuid()} props={video} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
