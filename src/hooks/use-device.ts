import { useMediaQuery, useTheme } from "@mui/material";

export const useDevice = () => {
  const theme = useTheme();

  return {
    isExtraSmall: useMediaQuery(theme.breakpoints.down("sm")),
    isMobile: useMediaQuery(theme.breakpoints.down("md")),
    isTablet: useMediaQuery(theme.breakpoints.between("sm", "md")),
    isDesktop: useMediaQuery(theme.breakpoints.up("md")),
    isLargeDesktop: useMediaQuery(theme.breakpoints.up("lg")),
  };
};
