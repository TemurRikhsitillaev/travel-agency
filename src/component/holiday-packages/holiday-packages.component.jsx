import "./holiday-packages.styles.scss";

const HolidayPackages = () => {
  return (
    <div className="holiday-packages-container">
      <div className="image-container"></div>
      <div className="text-container">
        <h3 className="subtitle">PACKAGES</h3>
        <h1 className="title">Luxury Holiday Packages For You</h1>
        <p className="paragraph">
          Find a luxurious and comfortable workplace at a friendly price so you
          don't have to worry about costs and the services we provide are very
          useful for you as a valuable
        </p>

        <h2 className="number">
          <span className="highlite">$1400</span>/day
        </h2>
        <button
          type="button"
          className="book-now-button"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HolidayPackages;
