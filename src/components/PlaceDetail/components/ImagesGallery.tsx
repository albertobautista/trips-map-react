const ImagesGallery = ({ images }: { images: string[] }) => (
  <div className="images-gallery">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        className="gallery-image"
      />
    ))}
  </div>
);

export default ImagesGallery;
