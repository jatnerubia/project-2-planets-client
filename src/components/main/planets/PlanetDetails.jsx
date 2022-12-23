const PlanetDetails = ({ planet }) => {
  return (
    <div className="vh-100 col-md-12">
      <div className="row">
        <div className="col-md-6">
          <h2>{planet.name}</h2>
          <p>{planet.description}</p>
          <h3>Image description</h3>
          <p>{planet.images[0].description}</p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h3>MASS</h3>
              <p>{planet.mass}</p>
            </div>
            <div className="col-md-6">
              <h3>VOLUME</h3>
              <p>{planet.volume}</p>
            </div>
            <div className="col-md-6">
              <h3>PLANET ORDER</h3>
              <p>{planet.planetOrder}</p>
            </div>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={planet.images[0].url}
              alt={planet.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
