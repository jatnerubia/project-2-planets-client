
const PlanetCard = ({ planet }) => {
    return (
        <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-2">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="img-fluid" src={planet.images[0].url} alt={planet.name} />
                    </div>
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-2">
                        <h5>{planet.name}</h5>
                        <p>{planet.images[0].description}</p>
                        <button type="button">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard