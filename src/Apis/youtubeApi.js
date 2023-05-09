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
  async getVideoSearch(keyword) {
    return Axios.get(SEARCH_PATH, {
      params: {
        part: snippet,
        maxResults: MAX_RESULT,
        q: keyword,
      },
    }).then((res) => res.data.items);
  },

  async getVideoById(videoId) {
    return Axios.get(SEARCH_PATH, {
      params: {
        part: snippet,
        type: video,
        maxResults: MAX_RESULT,
        relatedToVideoId: videoId,
      },
    });
  },

  async getVideoComments(videoId) {
    return Axios.get(COMMENT_PATH, {
      params: {
        part: snippet,
        videoId: videoId,
      },
    });
  },

  async getPopularVideos(nextPageToken) {
    console.log('fetch...');
    return Axios.get(VIDEOS_PATH, {
      params: {
        part: getGreatNumber,
        chart: mostPopular,
        maxResults: MAX_RESULT,
        nextPageToken: nextPageToken,
      },
    }).then((res) => res);
  },

  async getChannelInfo(channelId) {
    return Axios.get(CHANNELS_PATH, {
      params: {
        part: snippet,
        id: channelId,
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
