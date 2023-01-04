const PlanetDetails = ({planet}) => {
  const planetStyles = {
    surface: {
      backgroundImage: `url('${planet.images[0].url}')`
    },
    atmosphere: {
      boxShadow: `inset 10px 0px 12px -2px rgba(255,255,255,.2),
                  inset -70px 0px 50px 0px black,
                  -5px 0px 10px -4px ${planet.color}`
    }
  }
return (
  <>
    <div className="section vh-100">
      <div className="planet-details__wrapper d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="image-wrapper d-flex justify-content-center align-items-center h-100">
              <div className="planet__atmosphere" style={planetStyles.atmosphere}>
                <div className="planet__surface" style={planetStyles.surface}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="content-wrapper">
              <h2 className="ff-merriweather mb-4">{planet.name}</h2>
              <h4 className="fs-detail">{planet.description}</h4>
              <hr className="my-4" />
              <div className="row">
                <div className="col-6">
                  <div>
                    <p className="fs-small fw-bold mb-2">TILT</p>
                    <p className="fs-small text-muted">{planet.tilt}</p>
                  </div>
                  <div>
                    <p className="fs-small fw-bold mb-2">DAY</p>
                    <p className="fs-small text-muted">{planet.day} Hours</p>
                  </div>
                  <div>
                    <p className="fs-small fw-bold mb-2">YEAR</p>
                    <p className="fs-small text-muted">{planet.year} Days</p>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <p className="fs-small fw-bold mb-2">PLANET ORDER</p>
                    <p className="fs-small text-muted">{planet.planetOrder}</p>
                  </div>
                  <div>
                    <p className="fs-small fw-bold mb-2">MASS</p>
                    <p className="fs-small text-muted">{planet.mass}</p>
                  </div>
                  <div>
                    <p className="fs-small fw-bold mb-2">VOLUME</p>
                    <p className="fs-small text-muted">{planet.volume}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
  };

export default PlanetDetails;
