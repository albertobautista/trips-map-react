const FlagBadge = ({
  flag,
  country,
  city,
  year,
  type,
}: {
  flag: string;
  country: string;
  city: string;
  year: number;
  type: string;
}) => (
  <div className="flag-badge">
    <img src={flag} alt={`${country} flag`} className="flag-icon" />
    <div className="location-info">
      <h3>{country}</h3>
      <p>
        {city} - {year}
      </p>
    </div>
    <span className={`type-badge ${type}`}>{type.toUpperCase()}</span>
  </div>
);

export default FlagBadge;
