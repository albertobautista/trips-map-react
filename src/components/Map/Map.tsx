import React, { useState } from "react";

import { APIProvider, InfoWindow, Map } from "@vis.gl/react-google-maps";
import { getData } from "./data";
import "./style.css";
import MarkerList from "./components/MarkerList";
import InfoWindowContent from "./components/InfoWindowContent";
import useSelectedMarker from "./hooks/useSelectedMarker";

const API_KEY = process.env.REACT_APP_API_KEY || "";

const data = getData()
  .sort((a, b) => b.position.lat - a.position.lat)
  .map((dataItem, index) => ({ ...dataItem, zIndex: index }));

const MyMap: React.FC = () => {
  const [markers] = useState(data);

  const {
    selectedId,
    selectedMarker,
    infoWindowShown,
    handleMarkerClick,
    handleMapClick,
  } = useSelectedMarker();

  return (
    <APIProvider apiKey={API_KEY} libraries={["marker"]}>
      <Map
        mapId={"bf51a910020fa25a"}
        style={{ width: "100vw", height: "100vh" }}
        defaultZoom={3}
        defaultCenter={{ lat: 12, lng: 0 }}
        gestureHandling={"greedy"}
        onClick={handleMapClick}
      >
        <MarkerList
          markers={markers}
          onMarkerClick={handleMarkerClick}
          selectedId={selectedId}
        />

        {infoWindowShown && selectedMarker && (
          <InfoWindow anchor={selectedMarker} pixelOffset={[0, -2]}>
            <InfoWindowContent markerId={selectedId} markers={markers} />
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default MyMap;
