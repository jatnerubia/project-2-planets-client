
const PlanetHeroSection = () => {
  return (
    <header className="planet-Section__header vh-100">
      <span className="overlay_bg w-100 h-100"></span>
      <img src={require('../../../assets/img/astronaut.png')} className="d-none d-lg-block" alt="Floating Astronaut" />
      <div className="hero-content container text-center">
        <div className="row">
          <div className="col-12 text-start">
            <h1 className="ff-merriweather">PLANETS</h1>
            <h4 className="lh-base"> of the Solar System </h4>
          </div>
        </div>
      </div>
    </header>
  )
}
export default PlanetHeroSection
