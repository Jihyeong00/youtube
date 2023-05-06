import axios from 'axios';
const BACK_END_URL = 'https://youtube.googleapis.com/youtube/v3';
const KEY = 'AIzaSyCCWuWYD0Pj5TSw5RCrROI2bHYm6jA9x6c';
export const Axios = axios.create({
  baseURL: BACK_END_URL,
  params: {
    key: KEY,
  },
});
