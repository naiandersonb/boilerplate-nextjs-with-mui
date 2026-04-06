import { AxiosError } from "axios";

export type ErrorResponseInterceptor = (
  error: AxiosError<unknown>,
  next: (error: AxiosError) => unknown,
) => unknown;

export const ErrorInterceptorChain = (error: AxiosError) => {
  return (...chain: ErrorResponseInterceptor[]): unknown => {
    let index = 0;

    const next = (err: AxiosError): unknown => {
      const interceptor = chain[index];
      index++;

      if (interceptor) return interceptor(err, next);
      return Promise.reject(err);
    };

    return next(error);
  };
};
