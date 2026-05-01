import { useDevice } from "@/hooks/use-device";
import {
  AccessTime,
  ChevronLeftOutlined,
  ChevronRightOutlined,
} from "@mui/icons-material";
import {
  alpha,
  Box,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { addDays, format, isToday, isTomorrow, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export const AppointmentsCalendar = () => {
  const [referenceDate, setReferenceDate] = useState(new Date());

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

  return (
    <Stack>
      <Typography variant="h6">Abril 2024</Typography>

      <Stack direction="row" spacing="6px" alignItems="flex-start">
        <IconButton onClick={handlePrev} size={isMobile ? "small" : "medium"}>
          <ChevronLeftOutlined fontSize="small" />
        </IconButton>

        <Grid
          container
          flex={1}
          gap="6px"
          sx={{
            overflow: "hidden",
            "@keyframes slideIn": {
              "0%": { opacity: 0, transform: "translateX(10px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          {visibleDates.map((date) => (
            <Grid
              flex={1}
              key={date.toISOString()}
              sx={{
                animation: "slideIn 0.3s ease-out",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box
                sx={({ palette }) => ({
                  width: "100%",
                  border: "1px solid",
                  borderColor: palette.grey[100],
                  padding: 1,
                  display: "grid",
                  placeItems: "center",
                })}
              >
                <Typography variant="body2" textAlign="center">
                  {formatDateLabel(date)}
                </Typography>
              </Box>

              <Stack
                spacing="6px"
                marginTop={2}
                sx={{
                  width: "100%",
                  paddingX: "2px",
                }}
              >
                {Array.from({ length: 20 }).map((_, index) => (
                  <Chip
                    onClick={() => alert("clicado")}
                    icon={<AccessTime color="primary" fontSize="small" />}
                    label="09:00"
                    key={index}
                    sx={({ palette }) => ({
                      width: "100%",
                      backgroundColor: alpha(palette.primary.light, 0.1),
                      color: palette.primary.dark,
                    })}
                  />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <IconButton onClick={handleNext} size={isMobile ? "small" : "medium"}>
          <ChevronRightOutlined fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};
