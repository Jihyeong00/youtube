import { QUERY_KEY } from "../../consts/queryKey";
import YoutubeAPI from "../../Apis/youtubeApi";
import { useInfiniteQuery } from "react-query";

export const LoadInfinitePopularVideos = () =>{
    const res = useInfiniteQuery(
        [QUERY_KEY.GET_POPULAR_VIDEO_LIST],
        ({pageParam = 0}) => YoutubeAPI.getPopularVideos(pageParam),
        {
            getNextPageParam: (lastPage) => {
					return lastPage.data.nextPageToken;
			},
        }
        );
        return res
};

export const LoadInfiniteSearchVideos = (keyword) => {
    const res = useInfiniteQuery(
        [QUERY_KEY.SEARCH_VIDEO, keyword],
        ({pageParam = 0}) => YoutubeAPI.getVideoSearch(keyword,pageParam),{
            getNextPageParam: (lastPage) => {
                return lastPage.data.nextPageToken
            }
        }
    );
    return res
};