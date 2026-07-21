function HighlightCard({ number, title, subtitle }) {
  return (
    <div className="highlight-card">

      <h2>{number}</h2>

      <h3>{title}</h3>

      <p>{subtitle}</p>

    </div>
  );
}

export default HighlightCard;