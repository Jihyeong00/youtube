import { useParams } from 'react-router-dom';
import { useVideoComments } from '../../../hook/queries/get-video-data';
import { v4 } from 'uuid';
import { formatAgo } from '../../../util/date';

const Comment = () => {
  const params = useParams();
  const videoId = params.videoId;
  const { videoComments, isSuccess } = useVideoComments(videoId);
  {
    return isSuccess && videoComments.data === undefined ? (
      <div>채널은 접근을 허용하지 않습니다.</div>
    ) : (
      <ul>
        {isSuccess &&
          videoComments.data.items.map((commnets) => {
            const {
              authorDisplayName: name,
              textOriginal: comments,
              publishedAt: commentDate,
            } = commnets.snippet.topLevelComment.snippet;
            return (
              <li key={v4()} className="w-full">
                <div className="mt-4 mb-4 w-full text-xs flex">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img src="/Assets/img/profile.jpg" alt="사용자" />
                  </div>
                  <div className="w-full overflow-hidden text-ellipsis text-hi relative">
                    <div className="text-sm font-bold">{name}</div>
                    <div>{comments}</div>
                    <div className="pt-1">{formatAgo(commentDate, 'ko')}</div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    );
  }
};

export default Comment;
