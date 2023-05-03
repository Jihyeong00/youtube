import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const WatchPage = () => {
  const params = useParams();
  const videoId = params.videoId;

  const { data: videos } = useQuery(
    ['relatedVideos'],
    async () => {
      console.log('fetching...');
      return await fetch(`data/dummy/relatedvideo.json`)
        .then((res) => res.json())
        .then((res) => res.items);
    },
    { staleTime: 1000 * 60 * 50 }
  );

  console.log(videos);

  return (
    <div className="flex">
      <div className="w-5/6">
        <iframe
          title={videoId}
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${videoId}`}
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-1/4 ml-3">
        <ul>
          {videos.map((video) => {
            return (
              <li>
                <Link to={`/watch/${video.id}`}>
                  <div className="mb-2 flex">
                    <img
                      src={video.snippet.thumbnails.default.url}
                      alt={video.snippet.title}
                      className="mr-2"
                    />
                    <div className="line-clamp-2 text-ellipsis ">
                      <div className="line-clamp-2 font-bold">{video.snippet.title}</div>
                      <div>{video.snippet.channelTitle}</div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WatchPage;
