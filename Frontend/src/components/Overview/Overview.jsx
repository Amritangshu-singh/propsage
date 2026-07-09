import "./Overview.css";

import OverviewContent from "./OverviewContent";
import OverviewImage from "./OverviewImage";

function Overview() {
  return (
    <section className="overview" id="overview">
      <div className="overview-container">
        <OverviewContent />

        <OverviewImage />

      </div>
    </section>
  );
}

export default Overview;
