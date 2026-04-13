import { Hero } from "@/components/homepage/Hero";
import { MarqueeList } from "@/components/homepage/MarqueeList";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <Hero />
      <MarqueeList />
    </Stack>
  );
}
