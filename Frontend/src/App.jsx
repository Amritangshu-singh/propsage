import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/Layout/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import Highlights from "./components/Highlights/Highlights";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import Amenities from "./components/Amenities/Amenities";
import FloorPlans from "./components/FloorPlans/FloorPlans";
import Architecture from "./components/Architecture/Architecture";
import Gallery from "./components/Gallery/Gallery";
import ExperienceVideo from "./components/ExperienceVideo/ExperienceVideo";
import Location from "./components/Location/Location";
import BookVisit from "./components/BookVisit/BookVisit";
import LeadPopup from "./components/LeadPopup/LeadPopup";
import Footer from "./components/Footer/Footer";

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
      <Navbar />
      <LeadPopup />

      <Hero />

      <Overview />

      <Highlights />

      <Lifestyle />

      <Amenities />

      <FloorPlans />

      <Architecture />

      <Gallery />

      <ExperienceVideo />

      <Location />

      <BookVisit />

      <Footer />
    </>
  );
}

export default App;
