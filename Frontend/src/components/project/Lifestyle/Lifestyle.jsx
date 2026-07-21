import "./Lifestyle.css";
import { lifestyleData } from "./LifestyleData";
import LifestyleBlock from "./LifestyleBlock";

function Lifestyle() {
  return (
    <section className="lifestyle" id="lifestyle">

      <div className="lifestyle-heading">

        <span className="section-tag">
          LIFESTYLE
        </span>

        <h2>
          Crafted Around
          <br />
          Everyday Luxury
        </h2>

        <p>
          Every moment at POSCH is thoughtfully designed to
          combine comfort, wellness and timeless elegance.
        </p>

      </div>

      <div className="lifestyle-wrapper">

        {lifestyleData.map((item, index) => (

          <LifestyleBlock
            key={item.id}
            {...item}
            reverse={index % 2 !== 0}
          />

        ))}

      </div>

    </section>
  );
}

export default Lifestyle;