"use client";

import { useAnchor } from "@/hooks/use-anchor";
import { useDevice } from "@/hooks/use-device";
import { Button, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export const Actions = () => {
  const { isMobile } = useDevice();
  const { anchorEl, handleClose, handleOpen, id, isOpen } =
    useAnchor("mobile-menu");

  if (isMobile) {
    return (
      <>
        <IconButton onClick={handleOpen} edge="end" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Menu
          id={id}
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>Como funciona</MenuItem>
          <MenuItem onClick={handleClose}>Para médicos</MenuItem>
        </Menu>
      </>
    );
  }

  return (
    <Stack direction="row" spacing={1}>
      <Button>Como funciona</Button>
      <Button>Para médicos</Button>
    </Stack>
  );
};
