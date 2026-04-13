"use client";

import { useDevice } from "@/hooks/use-device";
import { PlaceOutlined, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const SearchForm = () => {
  const { isMobile } = useDevice();
  return (
    <Stack
      sx={({ palette, shadows }) => ({
        boxShadow: shadows[4],
        backgroundColor: palette.common.white,
        paddingX: { xs: "24px", md: "40px", lg: "40px" },
        paddingY: { xs: "24px", md: "40px", lg: "60px" },
        maxWidth: 600,
      })}
    >
      <Typography
        fontSize={{ xs: "24px", md: "40px" }}
        variant="h4"
        fontWeight={500}
      >
        Agende sua consulta particular com especialistas perto de você
      </Typography>

      <Typography
        sx={{ mt: 2 }}
        fontSize={{ xs: "16px", md: "22px" }}
        variant="h5"
        color="textSecondary"
      >
        Consulta segura, rápida e com pagamento antecipado
      </Typography>

      <Stack component="form" sx={{ mt: 4, gap: 2 }}>
        <Autocomplete
          size={isMobile ? "small" : "medium"}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Especialidade ou médico"
              variant="outlined"
              slotProps={{
                input: {
                  sx: { borderRadius: 0 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
          options={[]}
        />

        <Autocomplete
          size={isMobile ? "small" : "medium"}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Cidade ou região"
              variant="outlined"
              slotProps={{
                input: {
                  sx: { borderRadius: 0 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <PlaceOutlined />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
          options={[]}
        />

        <Button
          variant="contained"
          size={isMobile ? "medium" : "large"}
          type="submit"
        >
          Buscar médicos
        </Button>
      </Stack>
    </Stack>
  );
};
