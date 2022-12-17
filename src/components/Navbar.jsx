import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navabar-expand-lg pt-1 d-flex ">
            <div className="col-3 text-center ">
                <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" width="30%" />  
            </div>
            <div className="">
                <h6>SpaceVerse</h6>
            </div>
            <div className="col-md-4 navbar navabar-expand-lg d-flex justify-content-between">
                <NavLink to="/">
                    <button className="btn btn-light">Home</button>
                </NavLink>
                <NavLink to="/planets">
                    <button className="btn btn-light">Planets</button>
                </NavLink>
                <NavLink to="/about">
                    <button className="btn btn-light">About</button>
                </NavLink>
            </div>

            <div>
               <button className="col-md-12 btn btn-light me-3 border redius-8">Quiz Game</button>
            </div>

        </nav>
    )
}

export default Navbar