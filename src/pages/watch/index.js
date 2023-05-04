import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const WatchPage = () => {
  const params = useParams();
  const videoId = params.videoId;
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/data/dummy/relatedvideo.json')
      .then((res) => setVideos(res.data.items))
      .catch((err) => console.error(err));
  }, []);

  console.log(videoId);

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
                <div
                  onClick={() => {
                    navigate(`/watch/${video.id.videoId}`);
                    window.scrollTo(0, 0);
                  }}
                  className="mb-2 flex cursor-pointer"
                >
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WatchPage;
