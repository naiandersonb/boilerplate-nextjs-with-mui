"use client";

import { useDevice } from "@/hooks/use-device";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import {
  HelpOutline,
  MedicalServicesOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useDisclosure } from "@/hooks/use-disclosure";

export const Actions = () => {
  const { isMobile } = useDevice();
  const { isOpen, onClose, onOpen } = useDisclosure();

  if (isMobile) {
    return (
      <>
        <IconButton onClick={onOpen} edge="end" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} onClose={onClose}>
          <List sx={{ minWidth: 250 }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutline
                    sx={({ palette }) => ({ color: palette.text.primary })}
                  />
                </ListItemIcon>

                <ListItemText primary="Como funciona" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MedicalServicesOutlined
                    sx={({ palette }) => ({ color: palette.text.primary })}
                  />
                </ListItemIcon>

                <ListItemText primary="Para médicos" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
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
