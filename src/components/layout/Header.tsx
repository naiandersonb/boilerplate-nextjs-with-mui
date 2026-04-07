"use client";

import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import { Logo } from "../Logo";
import { useDevice } from "@/hooks/use-device";
import Link from "next/link";
import { UserMenu } from "./UserMenu";

interface HeaderProps {
  actions?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ actions }) => {
  const { isMobile } = useDevice();

  const auth = true;

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
          <Stack direction="row" spacing="2px" alignItems="center">
            {isMobile && actions}

            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Logo {...(isMobile && { width: 89, height: 30 })} />
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            {/* Desktop: Actions aparecem ANTES do botão Entrar */}
            {!isMobile && actions}

            {auth ? (
              <UserMenu />
            ) : (
              <Button variant="contained" disableElevation>
                Entrar
              </Button>
            )}

            {/* Mobile: Actions (Menu) aparece DEPOIS do botão Entrar */}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
