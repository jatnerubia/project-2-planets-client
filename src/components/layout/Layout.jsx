import FooterSection from "../FooterSection"
import { Link, Outlet } from "react-router-dom"
import AnimatedStar from "../home/AnimatedStar_bg"

const Layout = () => {
    return (
        <>

            {/* TODO: Add navbar component here */}

            {/* This link is for route testing only */}
            <AnimatedStar/>
            {/* <Link to="/">
                <button className="btn btn-light">Home</button>
            </Link>
            <Link to="/planets">
                <button className="btn btn-light">Planets</button>
            </Link>
            <Link to="/about">
                <button className="btn btn-light">About</button>
            </Link> */}
            
            <main>
                <Outlet />
            </main>

            <FooterSection/>

        </>
    )
}

export default Layout