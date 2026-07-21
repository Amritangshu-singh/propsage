import { galleryData } from "./GalleryData";
import GalleryCard from "./GalleryCard";

function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryData.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default GalleryGrid;
