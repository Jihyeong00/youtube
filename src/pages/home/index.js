import Thumbnail from '../../components/thumbnails/index';
import { v4 } from 'uuid';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { LoadInfinitePopularVideos } from '../../hook/queries/get-infinite-videoList-info';
const MainPage = () => {
  const res = LoadInfinitePopularVideos();
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
        <div
          id="contents"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-2"
        >
          {list && list.map((data) => <Thumbnail key={v4()} props={data} />)}
        </div>
        <div ref={ref}></div>
      </>
    );
  }
};

export default MainPage;
