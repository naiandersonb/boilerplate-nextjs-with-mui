import { useAnchor } from "@/hooks/use-anchor";
import {
  AccessTime,
  CloseOutlined,
  EastOutlined,
  LocationOnOutlined,
  PaidOutlined,
  TodayOutlined,
} from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface AppointmentItemProps {
  label: string;
}

interface ItemCardProps {
  icon: ReactNode;
  title: string;
  content: string;
}

const ItemCard = ({ content, icon, title }: ItemCardProps) => (
  <Stack direction="row" alignItems="flex-start" gap={1}>
    {icon}
    <Box>
      <Typography variant="body2" color="textSecondary">
        {title}
      </Typography>
      <Typography variant="subtitle1">{content}</Typography>
    </Box>
  </Stack>
);

export const AppointmentItem = ({ label }: AppointmentItemProps) => {
  const { anchorEl, handleClose, handleOpen, id, isOpen } = useAnchor();

  return (
    <>
      <Chip
        component="button"
        onClick={handleOpen}
        icon={<AccessTime color="primary" fontSize="small" />}
        label={label}
        sx={({ palette }) => ({
          width: "100%",
          backgroundColor: alpha(palette.primary.light, 0.1),
          color: palette.primary.dark,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: alpha(palette.primary.light, 0.2),
          },
        })}
      />

      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        slotProps={{
          paper: { sx: { borderRadius: 0, width: 400, mt: 1, boxShadow: 3 } },
        }}
      >
        <Card>
          <CardHeader
            title="Detalhes da consulta"
            slotProps={{ title: { sx: { fontSize: "20px" } } }}
            action={
              <IconButton aria-label="close popover" onClick={handleClose}>
                <CloseOutlined
                  sx={{ color: "text.primary" }}
                  fontSize="small"
                />
              </IconButton>
            }
          />

          <CardContent>
            <Grid container rowGap={2}>
              <Grid size={6}>
                <ItemCard
                  icon={<TodayOutlined color="disabled" />}
                  content="22 de Abril, Seg"
                  title="Data"
                />
              </Grid>
              <Grid size={6}>
                <ItemCard
                  icon={<LocationOnOutlined color="disabled" />}
                  content="22 de Abril, Seg"
                  title="Local"
                />
              </Grid>
              <Grid size={6}>
                <ItemCard
                  icon={<AccessTime color="disabled" />}
                  content="09:00"
                  title="Hora"
                />
              </Grid>
              <Grid size={6}>
                <ItemCard
                  icon={<PaidOutlined color="disabled" />}
                  content="R$300,00"
                  title="Valor"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button onClick={handleClose}>Fechar</Button>
            <Button variant="contained" endIcon={<EastOutlined />}>
              Continuar
            </Button>
          </CardActions>
        </Card>
      </Popover>
    </>
  );
};
