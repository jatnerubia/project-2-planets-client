import { useEffect, useState } from "react";
import RedirectButton from "../RedirectButton";
import PlanetCard from "./PlanetCard";
import SectionHeading from "../SectionHeading";

const PlanetSection = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async () => {
    try {
      const result = await fetch(
        "https://project-2-planets-server.onrender.com/planets"
      );
      let response = await result.json();
      response = response.slice(0, 6);
      setPlanets(response);
    } catch (error) {}
  };

  return (
    <div className="container py-5">
      <SectionHeading name="The Planets" />
      <div className="row py-5">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
      <div className="text-center pt-5">
        <RedirectButton name="Explore More" to="/planets" />
      </div>
    </div>
  );
};

export default PlanetSection;
