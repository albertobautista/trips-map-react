const MapSection = ({ position }: { position: google.maps.LatLngLiteral }) => (
  <section>
    <h3 className="text-2xl">Favorite place location</h3>
    <iframe
      src={`https://www.google.com/maps?q=${position.lat},${position.lng}&z=15&output=embed`}
      title="Location Map"
      width="100%"
      height="250"
      className="mt-4 rounded-lg border-0"
    ></iframe>
  </section>
);

export default MapSection;
