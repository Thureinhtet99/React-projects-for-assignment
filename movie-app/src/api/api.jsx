import axios from "axios";

export const apiKey = "811d3b2782864e5b759edd0570ee6b2e";

export const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
