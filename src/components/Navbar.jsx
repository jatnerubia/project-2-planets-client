import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navabar-expand-lg pt-1 d-flex ">
            <div className="col-3 text-center ">
                <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" width="30%" />
            </div>
            <div className="col-m-5">
                <div className="row">
                    <h4>SpaceVerse</h4>
                </div>

            </div>
            <div className="col-md-4 navbar navabar-expand-lg d-flex justify-text-center">
                <NavLink to="/">
                    <button className="btn btn-none text-white ">Home</button>
                </NavLink>
                <NavLink to="/planets">
                    <button className="btn btn-none text-white">Planets</button>
                </NavLink>
                <NavLink to="/about">
                    <button className="btn btn-none text-white me-5">About</button>
                </NavLink>
            </div>

            <div>
                <button className="col-md-12 btn btn-light me-3 border redius-8">Quiz Game</button>
            </div>

        </nav>
    )
}

export default Navbar