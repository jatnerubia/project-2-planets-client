import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const HeroSection = () => {

  return (
    <header className="heroSection__header vh-100">
      <div className="heroSection__wrapper"></div>
      <div className="hero-content container text-center">
        <div className="row">
          <div data-aos="fade-right" data-aos-duration="1500" className="col-lg-5 col-md-7 text-start">
            <h4 className='hero-subheading-1'>Travel to the outside world</h4>
            <h1 className="hero-title ff-merriweather">SpaceVerse</h1>
            <h4 className="hero-subheading-1 mt-4 lh-base">
              Space is the boundless three-dimensional extent in which objects
              and events have relative position.
            </h4>
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
      <a href="#planets" className='btn rounded-pill bg-transparent border border-2 border-white bottom-0 position-absolute mb-3 pt-4'>
        <FontAwesomeIcon className='text-white icon' icon={solid('angles-down')} />
      </a>
    </header>
  );
};

export default HeroSection;
