import { Axios } from './core';

const SEARCH_PATH = '/search';
const CHANNELS_PATH = '/channels';
const VIDEOS_PATH = '/videos';
const COMMENT_PATH = '/commentThreads';
const MAX_RESULT = 25;
const VIDEO = 'video';
const mostPopular = 'mostPopular';
const SNIPPET = 'snippet';
const getGreatNumber = 'snippet,contentDetails,statistics';
const YoutubeAPI = {
  async getVideoSearch(keyword, nextPageToken) {
    return Axios.get(SEARCH_PATH, {
      params: {
        part: SNIPPET,
        maxResults: MAX_RESULT,
        q: keyword,
        pageToken: nextPageToken,
        type: 'video',
      },
    });
  },

  async getVideoById(videoId) {
    return Axios.get(SEARCH_PATH, {
      params: {
        part: SNIPPET,
        type: VIDEO,
        maxResults: MAX_RESULT,
        relatedToVideoId: videoId,
      },
    });
  },

  async getVideoComments(videoId) {
    return Axios.get(COMMENT_PATH, {
      params: {
        part: SNIPPET,
        videoId: videoId,
      },
    });
  },

  async getPopularVideos(nextPageToken) {
    return Axios.get(VIDEOS_PATH, {
      params: {
        part: getGreatNumber,
        chart: mostPopular,
        maxResults: MAX_RESULT,
        pageToken: nextPageToken,
      },
    });
  },

  async getChannelInfo(id) {
    return Axios.get(CHANNELS_PATH, {
      params: {
        part: SNIPPET,
        id,
      },
    });
  },

  async getInfinitePopularVideos() {
    return Axios.get(VIDEOS_PATH, {
      params: {
        part: getGreatNumber,
        chart: mostPopular,
        maxResults: MAX_RESULT,
      },
    });
  },
};

export default YoutubeAPI;
