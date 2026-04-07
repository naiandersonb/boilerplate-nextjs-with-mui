import { AppBar, Box, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";

export const HeaderContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={({ palette }) => ({
          backgroundColor: palette.common.white,
          boxShadow: 0,
          borderBottom: "1px solid",
          borderBottomColor: palette.divider,
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
