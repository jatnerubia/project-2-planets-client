import { Link } from "react-router-dom";
import AnimatedStar from "../components/main/home/AnimatedStar";

const PageNotFound = () => {
  return (
    <div className="page404 position-relative">
    <AnimatedStar />
      <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
          <img src={require('../assets/img/404.png')} alt="" width={300} />
          <Link to="/" className="btn btn-main mt-5 py-3 px-5">
            GO BACK HOME
          </Link>
      </div>
      <div className="objects">
        <img src={require('../assets/img/rocket.png')} className="rocket position-absolute" width={80} alt="Rocket" />
        <div className="earth-moon">
          <img src={require('../assets/img/earth.png')} className="earth position-absolute" width={100} alt="Earth" />
          <img src={require('../assets/img/moon.png')} className="moon position-absolute" width={90} alt="Moon" />
        </div>
        <div className="astronaut_wrapper position-absolute">
          <img src={require('../assets/img/astronaut404.png')} className="astronaut" width={140} alt="Astronaut" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
