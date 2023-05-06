import { useParams } from 'react-router-dom';
import Comment from './components/Commnents';
import { useVideoById } from '../../hook/queries/get-video-data';
import SideLinkVideo from './components/sideLink';

const WatchPage = () => {
    const params = useParams();

    const videoId = params.videoId;
    const { detailVideo, isLoading } = useVideoById(videoId);
    return (
        <>
            <div className="flex">
                <div className="w-5/6">
                    <iframe
                        title={videoId}
                        id="player"
                        type="text/html"
                        width="100%"
                        height="640"
                        src={`http://www.youtube.com/embed/${videoId}/?autoplay=1`}
                        frameborder="0"
                    ></iframe>
                    <Comment />
                </div>
                <div className="w-1/4 ml-3">
                    <ul>{!isLoading && detailVideo.data.items.map((data) => <SideLinkVideo props={data} />)}</ul>
                </div>
            </div>
        </>
    );
};

export default WatchPage;
