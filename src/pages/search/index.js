import { useParams } from 'react-router-dom';
import SearchVideoList from './components/videoList/SearchVideoList.jsx';
import { v4 as uuid } from 'uuid';
import { useVideoSearch } from '../../hook/queries/get-video-data.jsx';

const SearchPage = () => {
  const params = useParams();
  const keyword = params.searchString;
  const { searchVideos, isLoading } = useVideoSearch(keyword);
  return (
    <>
      <div>{keyword}검색 결과 페이지입니다.</div>
      <div>
        {!isLoading &&
          searchVideos.data.items.map((video) => <SearchVideoList key={uuid()} props={video} />)}
      </div>
    </>
  );
};

export default SearchPage;
