import React from "react";
import Map from "./Map";
import FlagBadge from "./FlagBadge";
import InfoSection from "./InfoSection";
import ImagesGallery from "./ImagesGallery";
import { MarkerData } from "../../Map/types";

const PlaceCard = ({ place }: { place: MarkerData }) => {
  const {
    id,
    country,
    flag,
    city,
    year,
    position,
    type,
    zIndex,
    url,
    description = "",
    images = [],
  } = place;

  return (
    <div className="place-card" style={{ zIndex }}>
      <FlagBadge
        flag={flag}
        country={country}
        city={city}
        year={year}
        type={type}
      />
      <Map position={position} url={url} />
      <InfoSection description={description} images={images} />
    </div>
  );
};

export default PlaceCard;
