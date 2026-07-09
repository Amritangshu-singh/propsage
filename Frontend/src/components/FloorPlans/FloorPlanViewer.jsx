import { useLead } from "../../context/LeadContext";

function FloorPlanViewer({ plan }) {
  const { openLeadPopup } = useLead();

  return (
    <div className="viewer">
      <div className="image-wrapper">
        <img src={plan.image} alt={plan.name} />

        <div className="blur-overlay">
          <button
            className="gold-btn"
            onClick={() => openLeadPopup("Floor Plan")}
          >
            Click To View
          </button>
        </div>
      </div>

      <div className="plan-info">
        <div>
          <h3>{plan.name}</h3>

          <span>{plan.type}</span>
        </div>

        <div>
          <h2>{plan.area}</h2>
        </div>

        <div className="features">
          {plan.features.map((feature, index) => (
            <div key={index}>✓ {feature}</div>
          ))}
        </div>

        <div className="floor-buttons">
          <button className="gold-btn" onClick={() => openLeadPopup("Floor Plan") }>
            Book Site Visit
          </button>

          <button
            className="outline-btn"
            onClick={() => openLeadPopup("Download Brochure")}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

export default FloorPlanViewer;
