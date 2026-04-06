import { XsrfRequestInterceptor } from "./interceptors/request/XsrfRequestInterceptor";
import { ErrorInterceptorChain } from "@/utils/ErrorInterceptorChain";
import { ErrorDetailInterceptor } from "./interceptors/response/ErrorDetailInterceptor";
import axios from "axios";

export const api = axios.create({
  baseURL:
    typeof window === "undefined"
      ? process.env.INTERNAL_API_URL
      : process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: { Accept: "application/json" },
});

api.interceptors.request.use(XsrfRequestInterceptor);

api.interceptors.response.use(
  (response) => response,
  (error) => ErrorInterceptorChain(error)(ErrorDetailInterceptor),
);
