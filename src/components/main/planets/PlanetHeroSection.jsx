
const PlanetHeroSection = () => {
  return (
    <header className="planet-Section__header vh-100">
      <span className="overlay_bg w-100 h-100"></span>
      <img src={require('../../../assets/img/astronaut.png')} alt="Floating Astronaut" />
      <div className="hero-content container text-center">
        <div className="row">
          <div className="col-12">
            <h1 className="hero-title ff-merriweather">PLANETS</h1>
            <h5 className="hero-subheading lh-base"> of the Solar System </h5>
          </div>
        </div>
      </div>
    </header>
  )
}
export default PlanetHeroSection
