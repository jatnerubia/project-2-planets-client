import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {brands} from '@fortawesome/fontawesome-svg-core/import.macro' 



const FooterSection = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center">
          <Link to="/">
            <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" className=" w-50 img-fluid" alt="SpaceVerse" />
            <h5>SpaceVerse</h5>
          </Link>
         
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center">
          <ul className="list-unstyled mb-0 ">
            <li>
              <a href="#" className="text-white fw-bold display-7">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                FAQS
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Vision
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="text-white fw-bold display-7">
                Company
              </a>
            </li>

            <li>
              <a href="#" className="text-white ">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Legal Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="text-white fw-bold display-7">
                Social
              </a>
            </li>
            <li className="text-white">
                          <FontAwesomeIcon icon={brands('facebook')} />
                          <FontAwesomeIcon icon={brands('linkedin')} />
                          <FontAwesomeIcon icon={brands('twitter')} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
