const HeroSection = ({ planet }) => {
    return (
        <header className="vh-100 heroSection__header">
                {/* Navbar */}
                <img src={require("../../assets/img/heroSectionSideImg.png")} alt="" />
                <div className="hero-content container text-center">
                    <h4>Travel to the outside world</h4>
                    <h1>SPACE</h1>
                </div>
        </header>
    )
}

export default HeroSection