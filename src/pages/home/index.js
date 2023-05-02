import { useQuery } from 'react-query';
import Thumbnails from '../../components/thumbnails';

const MainPage = () => {
  const { data: videos } = useQuery(
    ['relatedVideos'],
    async () => {
      console.log('fetching...');
      return await fetch(`data/dummy/popularvideo.json`)
        .then((res) => res.json())
        .then((res) => res.items);
    },
    { staleTime: 1000 * 60 * 50 }
  );
  console.log(videos);
  return (
    <>
      <div id="contents" className="flex flex-wrap">
        {videos.map((data) => {
          return <Thumbnails key={data.id.videoId} props={data} />;
        })}
      </div>
    </>
  );
};

export default MainPage;
