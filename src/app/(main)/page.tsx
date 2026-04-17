import { Hero } from "@/components/homepage/Hero";
import { HowToSchedule } from "@/components/homepage/HowToSchedule";
import { MarqueeList } from "@/components/homepage/MarqueeList";
import { PatientOnboardingHero } from "@/components/homepage/PatientOnboardingHero";
import { ProfessionalOnboarding } from "@/components/homepage/ProfessionalOnboarding";
import { SuggestionsForSpecialties } from "@/components/homepage/SuggestionsForSpecialties";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeList />
      <SuggestionsForSpecialties />
      <HowToSchedule />
      <PatientOnboardingHero />
      <ProfessionalOnboarding />
    </>
  );
}
