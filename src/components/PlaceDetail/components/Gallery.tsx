const Gallery = ({ images }: { images: string[] }) => (
  <section>
    <h3 className="text-3xl">Gallery</h3>
    <div className="mt-4 flex gap-2 overflow-x-auto scroll-snap-x scroll-snap-mandatory pb-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image-${index + 1}`}
          className="w-[300px] h-auto scroll-snap-align-start object-cover rounded-lg"
        />
      ))}
    </div>
  </section>
);

export default Gallery;
