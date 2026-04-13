"use client";

import { Stack } from "@mui/material";
import { SearchForm } from "../SearchForm";
import { useDevice } from "@/hooks/use-device";
import Image from "next/image";

export const Hero = () => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <Stack>
        <Image
          src="/assets/hero-image-mobile.png"
          width={430}
          height={330}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
          priority
        />

        <Stack
          sx={{ padding: 2, marginTop: "-30%" }}
          alignItems="center"
          justifyContent="center"
        >
          <SearchForm />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      justifyContent="center"
      sx={{
        minHeight: "85vh",
        width: "100%",
        position: "relative",
        padding: { xs: "16px", md: "16px", lg: "48px" },
        backgroundImage: "url(/assets/hero-image.png)",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        sx={{ maxWidth: 1440, marginX: "auto", width: "100%" }}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <SearchForm />
      </Stack>
    </Stack>
  );
};
