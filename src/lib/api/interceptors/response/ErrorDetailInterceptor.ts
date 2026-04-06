import { ErrorDetail } from "@/types/error-detail";
import { isErrorDetailResponse } from "@/utils/error-validators";
import { ErrorResponseInterceptor } from "@/utils/ErrorInterceptorChain";

export const ErrorDetailInterceptor: ErrorResponseInterceptor = (
  error,
  next,
) => {
  if (!isErrorDetailResponse(error)) return next(error);

  return Promise.reject(
    new ErrorDetail(
      error.response.data.title,
      error.response.data.detail,
      error.response.data.code,
      error.response.data.type,
    ),
  );
};
