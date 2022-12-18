import PlanetDetailsSection from "../components/planets/PlanetDetailsSection";
import PlanetHeroSection from "../components/planets/PlanetHeroSection";

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
