import "./Highlights.css";

import HighlightCard from "./HighlightCard";

function Highlights() {

  return (

    <section className="highlights" id="highlights">

      <div className="section-heading">

        <div className="gold-line"></div>

        <span>EXPERIENCE POSCH</span>

      </div>

      <div className="highlights-grid">

        <HighlightCard
          number="18+"
          title="Floors"
          subtitle="Luxury Residences"
        />

        <HighlightCard
          number="40+"
          title="Amenities"
          subtitle="World-Class Facilities"
        />

        <HighlightCard
          number="3 & 4"
          title="BHK"
          subtitle="Premium Homes"
        />

        <HighlightCard
          number="Prime"
          title="Location"
          subtitle="Near Forum South Mall"
        />

      </div>

    </section>

  );

}

export default Highlights;