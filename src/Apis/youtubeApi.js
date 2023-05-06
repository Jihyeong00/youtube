import { Axios } from './core';

const SEARCH_PATH = '/search';
const CHANNELS_PATH = '/channels';
const VIDEOS_PATH = '/videos';
const COMMENT_PATH = '/commentThreads';
const MAX_RESULT = 25;
const video = 'video';
const mostPopular = 'mostPopular';
const snippet = 'snippet';
const getGreatNumber = 'snippet,contentDetails,statistics';
const YoutubeAPI = {
  getVideoSearch(keyword) {
    return Axios.get(SEARCH_PATH, {
      params: {
        part: snippet,
        maxResults: MAX_RESULT,
        q: keyword,
      },
    });
  },

  getVideoById(videoId) {
    return Axios.get(SEARCH_PATH, {
      params: {
        part: snippet,
        type: video,
        maxResults: MAX_RESULT,
        relatedToVideoId: videoId,
      },
    });
  },

  getVideoComments(videoId) {
    return Axios.get(COMMENT_PATH, {
      params: {
        part: snippet,
        videoId: videoId,
      },
    });
  },

  getPopularVideos() {
    console.log('fetch...');
    return Axios.get(VIDEOS_PATH, {
      params: {
        part: getGreatNumber,
        chart: mostPopular,
        maxResults: MAX_RESULT,
      },
    });
  },
  getChannelInfo(channelId) {
    return Axios.get(CHANNELS_PATH, {
      params: {
        part: snippet,
        id: channelId,
      },
    });
  },
};

export default YoutubeAPI;
