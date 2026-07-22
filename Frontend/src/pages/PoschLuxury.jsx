import { useEffect } from "react";
import AOS from "aos";

import Navbar from "../components/project/ProjectNavbar/ProjectNavbar";
import Hero from "../components/project/Hero/Hero";
import Overview from "../components/project/Overview/Overview";
import Highlights from "../components/project/Highlights/Highlights";
import Lifestyle from "../components/project/Lifestyle/Lifestyle";
import Amenities from "../components/project/Amenities/Amenities";
import FloorPlans from "../components/project/FloorPlans/FloorPlans";
import Architecture from "../components/project/Architecture/Architecture";
import Gallery from "../components/project/Gallery/Gallery";
import Location from "../components/project/Location/Location";
import BookVisit from "../components/project/BookVisit/BookVisit";
import LeadPopup from "../components/project/LeadPopup/LeadPopup";
import Footer from "../components/project/ProjectFooter/ProjectFooter";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <ProjectNavbar />
      <LeadPopup />

      <Hero />

      <Overview />

      <Highlights />

      <Lifestyle />

      <Amenities />

      <FloorPlans />

      <Architecture />

      <Gallery />

      <Location />

      <BookVisit />

      <ProjectFooter />
    </>
  );
}

export default App;
