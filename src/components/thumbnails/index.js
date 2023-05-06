import { Link } from 'react-router-dom';

const Thumbnail = ({ props }) => {
  const data = props;
  let countView = props.statistics.viewCount;
  // 조회수 계산
  if (countView > 10000) {
    countView = Math.floor(countView / 10000) + '만회';
  }
  // 날짜 계산
  const publishedAt = new Date(props.snippet.publishedAt);
  const thisTime = new Date();
  let printDate = '';

  if (publishedAt.getFullYear() !== thisTime.getFullYear()) {
    printDate = thisTime.getFullYear() - publishedAt.getFullYear() + '년 전';
  } else if (publishedAt.getMonth() !== thisTime.getMonth()) {
    printDate = thisTime.getMonth() - publishedAt.getMonth() + '달 전';
  } else if (publishedAt.getDay() !== thisTime.getDay()) {
    printDate = thisTime.getDate() - publishedAt.getDate() + '일 전';
  } else if (publishedAt.getHours() !== thisTime.getHours()) {
    printDate = thisTime.getHours() - publishedAt.getHours() + '시간 전';
  } else if (publishedAt.getMinutes() !== thisTime.getMinutes()) {
    printDate = thisTime.getMinutes() - publishedAt.getMinutes() + '분 전';
  } else {
    printDate = thisTime.getSeconds() - publishedAt.getSeconds() + '초 전';
  }

  return (
    <div className="w-1//4">
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
              조회수 {countView} • {printDate}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
