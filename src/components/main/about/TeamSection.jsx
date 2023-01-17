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
              <Teamcard firstName="Jason" lastName="Lerit" image="https://imgs.search.brave.com/MeX0FJdaur-HM7RpycRW3dHLdPTppvyhw-iVqXRrjFQ/rs:fit:650:689:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZnVsbC8xNS0x/NTAzODNfdHJ1bXAt/dGhpbmstdHJ1bXAt/dGhvbmstZW1vamkt/aG1tLnBuZw"/>
              <Teamcard firstName="Jomar" lastName="Clado" image={require('../../../assets/img/JomarClado.jpeg')}/>
            </div>
          </div>
        </div>
    )
}
export default TeamSection
