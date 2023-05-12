import { QUERY_KEY } from "../../consts/queryKey";
import YoutubeAPI from "../../Apis/youtubeApi";
import { useInfiniteQuery } from "react-query";

export const LoadInfinitePopularVideos = () =>{
    const res = useInfiniteQuery(
        [QUERY_KEY.GET_POPULAR_VIDEO_LIST],
        ({pageParam = ''}) => YoutubeAPI.getPopularVideos(pageParam),
        {
            // 반환값 확인할 것
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
        ({pageParam = ''}) => YoutubeAPI.getVideoSearch(keyword, pageParam),{
            getNextPageParam: (lastPage) => {
                console.log(lastPage.data.nextPageToken)
                return lastPage.data.nextPageToken
            }
        }
    );
    return res
};