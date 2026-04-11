"use client";

import { Stack } from "@mui/material";
import { HeaderContainer } from "./HeaderContainer";
import { UserMenu } from "./UserMenu";

import { AppBarLogo } from "./AppBarLogo";

export const HomeAppBar = () => {
  return (
    <HeaderContainer>
      <Stack
        direction="row"
        spacing="2px"
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: 1200, width: "100%", marginX: "auto" }}
      >
        <AppBarLogo />

        <UserMenu />
      </Stack>
    </HeaderContainer>
  );
};
