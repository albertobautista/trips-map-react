const Gallery = ({ images }: { images: string[] }) => (
  <section className="gallery">
    <h3>Galería de Imágenes</h3>
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
