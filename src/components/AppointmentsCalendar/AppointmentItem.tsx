import { useAnchor } from "@/hooks/use-anchor";
import { useDevice } from "@/hooks/use-device";
import { useDisclosure } from "@/hooks/use-disclosure";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { memo, ReactNode } from "react";

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

const AppointmentItemComp = ({ label }: AppointmentItemProps) => {
  const { anchorEl, handleClose, handleOpen, id, isOpen } = useAnchor();
  const drawerDisclosure = useDisclosure();
  const { isMobile } = useDevice();

  const content = (
    <Grid container rowGap={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ItemCard
          icon={<TodayOutlined color="disabled" />}
          content="22 de Abril, Seg"
          title="Data"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ItemCard
          icon={<LocationOnOutlined color="disabled" />}
          content="São Paulo, Medical Clinic"
          title="Local"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ItemCard
          icon={<AccessTime color="disabled" />}
          content="09:00"
          title="Hora"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ItemCard
          icon={<PaidOutlined color="disabled" />}
          content="R$300,00"
          title="Valor"
        />
      </Grid>
    </Grid>
  );

  return (
    <>
      <Chip
        component="button"
        onClick={(evt) => {
          if (isMobile) return drawerDisclosure.onOpen();
          handleOpen(evt);
        }}
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

      {isMobile ? (
        <Dialog
          open={drawerDisclosure.isOpen}
          onClose={drawerDisclosure.onClose}
        >
          <DialogTitle>Detalhes da consulta</DialogTitle>
          <DialogContent>{content}</DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                if (isMobile) return drawerDisclosure.onClose();
                handleClose();
              }}
            >
              Fechar
            </Button>
            <Button variant="contained" endIcon={<EastOutlined />}>
              Continuar
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
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
          {
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

              <CardContent>{content}</CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button onClick={handleClose}>Fechar</Button>
                <Button variant="contained" endIcon={<EastOutlined />}>
                  Continuar
                </Button>
              </CardActions>
            </Card>
          }
        </Popover>
      )}
    </>
  );
};

export const AppointmentItem = memo(AppointmentItemComp);
