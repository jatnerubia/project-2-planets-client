import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'

const Sidebar = ({ activeCheck}) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    if (localStorage.getItem('first_name')) {
      setFirstName(localStorage.getItem('first_name'))
    }
    if (localStorage.getItem('last_name')) {
      setLastName(localStorage.getItem('last_name'))
    }
  }, [])

  const logout = () => {
    localStorage.clear()
  }

  return (
      <div className={`sidebar ${activeCheck}`}>
        <ul>
          <li className='mb-5 ps-0 ms-0 pe-none d-flex align-items-center'>
            <span className="sidebar-logo me-4">
              <img src={require('../../assets/img/sidebar-logo.png')} width={60} height={60} alt="" />
            </span>
            <span className='sidebar-title'>
              SpaceVerse
            </span>
          </li>
          <NavLink to="/user/dashboard">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('grip')} />
              </span>
              <span className='sidebar-title'>
                Dashboard
              </span>
            </li>
          </NavLink>
          <NavLink to="/user/leaderboard">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('chart-simple')} />
              </span>
              <span className='sidebar-title'>
                Leaderboard
              </span>
            </li>
          </NavLink>
          <NavLink to="/user/quiz">
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('user-pen')} />
              </span>
              <span className='sidebar-title'>
                Quiz
              </span>
            </li>
          </NavLink>
          <div>
            <button className="w-100 px-3 settings-collapse btn btn-transparent text-white d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#settingsCollapse" aria-expanded="false" aria-controls="settingsCollapse">
              <span className='d-flex align-items-center ms-1'>
                <FontAwesomeIcon className='me-4 fs-5' icon={solid('gear')} />
                <span className='sidebar-title'>
                  Settings
                </span>
              </span>
              <FontAwesomeIcon className='icon fs-5' icon={solid('chevron-right')} />
            </button>
            <div className="collapse" id="settingsCollapse">
              <NavLink to="/user/settings">
                <li className='rounded-pill rounded-end my-2 d-flex align-items-center'>
                  <span className="sidebar-icon">
                    <FontAwesomeIcon className='me-4' icon={solid('key')} />
                  </span>
                  <span className='sidebar-title fs-6'>
                    Change Password
                  </span>
                </li>
              </NavLink>
            </div>
          </div>
          <NavLink to="/quiz" onClick={logout}>
            <li className='rounded-pill rounded-end my-2'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('right-from-bracket')} />
              </span>
              <span className='sidebar-title'>
                Logout
              </span>
            </li>
          </NavLink>
          <NavLink to="/user/profile">
            <li className='profile rounded-pill rounded-end position-absolute bottom-0 mb-3'>
              <span className="sidebar-icon">
                <FontAwesomeIcon className='me-4' icon={solid('circle-user')} />
              </span>
              <span className='sidebar-title'>
                {firstName} {lastName}
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
  )
}

export default Sidebar
