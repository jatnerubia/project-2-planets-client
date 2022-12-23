import FooterSection from "../FooterSection";
import { Outlet } from "react-router-dom";
import AnimatedStar from "../main/home/AnimatedStar";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      {/* TODO: Add navbar component here */}
      <AnimatedStar />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <FooterSection />
    </>
  );
};

export default Layout;
