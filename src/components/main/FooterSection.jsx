import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const FooterSection = () => {
  return (
    <footer>
      <nav className="navbar-dark">
        <div className="container py-4">
          <div className="row gy-3">
            {/* Left */}
            <div className="col-sm-4 footer-logo">
              {/* Logo */}
              <div className="pb-2">
                <NavLink className="navbar-brand" to="/">
                  <img src={require('../../assets/img/logo1.png')}
                    width="150"
                    height="150"
                    className="d-inline-block align-text-top"
                    alt="Logo"
                  />
                </NavLink>
              </div>
              {/* Copyright */}
              <p className="text-muted fs-small">
                Copyright © 2022<br/>
                All Rights Reserved
              </p>
            </div>
            {/* Right */}
            <div className="col-sm-8">
              <div className="row gy-3">
                {/* About */}
                <div className="col-md-4 col-6">
                  <h6>About</h6>
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
                <div className="col-md-4 col-6">
                  <h6>Company</h6>
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
                <div className="col-md-4 col-12">
                  <h6>Social</h6>
                  <div>
                    <FontAwesomeIcon className="m-1 fs-4" icon={brands('facebook')} />
                    <FontAwesomeIcon className="m-1 fs-4" icon={brands('linkedin')} />
                    <FontAwesomeIcon className="m-1 fs-4" icon={brands('twitter')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rights bg-light">
          <p className="px-1 py-3 text-center text-muted">
            Copyright © 2022 | All Rights Reserved
          </p>
        </div>
      </nav>
    </footer>
  );
};
export default FooterSection;
