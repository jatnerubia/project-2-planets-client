import { Outlet } from "react-router-dom"
import FooterSection from "../FooterSection"

const QuizLayout = () => {
    return (
        <>
            {/* TODO: Quiz Navbar */}

            <main>
                <Outlet />
            </main>

            <FooterSection />
        </>
    )
}

export default QuizLayout