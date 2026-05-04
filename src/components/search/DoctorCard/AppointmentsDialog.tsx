import { AppointmentsCalendar } from "@/components/AppointmentsCalendar";
import { useDisclosure } from "@/hooks/use-disclosure";
import { ExpandMoreOutlined, TodayOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import { SelectLocale } from "./SelectLocale";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AppointmentsDialog = () => {
  const drawerDisclosure = useDisclosure();
  return (
    <>
      <Button
        variant="contained"
        startIcon={<TodayOutlined />}
        onClick={drawerDisclosure.onOpen}
      >
        Agendar uma consulta
      </Button>

      <Dialog
        fullScreen
        open={drawerDisclosure.isOpen}
        onClose={drawerDisclosure.onClose}
        slots={{ transition: Transition }}
      >
        <DialogTitle component="header">
          <Stack direction="row" alignItems="center" gap={2}>
            <IconButton onClick={drawerDisclosure.onClose}>
              <ExpandMoreOutlined color="primary" />
            </IconButton>
            <Box>
              <Typography variant="h6">Agendar uma consulta</Typography>
              <Typography variant="body2" color="textSecondary">
                Dr. Marcos Ferreira Rodrigues
              </Typography>
            </Box>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ flex: 1, padding: { md: 2 }, paddingY: { xs: 2, md: 2 } }}>
            <SelectLocale localeList={[]} />
            <Box sx={{ mt: 4 }}>
              <AppointmentsCalendar showAllAppointments />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
