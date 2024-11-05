interface CustomMarkerProps {
  isSelected: boolean;
  onClick: () => void;
  image: string;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  isSelected,
  onClick,
  image,
}) => {
  return (
    <div
      //   onClick={onClick}
      style={{
        cursor: "pointer",
        width: isSelected ? "50px" : "30px",
        height: isSelected ? "50px" : "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isSelected ? "30px" : "20px",
        transition: "transform 0.3s ease",
        transform: `scale(${isSelected ? 1.5 : 1})`,
      }}
    >
      {image}
    </div>
  );
};

export default CustomMarker;
