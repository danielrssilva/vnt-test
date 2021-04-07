import axios from "axios";

const api = axios.create({
  baseURL: "https://allsportsapi.com/api/football/",
});

export default api;