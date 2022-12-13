
import { Link } from "react-router-dom";

const PlanetsPage = () => {
    return (
        <div>
            {/* Navbar */}
            <Link to="/">
                <button className="btn btn-light">Home</button>
            </Link>
            <Link to="/planets">
                <button className="btn btn-light">Planets</button>
            </Link>
            <Link to="/about">
                <button className="btn btn-light">About</button>
            </Link>

            {/* Hero Section */}
            {/* Planet Details Section */}
            
        </div>
    )
}

export default PlanetsPage