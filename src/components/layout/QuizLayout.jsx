import { Outlet } from "react-router-dom"

const QuizLayout = () => {
    return (
      <>
        {/* TODO: Quiz Navbar */}

        <main>
          <div className="quiz">
              <Outlet />
          </div>
        </main>
      </>
    )
}

export default QuizLayout
