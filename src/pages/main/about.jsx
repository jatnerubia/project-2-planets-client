import TeamSection from "../../components/main/about/TeamSection";
import TeamCard from "../../components/main/about/TeamCard";
const AboutPage = () => {
  return (
    <>
      <h1 className="text-dark">ABOUT</h1>
   
      {/* Teams Section */}
         <TeamSection/>
       {/* Team Card */}
      <TeamCard/>
    </>
  );
};

export default AboutPage;
