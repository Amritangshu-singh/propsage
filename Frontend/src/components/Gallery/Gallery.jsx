import "./gallery.css";

import GalleryGrid from "./GalleryGrid";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-heading">
        <span>GALLERY</span>

        <h2>Experience Every Detail Up Close</h2>

        <p>
          Explore architecture, interiors and amenities through carefully
          curated visuals.
        </p>
      </div>

      <GalleryGrid />
    </section>
  );
}

export default Gallery;
