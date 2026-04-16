"use client";

import { useDevice } from "@/hooks/use-device";
import { PlaceOutlined, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

export const SearchForm = () => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <TextField
        variant="outlined"
        placeholder="Especialidade ou médico"
        sx={() => ({ border: "none" })}
        slotProps={{
          input: {
            sx: { borderRadius: 0, backgroundColor: "white" },
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          },
        }}
      />
    );
  }

  return (
    <Stack component="form" sx={{ gap: 2, width: "100%" }}>
      <Autocomplete
        fullWidth
        size={isMobile ? "small" : "medium"}
        sx={{ border: "none" }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Especialidade ou médico"
            variant="outlined"
            slotProps={{
              input: {
                ...params.InputProps,
                sx: {
                  borderRadius: 0,
                  backgroundColor: "white",
                  border: "none",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
        options={[]}
      />

      <Autocomplete
        fullWidth
        size={isMobile ? "small" : "medium"}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Cidade ou região"
            variant="outlined"
            slotProps={{
              input: {
                ...params.InputProps,
                sx: { borderRadius: 0, backgroundColor: "white" },
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceOutlined color="primary" />
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
        type="submit"
        sx={{ height: "48px" }}
      >
        Buscar médicos
      </Button>
    </Stack>
  );
};
