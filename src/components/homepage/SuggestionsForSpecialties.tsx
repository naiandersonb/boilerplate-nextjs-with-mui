"use client";

import { Container, Stack, Typography } from "@mui/material";
import { SpecialtiesItem } from "./SpecialtiesItem";

export const SuggestionsForSpecialties = () => {
  const specialties = [
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
        {specialties.map((item) => (
          <SpecialtiesItem key={item} content={item} />
        ))}
      </Stack>
    </Container>
  );
};
