import axios from "axios";

// Creates a base instance for all axios based request
const instance = axios.create({
  baseURL: `https://api.giphy.com/v1/`
});

instance.interceptors.request.use((config) => {
  //add api key to query params
  config.params["api_key"] = process.env.REACT_APP_API_KEY;

  return config;
});

export default instance;
