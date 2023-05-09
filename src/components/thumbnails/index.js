import { Link } from 'react-router-dom';
import { formatAgo } from '../../util/date.js';

const Thumbnail = ({ props }) => {
  const data = props;
  let countView = props.statistics.viewCount;
  // 조회수 계산
  if (countView > 10000) {
    countView = Math.floor(countView / 10000) + '만회';
  }

  return (
    <div className="">
      <Link to={`/watch/${props.id}`}>
        <img
          className="rounded-md mt-6 md"
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
            <span className="text-xs text-gray-400">{data.snippet.channelTitle}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400">
              조회수 {countView} • {formatAgo(data.snippet.publishedAt, 'ko')}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
