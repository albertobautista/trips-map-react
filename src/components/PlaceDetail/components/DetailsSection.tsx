const DetailsSection = ({ description }: { description: string }) => (
  <section className="details-section">
    <h3>Description</h3>
    {description ? <p>{description}</p> : <p>No hay descripción disponible.</p>}
  </section>
);

export default DetailsSection;
