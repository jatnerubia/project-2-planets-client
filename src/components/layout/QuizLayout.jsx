import { Outlet } from "react-router-dom"

const QuizLayout = () => {
  return (
    <>
      <main>
        <div className="quiz">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default QuizLayout
