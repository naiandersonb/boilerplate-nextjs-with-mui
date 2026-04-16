"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { SpecialtiesItem } from "./SpecialtiesItem";

export const SuggestionsForSpecialties = () => {
  const specialties = {
    top: [
      "Ortopedista/Traumatologista",
      "Reumatologista",
      "Clínico Geral",
      "Cardiologista",
    ],
    bottom: ["Dermatologista", "Ginecologista", "Pediatra", "Neurologista"],
  };

  const specialties2 = [
    "Ortopedista/Traumatologista",
    "Reumatologista",
    "Clínico Geral",
    "Cardiologista",
    "Dermatologista",
    "Ginecologista",
    "Pediatra",
    "Neurologista",
  ];

  return (
    <Container maxWidth="lg">
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: 1000,
          width: "100%",
          marginX: "auto",
          padding: "32px 16px",
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="medium"
          fontSize={{ xs: "24px", md: "32px" }}
        >
          Especialidades mais buscadas
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          useFlexGap
          sx={{
            marginTop: { xs: "30px", md: "55px" },
            flexWrap: "wrap",
          }}
        >
          {specialties2.map((item) => (
            <SpecialtiesItem key={item} content={item} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
