import { NavLink } from "react-router-dom"

const QuizHeroSection = () => {
  return (
    <div>
      <header className="heroSection__header vh-100">
        <span class="overlay_bg w-100 h-100"></span>
        <div className="hero-content container text-center">
          <h2 className="hero-title ff-merriweather mb-5">Do you fully know <br /> the universe?</h2>
          <NavLink to="/quiz/login">
            <button className="btn btn-lg btn-transparent text-white rounded-4 border border-white">
              Take The Quiz
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  )
}
export default QuizHeroSection
