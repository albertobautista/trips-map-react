import "./CustomMarker.css";

interface CustomMarkerProps {
  isSelected: boolean;
  image: string;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ isSelected, image }) => {
  return (
    <div className={`custom-marker ${isSelected ? "selected" : ""}`}>
      {image}
    </div>
  );
};

export default CustomMarker;
