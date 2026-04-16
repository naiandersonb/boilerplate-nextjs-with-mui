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
import Image from "next/image";

export const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        px: 2,
        // backgroundColor: "background.default",
        // backgroundImage: "url(/assets/background.svg)",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 6, md: 4 }}
        >
          <Box sx={{ width: "100%", textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "40px", lg: "48px" },
                fontWeight: 500,
                color: "primary.main",
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
                color: "primary.main",
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
                maxWidth: { md: 700 },
                backgroundColor: palette.common.white,
                padding: { xs: "24px", md: "16px 24px" },
                position: "relative",
                // "&::before": {
                //   content: '""',
                //   position: "absolute",
                //   inset: "-2px",
                //   zIndex: -1,
                //   background:
                //     "linear-gradient(90deg, #0FA4A9 0%, #E7F487 100%)",
                // },

                boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.08)",
              })}
            >
              <Autocomplete
                fullWidth
                options={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="medium"
                    placeholder="Especialidade ou médico"
                    variant="outlined"
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                        sx: { borderRadius: 0 },
                      },
                    }}
                  />
                )}
              />

              <Autocomplete
                fullWidth
                options={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="medium"
                    placeholder="Cidade ou região"
                    variant="outlined"
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnOutlined />
                          </InputAdornment>
                        ),
                        sx: { borderRadius: 0 },
                      },
                    }}
                  />
                )}
              />

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

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "60%", md: "60%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                width: "100%",
              }}
            >
              <Image
                src="/assets/hero-image.png"
                alt="Médico atendendo uma paciente"
                width={457}
                height={465}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                transform: "translate(-40%, -50%)",
                zIndex: 1,
              }}
            >
              <Image
                src="/assets/gradient.svg"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
