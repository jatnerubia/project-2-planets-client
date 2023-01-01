import HeroSection from "../../components/quiz/home/HeroSection"
import QuizLeaderboard from "../../components/quiz/home/LeaderboardSection"
import NavbarQuiz from "../../components/quiz/NavbarQuiz"

const QuizPage = () => {
    return (
        <>
          <NavbarQuiz />
          <HeroSection />
          <QuizLeaderboard />
        </>
    )
}

export default QuizPage
