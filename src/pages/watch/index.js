import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const WatchPage = () => {
  const params = useParams();
  const videoId = params.videoId;
  console.log(videoId);
  return (
    <>
      <div>
        <iframe
          title={videoId}
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${videoId}/`}
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default WatchPage;
