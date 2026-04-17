import { ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export const PatientOnboardingHero = () => {
  return (
    <Stack sx={{ paddingX: { xs: "24px", md: 0 } }}>
      <Container maxWidth="lg" sx={{ my: { xs: 4, md: 8 } }} disableGutters>
        <Card
          sx={{
            border: "none",
            display: "flex",

            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", paddingX: 0 }}>
              <Box sx={{ flex: 1, maxWidth: { md: 600 } }}>
                <Typography
                  maxWidth={{ xs: "100%", md: "10ch" }}
                  fontSize={{ xs: "32px", md: "48px" }}
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
                  Nosso objetivo é conectar pacientes e médicos de forma
                  simples, segura e transparente.
                </Typography>

                <CardActions sx={{ paddingX: 0 }}>
                  <Button
                    size="large"
                    endIcon={<ArrowForwardIos />}
                    sx={{ minWidth: "160px" }}
                  >
                    Buscar médicos
                  </Button>
                </CardActions>
              </Box>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ ml: "auto", width: { xs: "100%", md: 500 }, height: "auto" }}
            image="/assets/woman-with-coffee.png"
            alt="Live from space album cover"
          />
        </Card>
      </Container>
    </Stack>
  );
};
