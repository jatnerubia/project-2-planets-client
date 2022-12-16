import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="position-absolute w-100">
            <NavLink to="/">
                <button className="btn btn-light">Home</button>
            </NavLink>
            <NavLink to="/planets">
                <button className="btn btn-light">Planets</button>
            </NavLink>
            <NavLink to="/about">
                <button className="btn btn-light">About</button>
            </NavLink>
        </nav>
    )
}

export default Navbar