import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../Map/data";
import Header from "./components//Header";
import MapSection from "./components//MapSection";
import DetailsSection from "./components//DetailsSection";
import Gallery from "./components/Gallery";

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
    <div className="max-w-[800px] mx-auto p-5">
      <Header country={country} city={city} flag={flag} year={year} />
      {images && images.length > 0 && <Gallery images={images} />}
      <MapSection position={position} />
      {description && <DetailsSection description={description} />}
      <div className="flex justify-end">
        <button
          onClick={handleBack}
          className="mt-5 px-5 py-2.5 text-xs text-white bg-[#509cff] border-2 border-[#509cff] rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:bg-[#509cff] hover:shadow-xl hover:translate-y-[-2px] hover:scale-105 active:bg-[#509cff] active:shadow-sm active:translate-y-1 active:scale-95"
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default PlaceDetail;
