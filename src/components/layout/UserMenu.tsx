import { useAnchor } from "@/hooks/use-anchor";
import { useDevice } from "@/hooks/use-device";
import {
  AccountCircleOutlined,
  KeyboardArrowDown,
  Logout,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

export const UserMenu = () => {
  const { isMobile } = useDevice();
  const { anchorEl, handleClose, handleOpen, id, isOpen } =
    useAnchor("mobile-menu");

  const auth = false;

  if (!auth) {
    return (
      <Button variant="contained" disableElevation>
        Entrar
      </Button>
    );
  }

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ p: 0, cursor: "pointer" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar
            sx={[isMobile && { width: 32, height: 32 }]}
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />
          <KeyboardArrowDown
            sx={{
              rotate: isOpen ? "180deg" : 0,
              transition: "rotate ease-in-out 0.2s",
            }}
          />
        </Stack>
      </IconButton>

      <Menu
        id={id}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        slotProps={{ list: { sx: { minWidth: 200 } } }}
        sx={({ spacing }) => ({ mt: spacing(1) })}
      >
        <MenuItem
          disableTouchRipple
          sx={{ ":hover": { backgroundColor: "transparent" } }}
        >
          <Stack alignItems="flex-start" sx={{ paddingBottom: 2 }}>
            <Typography color="textPrimary">Tony Stark</Typography>
            <Typography variant="caption" color="textSecondary">
              tonystark@gmail.com
            </Typography>
          </Stack>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleOutlined />
          </ListItemIcon>
          <ListItemText>Meu perfil</ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Sair da conta</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
