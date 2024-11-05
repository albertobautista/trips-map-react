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
  <header className="header">
    <div>{flag}</div>
    <div className="location-info">
      <h1>{country}</h1>
      <h2>
        {city} - {year}
      </h2>
    </div>
  </header>
);

export default Header;
