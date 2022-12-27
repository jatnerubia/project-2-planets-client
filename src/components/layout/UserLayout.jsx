import { Outlet } from "react-router-dom"
import SideBar from "../user/sidebar"

const UserLayout = () => {
    return (
        <div className="user_section">
          <div className="section_wrapper position-relative w-100">
                {/* TODO: Sidebar */}
                <SideBar />
                <Outlet />
          </div>
        </div>
    )
}

export default UserLayout
