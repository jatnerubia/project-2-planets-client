import SectionHeading from "../SectionHeading"
import Teamcard from "./TeamCard"

const TeamSection = () => {
    return (
        <div className="container py-5">
          <div className="pt-5 mt-5">
            <SectionHeading name="ABOUT US" classname="team"/>
          </div>
          <div className="team-wrapper">
            <div className="row gy-5 pt-5">
              <Teamcard firstName="Alan" lastName="Demol" image={require('../../../assets/img/AlanDemol.jpg')}/>
              <Teamcard firstName="Angela" lastName="Morales" image={require('../../../assets/img/AngelaMorales.jpg')}/>
              <Teamcard firstName="Jason" lastName="Lerit" image={require('../../../assets/img/JasonLerit.jpg')}/>
              <Teamcard firstName="Jomar" lastName="Clado" image={require('../../../assets/img/JomarClado.jpeg')}/>
            </div>
          </div>
        </div>
    )
}
export default TeamSection
