import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../Map/data";
import Header from "./components//Header";
import MapSection from "./components//MapSection";
import DetailsSection from "./components//DetailsSection";
import Gallery from "./components/Gallery";
const data = getData();

const PlaceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtiene el id de los parámetros de la URL
  const navigate = useNavigate(); // Hook para manejar la navegación
  const place = data.find((place) => place.id === id);

  if (!place) {
    return <h2>place no encontrado</h2>; // Mensaje si no se encuentra el place
  }
  const {
    country,
    city,
    flag,
    year,
    position,
    description = "",
    images,
  } = place;

  const handleBack = () => {
    navigate(-1); // Navega hacia atrás en el historial
  };

  return (
    <div className="place-details-page">
      <Header country={country} city={city} flag={flag} year={year} />
      <MapSection position={position} />
      <DetailsSection description={description} />
      {images && images.length > 0 && <Gallery images={images} />}
      <button onClick={handleBack}>Regresar</button>
    </div>
  );
};

export default PlaceDetail;
