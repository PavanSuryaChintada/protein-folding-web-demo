import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ApproachCards } from "@/components/ApproachCards";
import { SimulatorSection } from "@/components/SimulatorSection";
import { CompetitiveEdgeModal } from "@/components/CompetitiveEdgeModal";
import { WhyGlycineSection } from "@/components/WhyGlycineSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSection />
      <ApproachCards />
      <SimulatorSection />
      
      {/* Competitive Edge Section */}
      <section className="container mx-auto px-6 py-12 flex justify-center">
        <CompetitiveEdgeModal />
      </section>

      <WhyGlycineSection />

      <TeamSection />

      <Footer />
    </main>
  );
};

export default Index;
