"use client";

import { LocationOnOutlined, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Container,
  InputAdornment,
} from "@mui/material";
import { SpecialtiesField } from "../SpecialtiesField";
import { LocaleField } from "../LocaleField";

export const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        px: 2,
        backgroundColor: "background.default",
        backgroundImage: "url(/assets/hero04.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          minHeight: { xs: "80vh", md: "70vh" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-end" },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 6, md: 4 }}
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "40px", lg: "48px" },
                fontWeight: 500,
                color: "white",
                lineHeight: 1.2,
                maxWidth: 600,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Agende sua consulta com especialistas perto de você
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "white",
                mt: 3,
                maxWidth: 450,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Encontre especialistas na sua região, escolha o melhor horário e
              resolva tudo online de forma rápida e segura.
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={({ palette }) => ({
                mt: 4,
                width: "100%",
                maxWidth: { md: 900, lg: 900 },
                backgroundColor: palette.common.white,
                padding: { xs: "20px", md: "16px 24px" },
                position: "relative",
              })}
            >
              <SpecialtiesField />
              <LocaleField />

              <Button
                variant="contained"
                sx={{
                  minWidth: { md: "120px" },
                  height: { xs: "56px", md: "auto" },
                }}
              >
                Pesquisar
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
