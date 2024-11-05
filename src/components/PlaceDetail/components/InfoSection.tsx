import ImagesGallery from "./ImagesGallery";

const InfoSection = ({
  description,
  images = [],
}: {
  description: string;
  images: string[];
}) => (
  <div className="info-section">
    {description && <p className="description">{description}</p>}
    {images && images.length > 0 && <ImagesGallery images={images} />}
  </div>
);

export default InfoSection;
