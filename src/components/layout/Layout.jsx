import FooterSection from "../main/FooterSection";
import { Outlet } from "react-router-dom";
import AnimatedStar from "../main/home/AnimatedStar";
import Navbar from "../main/Navbar";

const Layout = () => {
  return (
    <>
      {/* TODO: Add navbar component here */}
      <AnimatedStar />
      <main>
        <Navbar />
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
};

export default Layout;
