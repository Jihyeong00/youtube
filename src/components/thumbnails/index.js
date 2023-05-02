import { Link } from 'react-router-dom';

const Thumbnails = ({ props }) => {
  return (
    <div className="w-1//4">
      <Link>
        <img
          className="rounded-2xl"
          src={props.snippet.thumbnails.medium.url}
          alt={props.id.videoId}
        />
        <div className="w-full">
          <div className="overflow-hidden text-clip whitespace-nowrap">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {props.snippet.title}
            </span>
          </div>
          <div className="overflow-clip">
            <span>{props.snippet.channelTitle}</span>
          </div>
          <div>
            <span>조회수</span>
          </div>
          <div>
            <span>{props.snippet.publishedAt}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnails;
