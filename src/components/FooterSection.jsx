import { Link } from "react-router-dom";
const FooterSection = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3 text-center">
        <Link to="/">
        <img src="https://i.ibb.co/jwRRDKm/IMG-20221215-224029.png" width="50%" alt="SpaceVerse"/>
        </Link>
        <h5>SpaceVerse</h5>
        </div>
        <div className="col-3">
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
        <div className="col-3 text-center">
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

        <div className="col-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#" class="text-white fw-bold display-7">
                Social
              </a>
            </li>
            <li>
              <i className="fa-brands fa-facebook m-2" />
              <i className="fa-brands fa-instagram m-2" />
              <i className="fa-brands fa-twitter m-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
