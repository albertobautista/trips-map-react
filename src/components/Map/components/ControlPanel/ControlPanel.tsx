import React, { useState } from "react";
import { motion } from "framer-motion";
import { getData } from "../../data";
import { Link } from "react-router-dom";

interface ControlPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function getCitiesPerCountry() {
  const data = getData();
  const countryMap = new Map<
    string,
    {
      flag: string;
      count: number;
      cities: Map<string, { visits: { id: string; year: number }[] }>;
    }
  >();

  data.forEach(({ country, flag, city, year, id }) => {
    if (countryMap.has(country)) {
      countryMap.get(country)!.count += 1;
      const cities = countryMap.get(country)!.cities;
      if (cities.has(city)) {
        cities.get(city)!.visits.push({ id, year });
      } else {
        cities.set(city, { visits: [{ id, year }] });
      }
    } else {
      const cities = new Map<
        string,
        { visits: { id: string; year: number }[] }
      >();
      cities.set(city, { visits: [{ id, year }] });
      countryMap.set(country, { flag, count: 1, cities });
    }
  });

  return Array.from(countryMap, ([country, { flag, count, cities }]) => ({
    country,
    flag,
    count,
    cities: Array.from(cities, ([city, { visits }]) => ({ city, visits })),
  })).sort((a, b) => b.count - a.count);
}

const data = getCitiesPerCountry();

const ControlPanel: React.FC<ControlPanelProps> = ({ isOpen, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country === selectedCountry ? null : country);
  };

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: isOpen ? 0 : -250 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${
        !isOpen ? "w-40" : "w-64"
      } absolute flex flex-col p-4 space-y-2 bg-white rounded-lg shadow-lg top-16 left-4 `}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Countries</h2>
        <button
          onClick={onClose}
          className="self-end px-2 py-1 text-white transition rounded-full"
        >
          ❌
        </button>
      </div>
      <div className="max-h-[500px] overflow-y-auto">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div
                onClick={() => handleCountryClick(item.country)}
                className="flex items-center p-4 mb-2 transition duration-300 bg-white rounded-md shadow-md cursor-pointer hover:bg-gray-100"
              >
                <span className="mr-3 text-3xl">{item.flag}</span>
                <div className="flex-1">
                  <span className="font-semibold text-md">{item.country}</span>
                  <div className="text-sm text-gray-600">
                    {item.count} visits
                  </div>
                </div>
              </div>

              {selectedCountry === item.country && (
                <div className="p-2 mt-2 ml-8 rounded-md bg-gray-50">
                  <ul>
                    {item.cities.map(({ city, visits }, cityIndex) => (
                      <li key={cityIndex} className="text-sm text-gray-700">
                        <strong>{city}:</strong>
                        {visits.map(({ id, year }, yearIndex) => (
                          <Link
                            key={yearIndex}
                            to={`/details/${id}`}
                            className="ml-2 text-sky-700 hover:underline"
                          >
                            {year}
                          </Link>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ControlPanel;
