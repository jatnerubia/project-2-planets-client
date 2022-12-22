import RedirectButton from "../RedirectButton";

const PlanetCard = ({ planet }) => {
  const imageCall = {
    backgroundImage: `url('${planet.images[0].url}')`
  }
  return (
    <>
    <div className="planet_card col-lg-4 col-md-6 py-4 my-5">
      <div className="card position-relative bg-white mb-4">
        <div className="card__planet">
          <div className="planet__atmosphere">
            <div className="planet__surface" style={imageCall}></div>
          </div>
        </div>
        <div className="card-body text-center text-dark position-absolute w-100">
          <div className="planet_details">
            <h2 className="pt-2 pb-4 mb-0">{planet.name}</h2>
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-end mb-2">
                <label>Tilt</label>
                <span className="dashed-line"></span>
                <span>0.034°</span>
              </div>
              <div className="d-flex align-items-end mb-2">
                <label>Day</label>
                <span className="dashed-line"></span>
                <span>24.6 Hours</span>
              </div>
              <div className="d-flex align-items-end mb-2">
                <label>Year</label>
                <span className="dashed-line"></span>
                <span>687 Days</span>
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
