import "./architecture.css";
import architectureData from "./ArchitectureData";
import ArchitectureCard from "./ArchitectureCard";

function Architecture() {
  return (
    <section className="architecture-section" id="architecture">

      <div className="architecture-heading">

        <span>ARCHITECTURE</span>

        <h2>
          Crafted For
          <br />
          Timeless Living
        </h2>

        <p>
          Every corner of POSCH is designed to blend luxury,
          nature and modern architecture into one seamless
          living experience.
        </p>

      </div>

      <div className="architecture-container">

        {architectureData.map((item, index) => (
          <ArchitectureCard
            key={index}
            data={item}
            reverse={index % 2 !== 0}
          />
        ))}

      </div>

    </section>
  );
}

export default Architecture;