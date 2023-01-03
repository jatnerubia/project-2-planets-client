import PlanetDetailsSection from "../../components/main/planets/PlanetDetailsSection";
import PlanetHeroSection from "../../components/main/planets/PlanetHeroSection";

const PlanetsPage = () => {
  return (
    <div className="planetSection">
      <PlanetHeroSection/>
      <PlanetDetailsSection />
    </div>
  );
};

export default PlanetsPage;
