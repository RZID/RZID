// Components
import PageTransition from "~/components/PageTransition";
import HeroSection from "~/components/HeroSection";
import ExperienceSection from "~/components/ExperienceSection";
import SkillsSection from "~/components/SkillsSection";
import ContactSection from "~/components/ContactSection";

const Home = () => {
  return (
    <PageTransition>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </PageTransition>
  );
};

export default Home;
