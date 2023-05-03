import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import SearchVideoList from './videoList';
import { v4 as uuid } from 'uuid';

const SearchPage = () => {
  const params = useParams();
  const keyword = params.searchString;
  const { data: videos } = useQuery(
    ['relatedVideos'],
    async () => {
      console.log('fetching...');
      return await fetch(`data/dummy/keyword.json.json`)
        .then((res) => res.json())
        .then((res) => res.items);
    },
    { staleTime: 1000 * 60 * 50 }
  );
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
