import overviewImage from "../../assets/images/overview.webp";

function OverviewImage() {
  return (
    <div className="overview-image" data-aos="fade-left">

      <img
        src={overviewImage}
        alt="POSCH Luxury Residences"
      />

    </div>
  );
}

export default OverviewImage;