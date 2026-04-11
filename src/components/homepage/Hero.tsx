"use client";

import { Stack, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        position: "relative",
        backgroundImage: "url(assets/hero-image.png)",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 24, sm: 32, md: 48 },
          maxWidth: 900,
          textAlign: "center",
          fontWeight: "medium",
          px: 2,
        }}
        color="primary"
        //variant="h3"
      >
        Agende sua consulta particular com especialistas perto de você
      </Typography>

      <Typography
        sx={{ fontSize: { xs: 20, md: 24 }, textAlign: "center", mt: 2, px: 2 }}
        variant="h5"
        color="textPrimary"
      >
        Consulta segura, rápida e com pagamento antecipado
      </Typography>
    </Stack>
  );
};
