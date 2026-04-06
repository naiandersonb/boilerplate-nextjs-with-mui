import { STALE_TIME } from "@/constants/stale-time";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME.ONE_HOUR,
      retry: (error: unknown): boolean => {
        const status = (error as AxiosError)?.response?.status;
        const isError = Boolean(status && (status < 200 || status >= 300));
        return isError;
      },
    },
  },
});
