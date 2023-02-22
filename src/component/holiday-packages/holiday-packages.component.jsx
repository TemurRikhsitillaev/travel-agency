import "./holiday-packages.styles.scss";

const HolidayPackages = () => {
  return (
    <div className="holiday-packages-container">
      <div className="holiday-packages-content-container">
        <div className="holiday-packeges-image-container">{/* <img /> */}</div>

        <div className="holiday-packages-text-container">
          <h4 className="holiday-packages-subtitle">PACKAGES</h4>
          <h1 className="holiday-packages-title">
            Luxury Holiday <br /> Packages For You
          </h1>
          <p className="holiday-packages-paragraph">
            Find a luxurious and comfortable workplace at a friendly <br />{" "}
            price so you don't have to worry about costs and the services <br />{" "}
            we provide are very useful for you as a valuable
          </p>
          <h2 className="holiday-packeges-price">
            <span className="price">$1400</span> /day
          </h2>
          <button className="holiday-packages-book-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;
