import { useDevice } from "@/hooks/use-device";
import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { addDays, format, isToday, isTomorrow, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { AppointmentItem } from "./AppointmentItem";

interface AppointmentsCalendarProps {
  showAllAppointments?: boolean;
  maxHeight?: `${string}px`;
}

export const AppointmentsCalendar = ({
  showAllAppointments = false,
  maxHeight = "220px",
}: AppointmentsCalendarProps) => {
  const [referenceDate, setReferenceDate] = useState(new Date());
  const [showAll, setShowAll] = useState(showAllAppointments);

  const handleToggleShowAll = () => {
    if (!showAllAppointments) setShowAll((prev) => !prev);
  };

  const { isMobile } = useDevice();
  const count = isMobile ? 3 : 4;

  const handlePrev = () => {
    setReferenceDate((prev) => subDays(prev, count));
  };

  const handleNext = () => {
    setReferenceDate((prev) => addDays(prev, count));
  };

  const getDates = (count: number, startDate: Date): Date[] => {
    return Array.from({ length: count }, (_, index) =>
      addDays(startDate, index),
    );
  };

  const visibleDates = getDates(count, referenceDate);

  const formatDateLabel = (date: Date) => {
    if (isToday(date)) return "Hoje";
    if (isTomorrow(date)) return "Amanhã";

    return format(date, "dd, EEEEEE", { locale: ptBR });
  };

  const formatMonth = (date: Date) => {
    return format(date, "MMMM", { locale: ptBR });
  };

  return (
    <Stack>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Abril 2024
      </Typography>

      <Stack
        direction="row"
        spacing="6px"
        alignItems="flex-start"
        sx={{ height: "100%", overflow: "hidden", mb: 2 }}
      >
        <Box sx={{ pt: "8px" }}>
          <IconButton onClick={handlePrev} size={isMobile ? "small" : "medium"}>
            <ChevronLeftOutlined fontSize="small" />
          </IconButton>
        </Box>

        <Grid
          container
          flex={1}
          gap="6px"
          sx={[
            ({ palette }) => ({
              height: "100%",
              paddingRight: "4px",
              transition: "max-height 0.5s ease-in-out",
              maxHeight: showAll ? "1200px" : maxHeight,
              overflowY: showAll ? "visible" : "auto",
              overflowX: "hidden",
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: palette.grey[50],
                borderRadius: "10px",
              },
              "@keyframes slideIn": {
                "0%": { opacity: 0, transform: "translateX(10px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }),
            (showAllAppointments || showAll) && { overflowY: "hidden" },
          ]}
        >
          {visibleDates.map((date) => (
            <Grid
              flex={1}
              key={date.toISOString()}
              sx={{
                animation: "slideIn 0.3s ease-out",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={({ palette }) => ({
                  position: "sticky",
                  top: 0,
                  zIndex: 2,
                  width: "100%",
                  border: "1px solid",
                  borderColor: palette.grey[100],
                  padding: "4px",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: palette.background.paper,
                })}
              >
                <Typography variant="body2" textAlign="center">
                  {formatDateLabel(date)}
                </Typography>
                <Typography variant="caption" color="primary">
                  {formatMonth(date)}
                </Typography>
              </Box>

              <Stack spacing="6px" marginTop={2} sx={{ width: "100%" }}>
                {Array.from({ length: 20 }).map((_, index) => (
                  <AppointmentItem key={index} label={`time ${index + 1}`} />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ pt: "8px" }}>
          <IconButton onClick={handleNext} size={isMobile ? "small" : "medium"}>
            <ChevronRightOutlined fontSize="small" />
          </IconButton>
        </Box>
      </Stack>

      {!showAllAppointments && (
        <Stack
          sx={({ palette }) => ({
            mt: "auto",
            borderTop: "1px solid",
            borderTopColor: palette.grey[100],
            pt: 1,
          })}
        >
          <Button
            endIcon={showAll ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            onClick={handleToggleShowAll}
          >
            {showAll ? "Mostrar menos" : "Ver todos os horários"}
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
