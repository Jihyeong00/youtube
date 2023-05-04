import { useQuery } from "react-query"
import YoutubeAPI from "../../Apis/youtubeApi"
import { queryConfig } from "./@config"
import {QUERY_KEY} from '../../consts/queryKey'

export const useVideoSearch = (keyword) => {
    const {data : searchVideos} = useQuery(
        [QUERY_KEY.SEARCH_VIDEO], () => YoutubeAPI.getVideoSearch(keyword),queryConfig,
    )
    return {searchVideos};
}


export const useVideoById = (videoId) => {
    const {data : detailVideo} = useQuery(
        [QUERY_KEY.GET_VIDEO_INFO], ()=> YoutubeAPI.getVideoById(videoId),queryConfig,
    )
    return {detailVideo}
}



export const useChannelInfo = (channelId) => {
    const {data : channelInfo} = useQuery(
        [QUERY_KEY.CHANNEL_INFO], ()=> YoutubeAPI.getChannelInfo(channelId),queryConfig,
        )
        return {channelInfo}
    }
    
    export const useVideoComments = (videoId) => {
        const {data : videoComments} = useQuery(
            [QUERY_KEY.GET_COMMENT_INFO], ()=> YoutubeAPI.getVideoComments(videoId),queryConfig,
        )
        return {videoComments}
    }

export const usePopularVideos = () => {
    const {data : mainList} = useQuery(
        [QUERY_KEY.GET_POPULAR_VIDEO_LIST], ()=> YoutubeAPI.getPopularVideos(),queryConfig,
    )
    return {mainList}
}

