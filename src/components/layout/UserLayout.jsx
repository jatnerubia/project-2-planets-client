import { Outlet } from "react-router-dom"

const UserLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    {/* TODO: Sidebar */}
                    Sidebar here
                </div>
                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserLayout