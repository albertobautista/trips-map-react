const Map = ({
  position,
}: {
  position: google.maps.LatLngLiteral;
  url: string;
}) => (
  <div className="map-container">
    <iframe
      src={`https://www.google.com/maps?q=${position.lat},${position.lng}&z=15&output=embed`}
      title="Location Map"
      width="100%"
      height="200"
      style={{ border: 0 }}
    ></iframe>
  </div>
);

export default Map;
