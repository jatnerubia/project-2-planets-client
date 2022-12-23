import PlanetDetailsSection from "../../components/main/planets/PlanetDetailsSection";
import PlanetHeroSection from "../../components/main/planets/PlanetHeroSection";

const PlanetsPage = () => {
  return (
    <>
      <h1 className="text-dark">PLANETS</h1>

{/* Gelai Testing Planet Hero Section  */}
      <PlanetHeroSection/>

      {/* Hero Section */}
      
      <PlanetDetailsSection />
    </>
  );
};

export default PlanetsPage;
