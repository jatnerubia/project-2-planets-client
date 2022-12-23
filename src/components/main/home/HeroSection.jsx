import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

const HeroSection = ({ planet }) => {
  return (
    <header className="heroSection__header vh-100">
      <div className="heroSection__wrapper"></div>
      <div className="hero-content container text-center">
        <div className="row">
          <div className="col-lg-5 text-start">
            <h4>Travel to the outside world</h4>
            <h1 className="ff-merriweather">SpaceVerse</h1>
            <h4 className="mt-4 lh-base">
              Space is the boundless three-dimensional extent in which objects
              and events have relative position.
              {/* <FontAwesomeIcon icon={solid('arrow-down')} /> */}
            </h4>
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
      <button className='btn rounded-pill bg-transparent border border-2 border-white bottom-0 position-absolute mb-3 pt-4'>
        {/* <FontAwesomeIcon className='text-white' icon={solid('angles-down')} /> */}
      </button>
    </header>
  );
};

export default HeroSection;
