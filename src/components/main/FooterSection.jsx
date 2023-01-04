import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const FooterSection = () => {
  return (
    <footer>
      <nav className="navbar-dark">
        <div className="container py-5">
          <div className="row gy-3">
            {/* Left */}
            <div className="col-md-4">
              {/* Logo */}
              <div className="pb-2">
                <NavLink className="navbar-brand" to="/">
                  <img src={require('../../assets/img/logo1.png')}
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                    alt="Logo"
                  />
                </NavLink>
              </div>
              {/* Copyright */}
              <p className="pb-2 text-muted">
                Copyright © 2022<br/>
                All Rights Reserved
              </p>
            </div>
            {/* Right */}
            <div className="col-md-8">
              <div className="row gy-3">
                {/* About */}
                <div className="col-md-4">
                  <h5>About</h5>
                  <ul className="navbar-nav flex-column">
                    <li className="nav-item">
                      <NavLink className="nav-link">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link">FAQs</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link">Mission</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link">Vision</NavLink>
                    </li>
                  </ul>
                </div>
                {/* Company */}
                <div className="col-md-4">
                  <h5>Company</h5>
                  <ul className="navbar-nav flex-column">
                    <li className="nav-item">
                      <NavLink className="nav-link">Careers</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link">Press</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link">Terms</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link">Policy</NavLink>
                    </li>
                  </ul>
                </div>
                {/* Social */}
                <div className="col-md-4">
                  <h5>Social</h5>
                  <div>
                    <FontAwesomeIcon className="m-1" icon={brands('facebook')} />
                    <FontAwesomeIcon className="m-1" icon={brands('linkedin')} />
                    <FontAwesomeIcon className="m-1" icon={brands('twitter')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
export default FooterSection;
