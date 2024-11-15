const Header = ({
  country,
  city,
  flag,
  year,
}: {
  country: string;
  city: string;
  flag: string;
  year: number;
}) => (
  <header className="flex items-center gap-5 mb-5">
    <div className="text-5xl">{flag}</div>
    <div>
      <h1 className="text-4xl">{country}</h1>
      <h2 className="text-lg text-gray-500">
        {city} - {year}
      </h2>
    </div>
  </header>
);

export default Header;
