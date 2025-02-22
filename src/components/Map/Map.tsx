import React, { useState } from "react";
import { APIProvider, InfoWindow, Map } from "@vis.gl/react-google-maps";
import { motion } from "framer-motion";
import { getData } from "./data";
import "./style.css";
import MarkerList from "./components/MarkerList";
import InfoWindowContent from "./components/InfoWindowContent";
import useSelectedMarker from "./hooks/useSelectedMarker";
import ControlPanel from "./components/ControlPanel/ControlPanel";

const API_KEY = process.env.REACT_APP_API_KEY || "";

const data = getData()
  .sort((a, b) => b.position.lat - a.position.lat)
  .map((dataItem, index) => ({ ...dataItem, zIndex: index }));

export const MyMap: React.FC = () => {
  const [markers] = useState(data);

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const {
    selectedId,
    selectedMarker,
    infoWindowShown,
    handleMarkerClick,
    handleMapClick,
  } = useSelectedMarker();

  return (
    <APIProvider apiKey={API_KEY} libraries={["marker"]}>
      <div className="relative w-screen h-screen">
        <Map
          mapId={"bf51a910020fa25a"}
          className="w-full h-full"
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
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <InfoWindowContent markerId={selectedId} markers={markers} />
              </motion.div>
            </InfoWindow>
          )}
        </Map>
        {!isPanelOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsPanelOpen(true)}
            className="absolute p-3 text-white transition rounded-full shadow-lg bg-sky-700 top-16 left-4 hover:bg-sky-800"
          >
            Menu
          </motion.button>
        )}

        <ControlPanel
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
        />
      </div>
    </APIProvider>
  );
};
