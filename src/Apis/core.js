import axios from 'axios';
const BACK_END_URL = 'https://youtube.googleapis.com/youtube/v3';
const KEY = '';
const snippet = 'snippet';
export const Axios = axios.create({
    baseURL: BACK_END_URL,
    params: {
        part: snippet,
        key: KEY,
    },
});
