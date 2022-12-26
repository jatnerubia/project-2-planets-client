import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



const FooterSection = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 text-center">
          <Link to="/">
            <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" className=" w-50 img-fluid" alt="SpaceVerse" />
            <h5>SpaceVerse</h5>
          </Link>
         
        </div>
        <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 ">
          <ul class="list-unstyled mb-0 text-center">
            <li>
              <a href="#" class="text-white fw-bold display-7">
                About Us
              </a>
            </li>

            <li>
              <a href="#" class="text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" class="text-white">
                FAQS
              </a>
            </li>
            <li>
              <a href="#" class="text-white">
                Mission
              </a>
            </li>
            <li>
              <a href="#" class="text-white">
                Vision
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3  text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#" class="text-white fw-bold display-7">
                Company
              </a>
            </li>

            <li>
              <a href="#" class="text-white ">
                Careers
              </a>
            </li>
            <li>
              <a href="#" class="text-white">
                Press
              </a>
            </li>
            <li>
              <a href="#" class="text-white">
                Legal Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3  text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#" class="text-white fw-bold display-7">
                Social
              </a>
            </li>
            <li>
                          {/* <FontAwesomeIcon icon={solid('user-secret')} />
                          <FontAwesomeIcon icon={regular('coffee')} />
                          <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
                          <FontAwesomeIcon icon={brands('twitter')} /> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
