const Map = ({
  position,
  url,
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
      frameBorder="0"
      style={{ border: 0 }}
      //   allowFullScreen=""
    ></iframe>
  </div>
);

export default Map;
