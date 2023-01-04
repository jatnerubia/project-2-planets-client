import SectionHeading from "../SectionHeading"
import Teamcard from "./TeamCard"

const TeamSection = () => {
    return (
        <div className="py-5">
            <SectionHeading name="MEET THE TEAM" />
            <div className="container pt-5">
                <div className="row gy-5">
                    <Teamcard firstName="Alan" lastName="Demol" />
                    <Teamcard firstName="Angela" lastName="Morales" />
                    <Teamcard firstName="Jason" lastName="Lerit" />
                    <Teamcard firstName="Jomar" lastName="Clado" />
                </div>
            </div>
        </div>

    )
}
export default TeamSection