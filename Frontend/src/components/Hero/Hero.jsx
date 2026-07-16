import "./hero.css";

import heroImage from "../../assets/images/hero-bg.webp";

import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <section className="hero">

      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="hero-wrapper">

        <div>

          <HeroContent />

          <HeroButtons />

        </div>

        <div></div>

      </div>

      <ScrollIndicator />

    </section>
  );
}

export default Hero;