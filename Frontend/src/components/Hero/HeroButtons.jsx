import { useLead } from "../../context/LeadContext";

function HeroButtons() {
  const { openLeadPopup } = useLead();

  return (
    <div className="hero-buttons">
      <button
        className="primary-btn"
        onClick={() =>
          openLeadPopup(
            "Hero Book Visit",

            () => {
              document

                .getElementById("bookvisit")

                ?.scrollIntoView({
                  behavior: "smooth",
                });
            },
          )
        }
      >
        Book Visit
      </button>

      <button
        className="secondary-btn"
        onClick={() =>
          openLeadPopup(
            "Hero Explore Project",

            () => {
              document

                .getElementById("overview")

                ?.scrollIntoView({
                  behavior: "smooth",
                });
            },
          )
        }
      >
        Explore Project
      </button>
    </div>
  );
}

export default HeroButtons;
