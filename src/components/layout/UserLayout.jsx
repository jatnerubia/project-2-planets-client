
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import decode from 'jwt-decode'
import Sidebar from "../user/Sidebar"
import Topbar from '../user/TopBar'

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
        console.log('Token expired, check if I can still send request')
        // localStorage.clear()
        // navigate('/quiz')
        return
      }
      // eslint-disable-next-line
  }, [])

  return (
    <div className="user_section">
      <div className="section_wrapper position-relative w-100">
        <Sidebar className={activeCheck} activeCheck={activeCheck} />
        <main className={`position-absolute p-0 ${activeCheck}`}>
          <Topbar handleClick={handleClick}/>
          <div className='p-4 pt-5'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
export default UserLayout
