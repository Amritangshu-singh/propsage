import "./Amenities.css";

import AmenitiesSlider from "./AmenitiesSlider";

function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="amenities-heading">
        <span className="section-tag">LUXURY AMENITIES</span>

        <h2>
          Designed Around
          <br />
          Exceptional Living
        </h2>

        <p>
          Every space at POSCH has been thoughtfully crafted to create an
          extraordinary living experience.
        </p>
      </div>

      <div className="amenities-container">
        <AmenitiesSlider />
      </div>
    </section>
  );
}

export default Amenities;
