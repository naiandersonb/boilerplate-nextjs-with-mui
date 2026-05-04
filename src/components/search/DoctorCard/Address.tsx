import { useAnchor } from "@/hooks/use-anchor";
import { Option } from "@/types/option";
import { LocationOnOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Stack,
  Typography,
} from "@mui/material";

interface AddressProps {
  addressList?: Option[];
}

export const Address: React.FC<AddressProps> = ({ addressList = [] }) => {
  const { anchorEl, handleClose, handleOpen, id, isOpen } = useAnchor();
  const isMultipleAddress = addressList.length > 1;
  return (
    <>
      <Box>
        <Typography variant="caption">Endereço:</Typography>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={1}
          alignItems={{ md: "center" }}
          sx={{ color: "text.secondary" }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnOutlined sx={{ fontSize: 18 }} />

            <Typography
              variant="body2"
              sx={[
                { fontSize: { xs: "12px", md: "14px" } },
                isMultipleAddress && {
                  maxWidth: { md: "200px" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              ]}
            >
              {addressList[0].label}
            </Typography>
          </Stack>
          {isMultipleAddress && (
            <Typography
              aria-describedby={id}
              variant="body2"
              onClick={handleOpen}
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: { xs: "12px", md: "14px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              Todos os locais ({addressList.length})
            </Typography>
          )}
        </Stack>

        <Popover
          id={id}
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: { sx: { borderRadius: 0, width: 300, mt: 1, boxShadow: 3 } },
          }}
        >
          <Box sx={{ p: 1, bgcolor: "background.default" }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Todos os locais
            </Typography>
            <Divider />
            <List sx={{ pt: 0 }}>
              {addressList.map((addr, index) => (
                <ListItemButton
                  key={index}
                  onClick={handleClose}
                  sx={{ borderRadius: 0, mt: 0.5 }}
                >
                  <Box sx={{ mr: 2 }}>
                    <LocationOnOutlined />
                  </Box>

                  <ListItemText
                    primary={addr.label}
                    slotProps={{
                      primary: {
                        variant: "body2",
                        fontSize: "12px",
                      },
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Popover>
      </Box>
    </>
  );
};
