import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import decode from 'jwt-decode'
import Sidebar from "../user/Sidebar"

const UserLayout = () => {

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
            <Sidebar />
            <main className="position-absolute">
              <Outlet />
            </main>
          </div>
        </div>
    )
}
export default UserLayout
