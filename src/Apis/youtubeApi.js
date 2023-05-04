import { Axios } from './core';

const SEARCH_PATH = '/search';
const CHANNELS_PATH = '/channels';
const VIDEOS_PATH = '/videos';
const COMMENT_PATH = '/commentThreads';
const MAX_RESULT = 25;
const video = 'video';
const mostPopular = 'mostPopular';

const YoutubeAPI = {
  getVideoSearch(keyword) {
    return Axios.get(SEARCH_PATH, {
      params: {
        maxResults: MAX_RESULT,
        keyword: keyword,
      },
    });
  },

  getVideoById(videoId) {
    return Axios.get(SEARCH_PATH, {
      params: {
        type: video,
        maxResults: MAX_RESULT,
        relatedToVideoId: videoId,
      },
    });
  },

  getVideoComments(videoId) {
    return Axios.get(COMMENT_PATH, {
      params: {
        videoId: videoId,
      },
    });
  },
  getPopularVideos() {
    console.log('fetch...');
    return Axios.get(VIDEOS_PATH, {
      params: {
        chart: mostPopular,
        maxResults: MAX_RESULT,
      },
    });
  },
  getChannelInfo(channelId) {
    return Axios.get(CHANNELS_PATH, {
      params: {
        id: channelId,
      },
    });
  },
};

export default YoutubeAPI;
