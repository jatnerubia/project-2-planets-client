import { NavLink } from "react-router-dom"
import {  useState } from "react"


const NavbarQuiz = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  let activeCheck = toggle ? 'active' : '';

  return (
    <nav className="px-4 container-fluid navbar position-absolute w-100 navbar-expand-md d-flex justify-content-between align-items-center">
      <NavLink className="navbar-brand" to="/">
        <img src={require('../../assets/img/navbar_logo.png')} width="50" height="50" className="d-inline-block align-text-top" alt="Logo" />
      </NavLink>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"> */}
      <div className={`navbar-toggler toggle ${activeCheck}`}
          onClick={handleClick}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* </button> */}
      <div id="navbar" className="collapse navbar-collapse d-lg-flex justify-content-end">
        <span>
          <button className="btn btn-quiz btn-sm mx-2 px-5 py-2">
            Register
          </button>
          <button className="btn btn-quiz btn-sm mx-2 px-5 py-2">
            Login
          </button>
        </span>
      </div>
    </nav>
  )
}
export default NavbarQuiz
