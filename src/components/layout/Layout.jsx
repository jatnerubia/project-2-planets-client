import FooterSection from "../main/FooterSection";
import { Outlet } from "react-router-dom";
import AnimatedStar from "../main/home/AnimatedStar";
import Navbar from "../main/Navbar";
import { useLocation} from "react-router-dom"
import { useEffect } from 'react';
import ScrollToTop from "../main/home/ScrollToTop";

const Layout = () => {

  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/planets') {
      return document.body.classList.remove('fp-scrollable')
    }
  }, [location])

  return (
    <>
      <AnimatedStar />
      <main>
        <Navbar />
        <Outlet />
        <FooterSection />
      </main>
      <ScrollToTop />
    </>
  );
};

export default Layout;
