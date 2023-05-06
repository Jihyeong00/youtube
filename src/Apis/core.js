import axios from 'axios';
const BACK_END_URL = 'https://youtube.googleapis.com/youtube/v3';
const KEY = '';
export const Axios = axios.create({
  baseURL: BACK_END_URL,
  params: {
    key: KEY,
  },
});
