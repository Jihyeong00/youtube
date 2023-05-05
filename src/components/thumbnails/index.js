import { Link } from 'react-router-dom';

const Thumbnail = ({ props }) => {
  const data = props;
  return (
    <div className="w-1//4">
      <Link to={`/watch/${props.id}`}>
        <img
          className="rounded-2xl"
          src={data.snippet.thumbnails.medium.url}
          alt={data.snippet.title}
        />
        <div className="w-full ">
          <div className="overflow-hidden text-ellipsis text-hi whitespace-nowrap">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {data.snippet.title}
            </span>
          </div>
          <div className="overflow-hidden text-ellipsis text-hi whitespace-nowrap">
            <span>{data.snippet.channelTitle}</span>
          </div>
          <div>
            <span>조회수</span>
          </div>
          <div className="overflow-hidden text-ellipsis text-hi whitespace-nowrap">
            <span>{data.snippet.publishedAt}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
