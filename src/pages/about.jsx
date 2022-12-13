
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <h1 className="text-dark">
                ABOUT PAGE
            </h1>

            {/* Test router link */}
            
            <Link to="/">
                <button className="btn btn-light">Home</button>
            </Link>
            <Link to="/planets">
                <button className="btn btn-light">Planets</button>
            </Link>
            <Link to="/about">
                <button className="btn btn-light">About</button>
            </Link>
        </div>
    )
}

export default AboutPage