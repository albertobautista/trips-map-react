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
  if (!markerData) return null;

  const citiesList = markers.filter(
    (marker) => marker.city.toLowerCase() === markerData.city.toLowerCase()
  );

  return (
    <motion.div
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-gray-800">
        {markerData.country} {markerData.flag}
      </h2>

      <p className="text-lg text-gray-700">
        <strong className="font-semibold">City:</strong> {markerData.city}
      </p>

      <div className="flex gap-1 text-lg text-gray-700">
        <strong className="font-semibold">
          Year{citiesList.length > 1 ? "s" : ""}:
        </strong>
        <div className="flex gap-2">
          {citiesList.map((city) => (
            <Link
              key={city.id}
              to={`/details/${city.id}`}
              className="text-sky-700 hover:underline"
            >
              {city.year}
            </Link>
          ))}
        </div>
      </div>

      {markerData.description && (
        <p className="text-gray-700">
          <strong className="font-semibold">Description:</strong>{" "}
          {markerData.description}
        </p>
      )}
    </motion.div>
  );
};

export default InfoWindowContent;
