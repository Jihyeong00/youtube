import { usePopularVideos } from '../../hook/queries/get-video-data';
import Thumbnail from '../../components/thumbnails/index';
import { v4 } from 'uuid';

const MainPage = () => {
  const { mainList, isLoading } = usePopularVideos();

  return (
    <>
      <div
        id="contents"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-2"
      >
        {!isLoading && console.log(mainList)}
        {!isLoading && mainList.data.items.map((data) => <Thumbnail key={v4()} props={data} />)}
      </div>
    </>
  );
};

export default MainPage;
