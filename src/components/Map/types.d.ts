export type MarkerData = {
  id: string;
  country: string;
  flag: string;
  city: string;
  year: number;
  position: google.maps.LatLngLiteral;
  type: "pin" | "html";
  zIndex: number;
  url: string;
  description?: string;
  images?: string[];
};
