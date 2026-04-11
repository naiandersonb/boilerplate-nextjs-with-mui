import { Stack } from "@mui/material";
import { SearchForm } from "../SearchForm";

export const Hero = () => {
  return (
    <Stack
      justifyContent="center"
      sx={{
        minHeight: "90vh",
        width: "100%",
        position: "relative",
        padding: "48px",
        backgroundImage: "url(assets/hero-image.png)",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        // backgroundSize: { xs: "contain", md: "contain", lg: "cover" },
        backgroundSize: "cover",
      }}
    >
      <SearchForm />
    </Stack>
  );
};
