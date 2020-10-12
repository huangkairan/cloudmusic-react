import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
instance.interceptors.request.use(
  (config) => {
    // console.log("请求被拦截");
    return config;
  },
  (err) => {}
);
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权");
          break;
        default:
          console.log("err");
      }
    }
    return err;
  }
);
export default instance;
