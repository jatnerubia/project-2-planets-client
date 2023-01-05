
import { Outlet } from "react-router-dom"
import { useLocation} from "react-router-dom"
import { useEffect } from 'react';

const QuizLayout = () => {

  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/planets') {
      return document.body.classList.remove('fp-scrollable')
    }
  }, [location])

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
