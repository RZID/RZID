import { HeroSection } from "~/components/HeroSection";
import { PageTransition } from "~/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
    </PageTransition>
  );
}
