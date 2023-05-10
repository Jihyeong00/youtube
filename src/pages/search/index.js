import { useParams } from 'react-router-dom';
import SearchVideoList from './components/videoList/SearchVideoList.jsx';
import { v4 as uuid } from 'uuid';
import { useVideoSearch } from '../../hook/queries/get-video-data.jsx';
import { LoadInfiniteSearchVideos } from '../../hook/queries/get-infinite-videoList-info.jsx';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SearchPage = () => {
  const params = useParams();
  const keyword = params.searchString;
  const { searchVideos, isLoading } = useVideoSearch(keyword);

  const res = LoadInfiniteSearchVideos(keyword);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) {
      return;
    }
    res.fetchNextPage();
  }, [inView]);

  if (res.isLoading) {
    return <div>Loading...</div>;
  }
  if (res.isError) {
    return <div>Error...</div>;
  }
  if (res.data) {
    let list = [...res.data.pages.map((res) => res.data.items)].flat(1);

    return (
      <>
        <div>{keyword}검색 결과 페이지입니다.</div>
        <div>{!list && list.map((video) => <SearchVideoList key={uuid()} props={video} />)}</div>
        <div ref={ref}></div>
      </>
    );
  }
};
export default SearchPage;
