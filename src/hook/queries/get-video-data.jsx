import { useQuery } from "react-query"
import YoutubeAPI from "../../Apis/youtubeApi"
import { queryConfig } from "./@config"
import {QUERY_KEY} from '../../consts/queryKey'

export const useVideoSearch = (keyword) => {
    const {data : searchVideos, isLoading} = useQuery(
        [QUERY_KEY.SEARCH_VIDEO], () => YoutubeAPI.getVideoSearch(keyword),queryConfig,
    )
    return {searchVideos, isLoading};
}


export const useVideoById = (videoId) => {
    const {data : detailVideo, isLoading} = useQuery(
        [QUERY_KEY.GET_VIDEO_INFO], ()=> YoutubeAPI.getVideoById(videoId),queryConfig,
    )
    return {detailVideo, isLoading}
}



export const useChannelInfo = (channelId) => {
    const {data : channelInfo} = useQuery(
        [QUERY_KEY.CHANNEL_INFO], ()=> YoutubeAPI.getChannelInfo(channelId),queryConfig,
        )
        return {channelInfo}
    }
    
    export const useVideoComments = (videoId) => {
        const {data : videoComments, isLoading} = useQuery(
            [QUERY_KEY.GET_COMMENT_INFO], ()=> YoutubeAPI.getVideoComments(videoId),queryConfig,
        )
        return {videoComments, isLoading}
    }

export const usePopularVideos = () => {
    const {data : mainList, isError, isLoading, isLoadingError} = useQuery(
        [QUERY_KEY.GET_POPULAR_VIDEO_LIST], ()=> YoutubeAPI.getPopularVideos(),queryConfig,
    )
    return {mainList,isLoading}
}

