
import { Outlet } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from 'react';

const QuizLayout = () => {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/user/dashboard')
    }
    // eslint-disable-next-line
  }, [])

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
