import { useQuery } from 'react-query';
import Thumbnail from '../../../components/thumbnails';
import { v4 as uuid } from 'uuid';
const Thumbnails = () => {
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
  return (
    <>
      {videos.map((data) => {
        return <Thumbnail key={uuid()} props={data} />;
      })}
    </>
  );
};

export default Thumbnails;
