
import { Link } from "react-router-dom";
import PlanetSection from "../components/home/PlanetSection";

const HomePage = () => {
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
            <PlanetSection />

            {/* News Section */}
            {/* Feedback Section */}
            {/* Footer */}
            
        </div>
    )
}

export default HomePage