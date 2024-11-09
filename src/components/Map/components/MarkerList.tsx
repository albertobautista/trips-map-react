import React from "react";
import { Pin } from "@vis.gl/react-google-maps";
import { AdvancedMarkerWithRef } from "./AdvancedMarkerWithRef";
import { MarkerData } from "../types";
import CustomMarker from "./CustomMarker/CustomMarker";

interface MarkerListProps {
  markers: MarkerData[];
  selectedId: string | null;
  onMarkerClick: (
    id: string,
    marker?: google.maps.marker.AdvancedMarkerElement
  ) => void;
}

const MarkerList: React.FC<MarkerListProps> = ({
  markers,
  selectedId,
  onMarkerClick,
}) => {
  return (
    <>
      {markers.map(({ id, position, flag, type, zIndex }) => (
        <AdvancedMarkerWithRef
          key={id}
          position={position}
          zIndex={selectedId === id ? markers.length + 1 : zIndex}
          className="custom-marker"
          style={{
            transform: `scale(${selectedId === id ? 1.3 : 1})`,
            transformOrigin: "bottom",
          }}
          onMarkerClick={(marker: google.maps.marker.AdvancedMarkerElement) =>
            onMarkerClick(id, marker)
          }
        >
          <CustomMarker isSelected={selectedId === id} image={flag} />
          {/* <Pin background={selectedId === id ? "#22ccff" : null} /> */}
        </AdvancedMarkerWithRef>
      ))}
    </>
  );
};

export default MarkerList;
