import "./Gallery.css";

const Gallery = ({ images }: { images: string[] }) => (
  <section>
    <h3>Gallery</h3>
    <div className="images-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className="gallery-image"
        />
      ))}
    </div>
  </section>
);

export default Gallery;
