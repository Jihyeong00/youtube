import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const params = useParams();
    const videoId = params.videoId;
    return <div>{videoId}의 상세페이지입니다.</div>;
};

export default WatchPage;
