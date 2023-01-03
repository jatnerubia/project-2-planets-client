// import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";



const PlanetDetails = ({planet}) => {
// const anchors = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
return (
  <>
    <div className="section vh-100"><h3>{planet.name}</h3></div>
  </>
  // <ReactFullpage
  //   anchors={anchors}
  //   navigation
  //   navigationTooltips={anchors}
  //   navigat
  //   sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
  //   onLeave={(origin, destination, direction) => {
  //     console.log("onLeave event", { origin, destination, direction });
  //   }}
  //   render={({ state, fullpageApi }) => {
  //     console.log("render prop change", state, fullpageApi);

  //     return (
  //       <div>
  //         <div className="section vh-100"><h3>{planet.name}</h3></div>
  //         {/* <div className="section vh-100"><h3>{planet.name}</h3></div> */}
  //       </div>
  //     );
  //   }}
  // />
)
  // return (
  //   <div className="vh-100 col-md-12">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <h2>{planet.name}</h2>
  //         <p>{planet.description}</p>
  //         <h3>Image description</h3>
  //         <p>{planet.images[0].description}</p>
  //       </div>
  //       <div className="col-md-6">
  //         <div className="row">
  //           <div className="col-md-6">
  //             <h3>MASS</h3>
  //             <p>{planet.mass}</p>
  //           </div>
  //           <div className="col-md-6">
  //             <h3>VOLUME</h3>
  //             <p>{planet.volume}</p>
  //           </div>
  //           <div className="col-md-6">
  //             <h3>PLANET ORDER</h3>
  //             <p>{planet.planetOrder}</p>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <img
  //             className="img-fluid"
  //             src={planet.images[0].url}
  //             alt={planet.name}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  };

export default PlanetDetails;
