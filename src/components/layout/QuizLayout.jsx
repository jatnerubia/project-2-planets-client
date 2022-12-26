import { Outlet } from "react-router-dom"

const QuizLayout = () => {
    return (
      <>
        {/* TODO: Quiz Navbar */}

        <main>
          <div className="quiz d-flex justify-content-center align-items-center p-3 px-md-5">
            <div className="container position-relative">
              <Outlet />
            </div>
          </div>
        </main>
      </>
    )
}

export default QuizLayout
