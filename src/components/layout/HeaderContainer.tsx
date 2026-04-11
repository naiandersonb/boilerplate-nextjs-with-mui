import { alpha, AppBar, Box, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";

export const HeaderContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={({ palette }) => ({
          backgroundColor: alpha(palette.common.white, 0.8),
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: 0,
          borderBottom: "1px solid",
          borderBottomColor: alpha(palette.divider, 0.1),
          color: palette.text.primary,
        })}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
