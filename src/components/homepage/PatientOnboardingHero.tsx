import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const PatientOnboardingHero = () => {
  return (
    <Container maxWidth="lg" sx={{ my: { xs: 4, md: 8 } }}>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{ flex: 1, maxWidth: { md: 600 } }}>
          <Typography
            maxWidth={{ xs: "100%", md: "10ch" }}
            fontSize={{ xs: "32px", md: "60px" }}
            fontWeight="medium"
            variant="h4"
          >
            Sua saúde em boas mãos
          </Typography>

          <Typography variant="body1" color="textSecondary" mt={4}>
            Todos os médicos possuem perfil público com informações
            profissionais, especialidades e horários disponíveis.
          </Typography>

          <Typography variant="body1" color="textSecondary" my={2}>
            Nosso objetivo é conectar pacientes e médicos de forma simples,
            segura e transparente.
          </Typography>

          <Button endIcon={<ArrowForwardIos />} sx={{ minWidth: "160px" }}>
            Buscar médicos
          </Button>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "max-content" } }}>
          <Image
            src="/assets/woman-with-coffee.png"
            alt="uma mulher tomando café enquanto olhar o notebook"
            width={453}
            height={453}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>
    </Container>
  );
};
