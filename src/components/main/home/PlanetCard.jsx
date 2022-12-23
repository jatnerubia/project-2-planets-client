import RedirectButton from "../../RedirectButton";

const PlanetCard = ({ planet }) => {
  const planetStyles = {
    surface: {
      backgroundImage: `url('${planet.images[0].url}')`,
      animation: `planetRotate calc(${planet.day}*.1s) linear infinite`,
      transform: `rotate(${planet.tilt}) scale(1.15)`
    },
    atmosphere: {
      boxShadow: `inset 10px 0px 12px -2px rgba(255,255,255,.2),
                  inset -70px 0px 50px 0px black,
                  -5px 0px 10px -4px ${planet.color}`
    },
    tiltLine: {
      transform: `rotate(${planet.tilt}) scale(1.2)`,
      borderLeft: `1px dashed ${planet.color}`
    }
  }
  return (
    <>
    <div className="planet_card col-lg-4 col-md-6 py-4 my-5">
      <div className="card position-relative mb-4 mx-2">
        <div className="card__planet">
          <span className="tiltLine" style={planetStyles.tiltLine}></span>
          <div className="planet__atmosphere" style={planetStyles.atmosphere}>
            <div className="planet__surface" style={planetStyles.surface}></div>
          </div>
        </div>
        <div className="card-body text-center text-white position-absolute w-100">
          <div className="planet_details">
            <h3 className="pt-2 pb-4 mb-0">{planet.name}</h3>
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-end mb-2">
                <label>Tilt</label>
                <span className="dashed-line"></span>
                <span>{planet.tilt}</span>
              </div>
              <div className="d-flex align-items-end mb-2">
                <label>Day</label>
                <span className="dashed-line"></span>
                <span>{planet.day} Hours</span>
              </div>
              <div className="d-flex align-items-end mb-2">
                <label>Year</label>
                <span className="dashed-line"></span>
                <span>{planet.year} Days</span>
              </div>
            </div>
            <RedirectButton name="View More" to="/planets" />
          </div>
        </div>
      </div>
    </div>
    </>
    // <div classNameName="col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-2">
    //   <div classNameName="flip-card">
    //     <div classNameName="flip-card-inner">
    //       <div classNameName="flip-card-front">
    //         <img
    //           classNameName="img-fluid"
    //           src={planet.images[0].url}
    //           alt={planet.name}
    //         />
    //       </div>
    //       <div classNameName="flip-card-back d-flex flex-column justify-content-center align-items-center p-2">
    //         <h5>{planet.name}</h5>
    //         <p>{planet.images[0].description}</p>
    //         <RedirectButton name="View More" to="/planets" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PlanetCard;
