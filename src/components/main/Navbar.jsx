import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navabar-expand-lg pt-1 d-flex ">
            <div className="col-md-3 mx-5 d-flex justify-text-center">
                <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" width="30%" />
                <h4 className="pt-3 mx-3">SpaceVerse</h4>
            </div>
            <div className="col-md-3 navbar navabar-expand-lg d-flex justify-text-center">
                <NavLink to="/">
                    <button className="btn btn-none text-white ">Home</button>
                </NavLink>
                <NavLink to="/planets">
                    <button className="btn btn-none text-white">Planets</button>
                </NavLink>
                <NavLink to="/about">
                    <button className="btn btn-none text-white">About</button>
                </NavLink>
            </div>

            <div className="border-4 me-5">
                <button className="col-md-9 p-1 btn btn-light me-5">Quiz Game</button>
            </div>

        </nav>
    )
}

export default Navbar
