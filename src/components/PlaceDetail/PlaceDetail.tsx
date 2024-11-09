import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../Map/data";
import Header from "./components//Header";
import MapSection from "./components//MapSection";
import DetailsSection from "./components//DetailsSection";
import Gallery from "./components/Gallery";
import "./PlaceDetail.css";

const data = getData();

const PlaceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const place = data.find((place) => place.id === id);

  if (!place) {
    return <h2>Not found</h2>;
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
    navigate(-1);
  };

  return (
    <div className="place-details-page">
      <Header country={country} city={city} flag={flag} year={year} />
      {images && images.length > 0 && <Gallery images={images} />}
      <MapSection position={position} />
      {description && <DetailsSection description={description} />}
      <div className="button-container">
        <button className="back-button" onClick={handleBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default PlaceDetail;
