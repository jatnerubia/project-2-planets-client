import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useLocation} from "react-router-dom"
import { useEffect, useState } from 'react';

const Topbar = ({ handleClick }) => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState()

  useEffect(() => {
    if (location.pathname === '/user/dashboard') {
      setCurrentLocation('DASHBOARD')
    }
    if (location.pathname === '/user/leaderboard') {
      setCurrentLocation('LEADERBOARD')
    }
    if (location.pathname === '/user/quiz') {
      setCurrentLocation('SPACE QUIZ')
    }
    if (location.pathname === '/user/settings') {
      setCurrentLocation('CHANGE PASSWORD')
    }
    if (location.pathname === '/user/profile') {
      setCurrentLocation('PROFILE')
    }
  }, [location])
  return (
    <>
      <div className='top-bar w-100 d-flex align-items-center border-bottom shadow bg-body rounded p-3 pt-4 pb-2'>
        <button className='btn-toggle border-0 btn btn-white p-0 lh-lg me-4' onClick={handleClick}>
          <FontAwesomeIcon className='fs-1' icon={solid('bars')} />
        </button>
        <h1 className='fw-bold fs-2 mb-0 lh-0'>{currentLocation}</h1>
      </div>
    </>
  );
};

export default Topbar;
