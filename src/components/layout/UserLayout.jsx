import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import decode from 'jwt-decode'

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