import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="position-absolute w-100 px-4 navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
            {/* Logo */}
            <NavLink className="navbar-brand" to="/">
                <img src={require('../../assets/img/logo1.png')}
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                    alt="Logo" />
            </NavLink>

            {/* Toggle button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse d-lg-flex justify-content-between">
                <ul className="navbar-nav">
                    <li className="nav-item px-2">
                        <NavLink to="" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item px-2">
                        <NavLink to="/planets" className="nav-link">
                            Planets
                        </NavLink>
                    </li>
                    <li className="nav-item px-2">
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <NavLink to="/quiz" className="btn btn-light py-2 px-4 custom-button">Quiz Game</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
