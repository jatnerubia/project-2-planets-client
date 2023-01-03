import { useEffect, useState } from "react";
import * as RestApi from "../../../utils/rest_api_util"
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PlanetDetails from "./PlanetDetails";
import PlanetHeroSection from "./PlanetHeroSection";

const PlanetDetailsSection = () => {
  const [planets, setPlanets] = useState([]);
  const anchors = ["Hero","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];


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
    <>
    {
      planets.length !== 0 && (
        <ReactFullpage
          anchors={anchors}
          navigation
          navigationTooltips={anchors}
          sectionsColor={["","#7fff00","#00ffff","#29ab87","#7fff00","#00ffff","#29ab87","#7fff00","#00ffff" ]}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div>
                <div className="section vh-100">
                  <PlanetHeroSection />
                </div>
                {
                  planets.map((planet, index) => (
                    <PlanetDetails key={index} planet={planet} />
                  ))
                }
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )
    }
    </>
  );
};

export default PlanetDetailsSection;
