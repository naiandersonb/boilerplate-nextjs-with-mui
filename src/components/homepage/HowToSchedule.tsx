"use client";

import {
  EventOutlined,
  Search,
  VerifiedOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { alpha, Box, Container, Stack, Typography } from "@mui/material";

export const HowToSchedule = () => {
  const steps = [
    {
      icon: (
        <Search
          sx={({ palette }) => ({
            color: palette.primary.main,
            fontSize: { xs: "32px", md: "32px", lg: "48px" },
          })}
        />
      ),
      title: "Busque um médico",
      description:
        "Digite a especialidade ou o nome do médico e escolha sua cidade.",
    },
    {
      icon: (
        <EventOutlined
          sx={({ palette }) => ({
            color: palette.primary.main,
            fontSize: { xs: "32px", md: "32px", lg: "48px" },
          })}
        />
      ),
      title: "Veja horários disponíveis",
      description: "Compare profissionais, valores e horários em tempo real.",
    },
    {
      icon: (
        <VerifiedUserOutlined
          sx={({ palette }) => ({
            color: palette.primary.main,
            fontSize: { xs: "32px", md: "32px", lg: "48px" },
          })}
        />
      ),
      title: "Agende e pague online",
      description:
        "Escolha o melhor horário e confirme sua consulta com pagamento seguro.",
    },
    {
      icon: (
        <VerifiedOutlined
          sx={({ palette }) => ({
            color: palette.primary.main,
            fontSize: { xs: "32px", md: "32px", lg: "48px" },
          })}
        />
      ),
      title: "Consulta confirmada",
      description:
        "Receba a confirmação e vá para sua consulta com tranquilidade.",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Stack sx={{ marginTop: 4, padding: "48px 16px" }}>
        <Typography
          sx={{ maxWidth: 400, marginX: "auto", mb: 8 }}
          fontSize={{ xs: "24px", md: "32px" }}
          fontWeight="medium"
          variant="h4"
          textAlign="center"
        >
          Como agendar sua consulta no{" "}
          <Typography
            component="span"
            fontSize={{ xs: "24px", md: "32px" }}
            sx={({ palette }) => ({
              color: palette.primary.main,
              fontWeight: 500,
            })}
          >
            AcheiConsulta
          </Typography>
        </Typography>

        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={2}
          alignItems="stretch"
          justifyContent="center"
        >
          {steps.map((step, index) => {
            return (
              <Stack
                key={index}
                sx={({ palette }) => ({
                  backgroundColor: alpha(palette.primary.main, 0.03),
                  maxWidth: { lg: "300px" },
                  width: "100%",
                  padding: 3,
                })}
              >
                <Box>{step.icon}</Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6">{step.title}</Typography>
                  <Typography variant="body1" color="textSecondary">
                    {step.description}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};
