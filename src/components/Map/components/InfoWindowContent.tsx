import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    return (
      <motion.div
        className="p-4 text-center bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-xl font-semibold text-gray-700">Select a place</h2>
      </motion.div>
    );
  }

  const markerData = markers.find((marker) => marker.id === markerId);

  return (
    <motion.div
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-gray-800">
        {markerData ? `${markerData.country} ${markerData.flag}` : "No name"}
      </h2>
      {markerData && (
        <>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">City:</strong> {markerData.city}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Year:</strong> {markerData.year}
          </p>
          {markerData.description && (
            <p className="text-gray-700">
              <strong className="font-semibold">Description:</strong>{" "}
              {markerData.description}
            </p>
          )}
          <div className="flex justify-center">
            <Link
              to={`/details/${markerData.id}`}
              className="px-4 py-2 font-medium text-white transition duration-200 rounded-md text-md bg-sky-700 hover:bg-sky-800"
            >
              More details
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default InfoWindowContent;
