import { QUERY_KEY } from "../../consts/queryKey";
import YoutubeAPI from "../../Apis/youtubeApi";
import { useInfiniteQuery } from "react-query";

export const useInfinitePopularVideos = (nextPageToken ) =>{
        const res = useInfiniteQuery(
            [QUERY_KEY.GET_POPULAR_VIDEO_LIST],
            () => YoutubeAPI.getPopularVideos(nextPageToken ),
            );
            return res
};