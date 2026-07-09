function NearbyCard({ place }) {
  const Icon = place.icon;

  return (
    <div className="nearby-card">
      <div className="nearby-icon">
        <Icon />
      </div>

      <div>
        <h4>{place.title}</h4>

        <p>{place.time}</p>
      </div>
    </div>
  );
}

export default NearbyCard;
