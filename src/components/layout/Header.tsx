"use client";

import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AppBarLogo } from "./AppBarLogo";

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid",
        borderColor: "grey.50",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AppBarLogo />

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              //anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={false}
            >
              <MenuItem>
                <Typography sx={{ textAlign: "center" }}>menu item</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
