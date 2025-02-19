import { MarkerData } from "./types";

export function getData() {
  const data: MarkerData[] = [
    {
      id: "0",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      city: "Dubái",
      year: 2018,
      position: { lat: 25.1972, lng: 55.2744 },
      zIndex: 0,
      type: "pin",
      url: "/city/dubai",
      description: "Clubs World Cup 2018",
    },
    {
      id: "1",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      city: "Al Ain",
      year: 2018,
      position: { lat: 24.2053, lng: 55.7404 },
      zIndex: 0,
      type: "pin",
      url: "/city/al-ain",
      description: "Clubs World Cup 2018",
    },
    {
      id: "2",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      city: "Abu Dhabi",
      year: 2018,
      position: { lat: 24.4765, lng: 54.3662 },
      zIndex: 0,
      type: "pin",
      url: "/city/abu-dhabi",
      description: "Clubs World Cup 2018",
    },
    {
      id: "3",
      country: "Spain",
      flag: "🇪🇸",
      city: "Barcelona",
      year: 2018,
      position: { lat: 41.3784, lng: 2.12 },
      zIndex: 0,
      type: "pin",
      url: "/city/barcelona",
    },
    {
      id: "4",
      country: "Spain",
      flag: "🇪🇸",
      city: "Madrid",
      year: 2018,
      position: { lat: 40.4531, lng: -3.6883 },
      zIndex: 0,
      type: "pin",
      url: "/city/madrid",
    },
    {
      id: "5",
      country: "France",
      flag: "🇫🇷",
      city: "Paris",
      year: 2018,
      position: { lat: 48.8584, lng: 2.2945 },
      zIndex: 0,
      type: "pin",
      url: "/city/paris",
    },
    {
      id: "6",
      country: "United States of America",
      flag: "🇺🇸",
      city: "Los Angeles",
      year: 2022,
      position: { lat: 33.8121, lng: -117.919 },
      zIndex: 0,
      type: "pin",
      url: "/city/los-angeles",
    },
    {
      id: "7",
      country: "United States of America",
      flag: "🇺🇸",
      city: "Orlando",
      year: 2022,
      position: { lat: 28.3852, lng: -81.5639 },
      zIndex: 0,
      type: "pin",
      url: "/city/orlando",
    },
    {
      id: "8",
      country: "France",
      flag: "🇫🇷",
      city: "Paris",
      year: 2022,
      position: { lat: 48.867, lng: 2.7833 },
      zIndex: 0,
      type: "pin",
      url: "/city/paris-2023",
    },
    {
      id: "9",
      country: "Spain",
      flag: "🇪🇸",
      city: "Barcelona",
      year: 2023,
      position: { lat: 41.4036, lng: 2.1744 },
      zIndex: 0,
      type: "pin",
      url: "/city/barcelona-2023",
    },
    {
      id: "10",
      country: "Spain",
      flag: "🇪🇸",
      city: "Madrid",
      year: 2023,
      position: { lat: 40.4169, lng: -3.6059 },
      zIndex: 0,
      type: "pin",
      url: "/city/madrid-2023",
    },
    {
      id: "11",
      country: "Italy",
      flag: "🇮🇹",
      city: "Venice",
      year: 2023,
      position: { lat: 45.4371, lng: 12.4534 },
      zIndex: 0,
      type: "pin",
      url: "/city/venice",
    },
    {
      id: "12",
      country: "Italy",
      flag: "🇮🇹",
      city: "Florence",
      year: 2023,
      position: { lat: 43.773, lng: 11.256 },
      zIndex: 0,
      type: "pin",
      url: "/city/florence",
    },
    {
      id: "13",
      country: "Italy",
      flag: "🇮🇹",
      city: "Pisa",
      year: 2023,
      position: { lat: 43.7229, lng: 10.3966 },
      zIndex: 0,
      type: "pin",
      url: "/city/pisa",
    },
    {
      id: "14",
      country: "Italy",
      flag: "🇮🇹",
      city: "Milán",
      year: 2023,
      position: { lat: 43.7734, lng: 11.255 },
      zIndex: 0,
      type: "pin",
      url: "/city/milan",
    },
    {
      id: "15",
      country: "Italy",
      flag: "🇮🇹",
      city: "Rome",
      year: 2023,
      position: { lat: 41.8902, lng: 12.4923 },
      zIndex: 0,
      type: "pin",
      url: "/city/rome",
    },
    {
      id: "16",
      country: "Vatican",
      flag: "🇻🇦",
      city: "Vatican",
      year: 2023,
      position: { lat: 41.9022, lng: 12.4539 },
      zIndex: 0,
      type: "pin",
      url: "/city/rome",
    },
    {
      id: "17",
      country: "Spain",
      flag: "🇪🇸",
      city: "Guadalajara",
      year: 2023,
      position: { lat: 40.6073, lng: -1.9469 },
      zIndex: 0,
      type: "pin",
      url: "/city/guadalajara",
    },
    {
      id: "18",
      country: "United States of America",
      flag: "🇺🇸",
      city: "Miami",
      year: 2024,
      position: { lat: 25.7617, lng: -80.1895 },
      zIndex: 0,
      type: "pin",
      url: "/city/miami",
    },
    {
      id: "19",
      country: "Bahamas",
      flag: "🇧🇸",
      city: "Nassau",
      year: 2024,
      position: { lat: 25.0582, lng: -77.3431 },
      zIndex: 0,
      type: "pin",
      url: "/city/nassau",
      images: [
        "/images/places/nassau-1.webp",
        "/images/places/nassau-2.webp",
        "/images/places/nassau-3.webp",
        "/images/places/nassau-4.webp",
        "/images/places/nassau-5.webp",
      ],
    },
    {
      id: "20",
      country: "Dominican Republic",
      flag: "🇩🇴",
      city: "Puerto Plata",
      year: 2024,
      position: { lat: 19.79, lng: -70.6968 },
      zIndex: 0,
      type: "pin",
      url: "/city/puerto-plata",
      images: [
        "/images/places/puerto-plata-1.webp",
        "/images/places/puerto-plata-2.webp",
        "/images/places/puerto-plata-3.webp",
        "/images/places/puerto-plata-4.webp",
        "/images/places/puerto-plata-5.webp",
      ],
    },
    {
      id: "21",
      country: "United States of America",
      flag: "🇺🇸",
      city: "San Diego",
      year: 2024,
      position: { lat: 32.7157, lng: -117.1611 },
      zIndex: 0,
      type: "html",
      url: "/city/san-diego",
    },
    {
      id: "22",
      country: "Belgium",
      flag: "🇧🇪",
      city: "Brussels",
      year: 2024,
      position: { lat: 50.8467, lng: 4.3525 },
      zIndex: 0,
      type: "html",
      url: "/city/brussels",
    },
    {
      id: "23",
      country: "Netherlands",
      flag: "🇳🇱",
      city: "Amsterdam",
      year: 2024,
      position: { lat: 52.3728, lng: 4.9 },
      zIndex: 0,
      type: "html",
      url: "/city/amsterdam",
    },
    {
      id: "24",
      country: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      city: "London",
      year: 2024,
      position: { lat: 51.5007, lng: -0.1246 },
      zIndex: 0,
      type: "html",
      url: "/city/london",
    },
    {
      id: "25",
      country: "France",
      flag: "🇫🇷",
      city: "Paris",
      year: 2024,
      position: { lat: 48.8867, lng: 2.3431 },
      zIndex: 0,
      type: "html",
      url: "/city/paris-2024",
    },
    {
      id: "26",
      country: "Belgium",
      flag: "🇧🇪",
      city: "Bruges",
      year: 2025,
      position: { lat: 51.2089, lng: 3.2242 },
      zIndex: 0,
      type: "html",
      url: "/city/bruges",
    },
    {
      id: "26",
      country: "Belgium",
      flag: "🇧🇪",
      city: "Antwerp",
      year: 2025,
      position: { lat: 51.2194, lng: 4.4025 },
      zIndex: 0,
      type: "html",
      url: "/city/antwerp",
    },
    {
      id: "27",
      country: "Belgium",
      flag: "🇧🇪",
      city: "Ghent",
      year: 2025,
      position: { lat: 51.0543, lng: 3.7174 },
      zIndex: 0,
      type: "html",
      url: "/city/ghent",
    },
    {
      id: "28",
      country: "Netherlands",
      flag: "🇳🇱",
      city: "Zaanse Schans",
      year: 2024,
      position: { lat: 52.4731, lng: 4.8163 },
      zIndex: 0,
      type: "html",
      url: "/city/zaanse-schans",
    },
    {
      id: "29",
      country: "Netherlands",
      flag: "🇳🇱",
      city: "Zaandam",
      year: 2024,
      position: { lat: 52.4383, lng: 4.826 },
      zIndex: 0,
      type: "html",
      url: "/city/zaandam",
    },
    {
      id: "30",
      country: "Italy",
      flag: "🇮🇹",
      city: "Rome",
      year: 2025,
      position: { lat: 52.4383, lng: 4.826 },
      zIndex: 0,
      type: "html",
      url: "/city/rome",
    },
    {
      id: "31",
      country: "Italy",
      flag: "🇮🇹",
      city: "Venice",
      year: 2025,
      position: { lat: 52.4383, lng: 4.826 },
      zIndex: 0,
      type: "html",
      url: "/city/venice",
    },
    {
      id: "32",
      country: "Italy",
      flag: "🇮🇹",
      city: "Padua",
      year: 2025,
      position: { lat: 52.4383, lng: 4.826 },
      zIndex: 0,
      type: "html",
      url: "/city/padua",
    },
    {
      id: "32",
      country: "Italy",
      flag: "🇮🇹",
      city: "Florence",
      year: 2025,
      position: { lat: 52.4383, lng: 4.826 },
      zIndex: 0,
      type: "html",
      url: "/city/florence",
    },
    {
      id: "33",
      country: "Italy",
      flag: "🇮🇹",
      city: "Pisa",
      year: 2025,
      position: { lat: 52.4383, lng: 4.826 },
      zIndex: 0,
      type: "html",
      url: "/city/pisa",
    },
    {
      id: "34",
      country: "Portugal",
      flag: "🇵🇹",
      city: "Lisbon",
      year: 2025,
      position: { lat: 38.7169, lng: -9.1399 },
      zIndex: 0,
      type: "html",
      url: "/city/lisbon",
    },
    {
      id: "35",
      country: "Portugal",
      flag: "🇵🇹",
      city: "Oporto",
      year: 2025,
      position: { lat: 41.1496, lng: -8.6109 },
      zIndex: 0,
      type: "html",
      url: "/city/oporto",
    },
    {
      id: "36",
      country: "Spain",
      flag: "🇪🇸",
      city: "Madrid",
      year: 2025,
      position: { lat: 40.4154, lng: -3.6844 },
      zIndex: 0,
      type: "html",
      url: "/city/madrid",
    },
    {
      id: "37",
      country: "Vatican",
      flag: "🇻🇦",
      city: "Vatican",
      year: 2025,
      position: { lat: 41.9022, lng: 12.4539 },
      zIndex: 0,
      type: "pin",
      url: "/city/rome",
    },
  ];

  return data;
}
