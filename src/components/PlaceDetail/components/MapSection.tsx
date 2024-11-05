const MapSection = ({ position }: { position: google.maps.LatLngLiteral }) => (
  <section className="map-section">
    <h3>Ubicación en el mapa</h3>
    <iframe
      src={`https://www.google.com/maps?q=${position.lat},${position.lng}&z=15&output=embed`}
      title="Location Map"
      width="100%"
      height="300"
      frameBorder="0"
      style={{ border: 0 }}
      //   allowFullScreen=""
    ></iframe>
  </section>
);

export default MapSection;
