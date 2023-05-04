import { Axios } from 'axios';

const BACK_END_URL = 'https://youtube.googleapis.com/youtube/v3';
const SEARCH_PATH = '/search';
const CHANNELS_PATH = '/channels';
const VIDEOS_PATH = '/videos';
const COMMENT_PATH = '/commentThreads';
const MAX_RESULT = 25;
const snippet = 'snippet';
const video = 'video';
const mostPopular = 'mostPopular';
const KEY = '';

const YoutubeAPI = {
  getVideoSearch(keyword) {
    return Axios.get(BACK_END_URL + SEARCH_PATH, {
      params: {
        part: snippet,
        maxResults: MAX_RESULT,
        keyword: keyword,
        key: KEY,
      },
    });
  },

  getVideoById(videoId) {
    return Axios.get(BACK_END_URL + SEARCH_PATH, {
      params: {
        part: snippet,
        type: video,
        maxResults: MAX_RESULT,
        relatedToVideoId: videoId,
        key: KEY,
      },
    });
  },

  getVideoComments(videoId) {
    return Axios.get(BACK_END_URL + COMMENT_PATH, {
      params: {
        part: snippet,
        videoId: videoId,
        key: KEY,
      },
    });
  },
  getPopularVideos() {
    return Axios.get(BACK_END_URL + VIDEOS_PATH, {
      params: {
        part: snippet,
        chart: mostPopular,
        maxResults: MAX_RESULT,
        key: KEY,
      },
    });
  },
  getChannelInfo(channelId) {
    return Axios.get(BACK_END_URL + CHANNELS_PATH, {
      params: {
        part: snippet,
        id: channelId,
        key: KEY,
      },
    });
  },
};

export default YoutubeAPI;
