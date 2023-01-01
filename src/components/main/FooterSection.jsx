import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'



const FooterSection = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center mb-3">
          <Link to="">
            <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" className=" w-50 img-fluid" alt="SpaceVerse" />
            <h5>SpaceVerse</h5>
          </Link>

        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center mb-3">
          <ul className="list-unstyled mb-0 ">


            <li>
              <Link to="/about" className="text-white fw-bold display-7">
                About Us
              </Link>

            </li>


            <li>
              <Link to="" className="text-white">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="" className="text-white">
                FAQS
              </Link>
            </li>

            <li>
              <Link to="" className="text-white">
                Mission
              </Link>
            </li>

            <li>
              <Link to="" className="text-white">
                Vision
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center mb-3">
          <ul className="list-unstyled mb-0">
            <li>
              <Link to="" className="text-white fw-bold display-7">
                Company
              </Link>
            </li>

            <li>
              <Link to="" className="text-white ">
                Careers
              </Link>
            </li>

            <li>
              <Link to="" className="text-white">
                Press
              </Link>
            </li>

            <li>
              <Link to="" className="text-white">
                Legal Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xxl-3 text-center mb-3">
          <ul className="list-unstyled mb-0">
            <li>
              <Link to="" className="text-white fw-bold display-7">
                Social
              </Link>
            </li>
            <li className="text-white">
              <FontAwesomeIcon className="m-1" icon={brands('facebook')} />
              <FontAwesomeIcon className="m-1" icon={brands('linkedin')} />
              <FontAwesomeIcon className="m-1" icon={brands('twitter')} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;