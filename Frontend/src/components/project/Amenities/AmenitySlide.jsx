import { useLead } from "../../../context/LeadContext";

function AmenitySlide({
  bg,

  title,

  description,

  image,
}) {
  const { openLeadPopup } = useLead();

  return (
    <div className="amenity-slide">
      <div className="amenity-content">
        <h1 className="bg-title">{bg}</h1>

        <span className="section-tag">LUXURY AMENITY</span>

        <h2>{title}</h2>

        <p>{description}</p>

        <button
          className="gold-btn"
          onClick={() =>
            openLeadPopup(
              "Amenities Book Visit",

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
          Discover More →
        </button>
      </div>

      <div className="amenity-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default AmenitySlide;
