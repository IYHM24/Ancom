import axios from "axios";

const API_URL_YOUTUBE = import.meta.env.VITE_API_URL_YOUTUBE;

export const axionsInstanceYoutube = axios.create({
    baseURL: API_URL_YOUTUBE,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 300000,
});
  