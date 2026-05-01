import { DoctorCard } from "@/components/search/DoctorCard";
import { Container, Stack } from "@mui/material";

export default function Search() {
  return (
    <Stack sx={{ backgroundColor: "grey.50", minHeight: "100vh", pt: "85px" }}>
      <Container>
        <DoctorCard />
      </Container>
    </Stack>
  );
}
