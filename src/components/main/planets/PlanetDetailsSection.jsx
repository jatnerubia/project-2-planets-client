import { useEffect, useState } from "react";
import * as RestApi from "../../../utils/rest_api_util"
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PlanetDetails from "./PlanetDetails";

const PlanetDetailsSection = () => {
  const [planets, setPlanets] = useState([]);
  const anchors = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];


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
    {/* {planets.map((planet, index) => ( */}
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#7fff00","#00ffff","#29ab87","#7fff00","#00ffff","#29ab87","#7fff00","#00ffff" ]}
        render = {
          planets.map((planet, index) => (
            <PlanetDetails planet={planet} />
          ))
        }
        // render={() => {

        //   return (
        //     <div>
        //       {
        //         planets.map((planet, index) => (
        //           <PlanetDetails planet={planet} />
        //         ))
        //       }
        //     </div>
        //   );
        // }}
      />
      {/* ))} */}

      </>
    // <div className="planet-Section__content">
    //   {planets.map((planet, index) => (
    //     <PlanetDetails key={index} planet={planet} />
    //   ))}
    // </div>
    // <div className="container">
    //   <div className="row">
    //     {planets.map((planet, index) => (
    //       <PlanetDetails key={index} planet={planet} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default PlanetDetailsSection;
