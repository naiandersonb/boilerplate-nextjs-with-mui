"use client";

import { ExpandMore, PlaceOutlined, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const SearchForm = () => {
  return (
    <Stack
      sx={({ palette }) => ({
        backgroundColor: palette.common.white,
        paddingX: "40px",
        paddingY: "60px",
        maxWidth: 600,
      })}
    >
      <Typography variant="h4">
        Agende sua consulta particular com especialistas perto de você
      </Typography>

      <Typography sx={{ mt: 2 }} variant="h5" color="textSecondary">
        Consulta segura, rápida e com pagamento antecipado
      </Typography>

      <Stack component="form" sx={{ mt: 4, gap: 2 }}>
        <Autocomplete
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Especialidade ou médico"
              variant="outlined"
              slotProps={{
                input: { sx: { borderRadius: 0 } },
              }}
            />
          )}
          options={[]}
        />

        <Autocomplete
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
          size="large"
          startIcon={<Search />}
          type="submit"
        >
          Buscar médicos
        </Button>
      </Stack>
    </Stack>
  );
};
