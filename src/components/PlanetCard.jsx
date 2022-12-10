
const PlanetCard = () => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="img-fluid" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    </div>
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                        <h5>John Doe</h5>
                        <p>Architect & Engineer</p>
                        <button type="button">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard