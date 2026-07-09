import { useLead } from "../../context/LeadContext";

function OverviewContent() {
  const { openLeadPopup } = useLead();

  return (
    <div className="overview-content" data-aos="fade-up">
      <div className="section-heading">
        <div className="gold-line"></div>

        <span className="section-tag">PROJECT OVERVIEW</span>
      </div>

      <h2>
        A New Landmark
        <br />
        Of Luxury Living
      </h2>

      <p>
        POSCH is an exclusive collection of premium residences thoughtfully
        designed for families seeking elegance, comfort and timeless
        architecture. Located in one of Bengaluru's fastest-growing
        neighbourhoods, every home combines spacious layouts, natural lighting
        and world-class amenities to deliver a refined lifestyle experience.
      </p>

      <button
        className="gold-btn"
        onClick={() => openLeadPopup("Overview Discover More")}
      >
        Discover More →
      </button>

      <div className="overview-stats">
        <div>
          <h3>18</h3>

          <span>Floors</span>
        </div>

        <div>
          <h3>3 & 4</h3>

          <span>BHK</span>
        </div>

        <div>
          <h3>70%</h3>

          <span>Open Space</span>
        </div>
      </div>
    </div>
  );
}

export default OverviewContent;
