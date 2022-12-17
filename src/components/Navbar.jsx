import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navabar-expand-lg pt-1 d-flex ">
            <div className="col-3 text-center ">
                <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" width="20%" />
                <h6 >SpaceVerse</h6>
            </div>
            <div className="col-md-4 navbar navabar-expand-lg d-flex justify-content-end">
                <NavLink to="/">
                    <button className="btn btn-light">Home</button>
                </NavLink>
                <NavLink to="/planets">
                    <button className="btn btn-light">Planets</button>
                </NavLink>
                <NavLink to="/about">
                    <button className="btn btn-light me-3">About</button>
                </NavLink>
            </div>

        </nav>
    )
}

export default Navbar