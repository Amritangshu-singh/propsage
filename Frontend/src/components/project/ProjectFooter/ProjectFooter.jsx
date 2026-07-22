import "./ProjectFooter.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>POSCH</h2>

          <p>A Limited Edition Address crafted for luxurious living.</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <a href="#overview">Overview</a>

          <a href="#amenities">Amenities</a>

          <a href="#floorplans">Floor Plans</a>

          <a href="#gallery">Gallery</a>

          <a href="#location">Location</a>
        </div>

        <div>
          <h3>Contact</h3>

          <p>Kanakapura Road</p>

          <p>Bengaluru</p>

          <p>+91 98765 43210</p>

          <p>sales@posch.in</p>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div className="socials">
            <FaFacebookF />

            <FaInstagram />

            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2026 POSCH. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
