import axios from "axios";

const api = axios.create({
  baseURL: "https://allsportsapi.com/api/football/?met=Teams&APIkey=e61f2853d572d1915d8f02bffae0e6e5f07a1530ab5213c890604f752051f6e5&teamId=2616",
});

export default api;