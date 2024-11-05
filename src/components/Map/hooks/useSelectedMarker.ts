import { useState, useCallback } from "react";

const useSelectedMarker = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(
    (id: string | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
      setSelectedId(id);
      setSelectedMarker(marker || null);
      setInfoWindowShown((prev) => id !== selectedId || !prev);
    },
    [selectedId]
  );

  const handleMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  return {
    selectedId,
    selectedMarker,
    infoWindowShown,
    handleMarkerClick,
    handleMapClick,
  };
};

export default useSelectedMarker;
