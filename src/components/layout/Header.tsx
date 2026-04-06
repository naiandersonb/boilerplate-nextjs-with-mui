"use client";

import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface HeaderProps {
  actions?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ actions }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={({ palette }) => ({
          backgroundColor: palette.common.white,
          boxShadow: 0,
          borderBottom: "1px solid",
          borderBottomColor: palette.grey[100],
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
          <Image
            src="/assets/full-logo.svg"
            alt="logo acheiConsulta"
            loading="eager"
            width={117}
            height={59}
          />

          <Stack direction="row" spacing={2} alignItems="center">
            {actions && actions}
            <Button variant="contained">Entrar</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
