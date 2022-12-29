import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import decode from 'jwt-decode'
import Sidebar from "../user/Sidebar"

const UserLayout = () => {

  // Toogle Sidebar
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  let activeCheck = toggle ? 'active' : '';
  // End Toogle Sidebar

  const navigate = useNavigate()

  useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) {
          navigate('/quiz')
          return
      }
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
          localStorage.clear()
          navigate('/quiz')
          return
      }
  }, [])

  return (
    <div className="user_section">
      <div className="section_wrapper position-relative w-100">
        {/* TODO: Sidebar */}
        <Sidebar className={activeCheck} activeCheck={activeCheck} />
        <main className={`position-absolute ${activeCheck}`}>
            <button className='btn-toggle border-0 btn btn-white p-0' onClick={handleClick}>
              <FontAwesomeIcon className='fs-1' icon={solid('bars')} />
            </button>

            <Outlet />
        </main>
      </div>
    </div>
  )
}
export default UserLayout
