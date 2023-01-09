import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="position-absolute p-0 w-100 navbar navbar-expand-lg navbar-dark">
            <div className="container">
              {/* Logo */}
              <NavLink className="navbar-brand" to="/">
                <img src={require('../../assets/img/logo1.png')}
                    width="70"
                    height="70"
                    className="d-inline-block align-text-top"
                    alt="Logo" />
              </NavLink>
              <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="col-4 collapse navbar-collapse justify-content-between px-md-4" id="navbar">
                <ul className="navbar-nav m-auto">
                      <li className="nav-item px-2 my-2">
                          <NavLink to="" className="nav-link">
                              Home
                          </NavLink>
                      </li>
                      <li className="nav-item px-2 my-2">
                          <NavLink to="/planets" className="nav-link">
                              Planets
                          </NavLink>
                      </li>
                      <li className="nav-item px-2 my-2">
                          <NavLink to="/about" className="nav-link">
                              About
                          </NavLink>
                      </li>
                  </ul>
                  <div>
                    <NavLink to="/quiz" className="btn btn-light py-2 px-4 custom-button">Quiz Game</NavLink>
                  </div>
              </div>
            </div>
        </nav>
    )
}

export default Navbar
