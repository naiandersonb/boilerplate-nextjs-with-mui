"use client";

import { useSearchForm } from "@/hooks/use-search-form";
import { SearchFormData } from "@/schemas/search-form";
import { Option } from "@/types/option";
import { LocationOnOutlined, Search } from "@mui/icons-material";
import { Button, InputAdornment, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { AsyncAutocompleteField } from "./AsyncAutocompleteField";

export const HeroSearchForm = () => {
  const { handleSubmit, control } = useSearchForm();
  const handleSubmitSearch = async (data: SearchFormData) => {
    console.log({ data });
  };

  const handleFetchSpecialties = async (query: string): Promise<Option[]> => {
    setTimeout(() => new Promise((resolve) => resolve([])), 600);

    const results = [
      { label: "Cardiologia", value: "Cardiologia" },
      { label: "Dermatologia", value: "Dermatologia" },
      { label: "Pediatria", value: "Pediatria" },
      { label: "Dr. Silva", value: "Dr. Silva" },
    ].filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

    return results ?? [];
  };

  const handleFetchLocales = async (query: string): Promise<Option[]> => {
    setTimeout(() => new Promise((resolve) => resolve([])), 600);

    const results = [
      { label: "São Paulo", value: "São Paulo" },
      { label: "Rio de Janeiro", value: "Rio de Janeiro" },
      { label: "Belo Horizonte", value: "Belo Horizonte" },
    ].filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

    return results ?? [];
  };

  return (
    <Stack
      component="form"
      direction={{ xs: "column", md: "row" }}
      onSubmit={handleSubmit(handleSubmitSearch)}
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
      <Controller
        control={control}
        name="query"
        render={({ field }) => {
          return (
            <AsyncAutocompleteField
              onValueChange={field.onChange}
              handleFetch={handleFetchSpecialties}
              placeholder="Especialidade, médico ou exame"
              startAdornment={
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              }
            />
          );
        }}
      />

      <Controller
        control={control}
        name="locale"
        render={({ field }) => {
          return (
            <AsyncAutocompleteField
              onValueChange={field.onChange}
              handleFetch={handleFetchLocales}
              placeholder="Cidade ou região"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOnOutlined color="primary" />
                </InputAdornment>
              }
            />
          );
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          minWidth: { md: "120px" },
          height: { xs: "56px", md: "auto" },
        }}
      >
        Pesquisar
      </Button>
    </Stack>
  );
};
