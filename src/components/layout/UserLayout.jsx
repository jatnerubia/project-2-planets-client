
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import decode from 'jwt-decode'
import Sidebar from "../user/Sidebar"
import Topbar from '../user/TopBar'

const UserLayout = () => {

  const navigate = useNavigate()

  const [toggle, setToggle] = useState(false)

  const [userData, setUserData] = useState({
    avatar: '',
    firstName: '',
    lastName: ''
  })

  let activeCheck = toggle ? 'active' : '';

  const handleClick = () => {
    setToggle(!toggle);
  }

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
    setUserData({
      ...userData,
      avatar: localStorage.getItem('avatar') !== null ? localStorage.getItem('avatar') : '',
      firstName: localStorage.getItem('firstName') !== null ? localStorage.getItem('firstName') : '',
      lastName: localStorage.getItem('lastName') !== null ? localStorage.getItem('lastName') : '',
      email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : '',
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="user_section">
      <div className="section_wrapper position-relative w-100">
        <Sidebar className={activeCheck} activeCheck={activeCheck} userData={userData} />
        <main className={`position-absolute p-0 ${activeCheck}`}>
          <Topbar handleClick={handleClick}/>
          <div className='p-4 pt-5'>
            <Outlet context={[userData, setUserData]} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default UserLayout
