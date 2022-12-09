
import './PlanetCard.css'

const PlanetCard = () => {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="img-fluid" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard