import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { api } from "../..";

export const XsrfRequestInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");

  if (
    config.method &&
    ["post", "put", "delete"].includes(config.method) &&
    !Cookies.get("XSRF-TOKEN")
  ) {
    await api.get("/sanctum/csrf-cookie").then(() => {
      config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
    });
  }

  return config;
};
