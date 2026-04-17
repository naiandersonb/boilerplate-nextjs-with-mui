"use client";

import { ArrowForwardIos, Check } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export const ProfessionalOnboarding = () => {
  const benefits = [
    "Controle total dos horários",
    "Agendamento online 24h",
    "Página profissional personalizada",
    "Mais pacientes todos os dias",
  ];

  return (
    <Stack
      sx={({ palette }) => ({
        paddingY: { xs: 4, md: 10 },
        paddingX: 2,
        backgroundColor: alpha(palette.primary.light, 0.2),
      })}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          backgroundColor: "white",
          overflow: "hidden",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Card
          sx={{
            border: "none",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Stack
                direction="column"
                padding={{ xs: 2, sm: 6, md: 8 }}
                sx={{ flex: 1, justifyContent: "center" }}
              >
                <Typography
                  variant="h4"
                  fontWeight={500}
                  color="primary"
                  fontSize={{ xs: "1.75rem", md: "2.125rem" }}
                >
                  Você é médico?
                </Typography>

                <Typography variant="body1" mt={3}>
                  Tenha sua página pública, agenda online e receba consultas com
                  pagamento automático.
                </Typography>

                <Stack sx={{ mt: 3, mb: 4 }} spacing={2}>
                  {benefits.map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      alignItems="center"
                      gap={2}
                    >
                      <Box
                        sx={({ palette }) => ({
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          minWidth: 24,
                          height: 24,
                          backgroundColor: alpha(palette.primary.light, 0.1),
                          color: palette.primary.main,
                        })}
                      >
                        <Check sx={{ fontSize: "16px" }} />
                      </Box>
                      <Typography variant="body2">{item}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  endIcon={
                    <ArrowForwardIos sx={{ fontSize: "12px !important" }} />
                  }
                  sx={{
                    width: { xs: "100%", sm: "fit-content" },
                    minWidth: "250px",
                    py: 1.5,
                  }}
                >
                  Criar perfil médico
                </Button>
              </Stack>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", md: 500 }, height: "auto" }}
            image="/assets/doctor-with-patient.png"
            alt="Live from space album cover"
          />
        </Card>
      </Container>
    </Stack>
  );
};
