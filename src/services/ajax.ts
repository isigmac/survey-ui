import axios from "axios";

import { getToken } from "../utilites/user-token";

import { message } from "antd";

const instance = axios.create({
  timeout: 10 * 1000,
});

// request interceptor: add token to request header
instance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// response 拦截： 统一处理 errno 和 msg

instance.interceptors.response.use((res) => {
  const responseData = (res.data || {}) as ResponseType;
  const { errno, data, msg } = responseData;

  if (errno != 0) {
    if (msg) {
      message.error(msg);
    }

    throw new Error(msg);
  }

  return data as any;
});

export default instance;

export type ResponseType = {
  errno: number;
  data?: ResponseDataType;
  msg?: string;
};

export type ResponseDataType = {
  [key: string]: any; //string type key, value could be any type
};
