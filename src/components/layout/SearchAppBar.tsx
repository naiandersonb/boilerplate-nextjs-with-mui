"use client";

import { Stack } from "@mui/material";
import { HeaderContainer } from "./HeaderContainer";
import { UserMenu } from "./UserMenu";
import { AppBarLogo } from "./AppBarLogo";

export const SearchAppBar = () => {
  return (
    <HeaderContainer>
      <Stack direction="row" spacing="2px" alignItems="center">
        <AppBarLogo />
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <UserMenu />
      </Stack>
    </HeaderContainer>
  );
};
