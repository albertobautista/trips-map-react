import React from "react";
import { Link } from "react-router-dom";
import { MarkerData } from "../types";

interface InfoWindowContentProps {
  markerId: string | null;
  markers: MarkerData[];
}

const InfoWindowContent: React.FC<InfoWindowContentProps> = ({
  markerId,
  markers,
}) => {
  if (!markerId) {
    return <h2>Select a place</h2>;
  }

  const markerData = markers.find((marker) => marker.id === markerId);

  return (
    <div className="info-window-content">
      <h2 className="info-window-title">
        {markerData ? `${markerData.country} ${markerData.flag}` : "No name"}
      </h2>
      {markerData && (
        <>
          <p>
            <strong>City:</strong> {markerData.city}
          </p>
          <p>
            <strong>Year:</strong> {markerData.year}
          </p>
          {markerData.description && (
            <p>
              <strong>Description:</strong> {markerData.description}
            </p>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={`/details/${markerData.id}`} className="info-window-link">
              More details
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoWindowContent;
