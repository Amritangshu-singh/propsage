import { motion } from "framer-motion";

function ArchitectureCard({ data, reverse }) {
  return (
    <motion.div
      className={`architecture-card ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <div className="architecture-image">

        <img src={data.image} alt={data.title} />

      </div>

      <div className="architecture-content">

        <span>{data.subtitle}</span>

        <h3>{data.title}</h3>

        <p>{data.description}</p>

        <ul>

          {data.features.map((feature, index) => (

            <li key={index}>
              ✓ {feature}
            </li>

          ))}

        </ul>

      </div>

    </motion.div>
  );
}

export default ArchitectureCard;