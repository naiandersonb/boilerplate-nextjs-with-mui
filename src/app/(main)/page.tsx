import { Hero } from "@/components/homepage/Hero";
import { HowToSchedule } from "@/components/homepage/HowToSchedule";
import { MarqueeList } from "@/components/homepage/MarqueeList";
import { SuggestionsForSpecialties } from "@/components/homepage/SuggestionsForSpecialties";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <Hero />
      <MarqueeList />
      <SuggestionsForSpecialties />
      <HowToSchedule />
    </Stack>
  );
}
