import "./Location.css";

import { nearbyPlaces } from "./LocationData";
import NearbyCard from "./NearbyCard";

function Location() {
  return (
    <section className="location" id="location">
      <div className="location-heading">
        <span>LOCATION</span>

        <h2>
          Perfectly Connected
          <br />
          To Everything That Matters
        </h2>

        <p>
          Located on Kanakapura Road, POSCH offers seamless connectivity to
          Bengaluru's leading educational, healthcare, retail and business hubs.
        </p>
      </div>

      <div className="location-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4451.486602039139!2d77.54577429999999!3d12.8849773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f004b2d45ff%3A0x1501a5a17d6dc6a1!2sPosch%20-%20Royal%20Indraprastha%20Builders!5e1!3m2!1sen!2sin!4v1783583605305!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="POSCH Location"
          ></iframe>
        </div>

        <div className="nearby-container">
          {nearbyPlaces.map((place) => (
            <NearbyCard key={place.id} place={place} />
          ))}

          <a
            href="https://maps.google.com/?q=Posch%20Royal%20Indraprastha%20Builders"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export default Location;
