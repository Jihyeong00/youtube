import Thumbnail from '../../../../components/thumbnails';
import { v4 as uuid } from 'uuid';
import { usePopularVideos } from '../../../../hook/queries/get-video-data';
const Thumbnails = () => {
    const videos = usePopularVideos();
    return (
        <>
            {videos.mainList.data.items.map((data) => {
                return <Thumbnail key={uuid()} props={data} />;
            })}
        </>
    );
};

export default Thumbnails;
