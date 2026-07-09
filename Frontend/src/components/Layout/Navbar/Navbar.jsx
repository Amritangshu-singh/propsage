import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";
import { useLead } from "../../../context/LeadContext";

function Navbar() {
  const { openLeadPopup } = useLead();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        <div className="logo">

          <h2>POSCH</h2>

          <span>A LIMITED EDITION ADDRESS</span>

        </div>

        <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>

          <li><a href="#overview">Overview</a></li>

          <li><a href="#lifestyle">Lifestyle</a></li>

          <li><a href="#amenities">Amenities</a></li>

          <li><a href="#floorplans">Floor Plans</a></li>

          <li><a href="#gallery">Gallery</a></li>

          <li><a href="#location">Location</a></li>

          <button className="visit-btn" onClick={() => openLeadPopup("Navbar Visit")}>

            Book Visit

          </button>

        </ul>

        <div
          className="menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
        >

          {mobileMenu ? <HiX /> : <HiMenuAlt3 />}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;