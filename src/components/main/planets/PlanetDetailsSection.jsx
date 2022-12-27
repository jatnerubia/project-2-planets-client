import { useEffect, useState } from "react";
import PlanetDetails from "./PlanetDetails";
import * as RestApi from "../../../utils/rest_api_util"

const PlanetDetailsSection = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async () => {
    try {
      const result = await RestApi.getPlanets()
      let response = await result.json();
      setPlanets(response);
    } catch (error) {}
  };

  return (
    <div className="container">
      <div className="row">
        {planets.map((planet, index) => (
          <PlanetDetails key={index} planet={planet} />
        ))}
      </div>
    </div>
  );
};

export default PlanetDetailsSection;
