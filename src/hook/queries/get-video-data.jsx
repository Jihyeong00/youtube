import { useQuery } from 'react-query';
import YoutubeAPI from '../../Apis/youtubeApi';
import { queryConfig } from './@config';
import { QUERY_KEY } from '../../Const/queryKey';

export const useVideoSearch = (keyword) => {
  const { data: searchVideos, isLoading } = useQuery([QUERY_KEY.SEARCH_VIDEO, keyword], () =>
    YoutubeAPI.getVideoSearch(keyword)
  );
  return { searchVideos, isLoading };
};

export const useVideoById = (videoId) => {
  const { data: detailVideo, isLoading } = useQuery(
    [QUERY_KEY.GET_VIDEO_INFO, videoId],
    () => YoutubeAPI.getVideoById(videoId),
    queryConfig
  );
  return { detailVideo, isLoading };
};

export const useChannelInfo = (channelId) => {
  const { data: channelInfo, isLoading } = useQuery(
    [QUERY_KEY.CHANNEL_INFO],
    () => YoutubeAPI.getChannelInfo(channelId),
    queryConfig
  );
  return { channelInfo, isLoading };
};

export const useVideoComments = (videoId) => {
  const {
    data: videoComments,
    isLoading,
    isSuccess,
  } = useQuery(
    [QUERY_KEY.GET_COMMENT_INFO, videoId],
    () => YoutubeAPI.getVideoComments(videoId),
    queryConfig
  );
  return { videoComments, isLoading, isSuccess };
};
