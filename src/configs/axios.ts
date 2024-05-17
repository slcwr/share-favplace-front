import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import axios from "axios";


let instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// 本番環境以外はリクエストとレスポンス時にデバッグ用ログを出力する
if (process.env.REACT_APP_ENV !== 'production') {
  instance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (error: string) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
}

export default instance;