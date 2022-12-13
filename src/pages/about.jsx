
import { Link } from "react-router-dom";

const AboutPage = () => {
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

            {/* Teams Section */}
            {/* Footer */}

        </div>
    )
}

export default AboutPage