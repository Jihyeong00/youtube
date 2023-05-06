import { usePopularVideos } from '../../hook/queries/get-video-data';
import Thumbnail from '../../components/thumbnails/index';
import { v4 } from 'uuid';

const MainPage = () => {
  const { mainList, isLoading } = usePopularVideos();
  return (
    <>
      <div id="contents" className="flex flex-wrap justify-between">
        {!isLoading && mainList.data.items.map((data) => <Thumbnail key={v4()} props={data} />)}
      </div>
    </>
  );
};

export default MainPage;
