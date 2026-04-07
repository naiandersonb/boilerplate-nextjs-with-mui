"use client";

import { Stack } from "@mui/material";
import { HeaderContainer } from "./HeaderContainer";
import { useDevice } from "@/hooks/use-device";
import { Actions } from "./Actions";
import { UserMenu } from "./UserMenu";

import { AppBarLogo } from "./AppBarLogo";

export const HomeAppBar = () => {
  const { isMobile } = useDevice();
  return (
    <HeaderContainer>
      <Stack direction="row" spacing="2px" alignItems="center">
        {isMobile && <Actions />}

        <AppBarLogo />
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        {!isMobile && <Actions />}

        <UserMenu />
      </Stack>
    </HeaderContainer>
  );
};
