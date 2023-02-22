import "./about-us.styles.scss";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-award-container">
        <div className="about-us-award-image"></div>

        <div className="about-us-award-text-container">
          <h4 className="about-us-text">ABOUT US</h4>
          <h1 className="about-us-title">
            The Best And Most <br /> trusted service
          </h1>
          <p className="about-us-paragraph">
            We are the largest holiday service provider in the world <br /> with
            partners and places spread all over the world by prioriti-
            <br /> zing service and customer satisfaction.
          </p>
          <div className="about-us-results-container">
            <div className="about-us-customer-result">
              <h2 className="result-number">270+</h2>
              <p className="result-subtitle">Customer and partners</p>
            </div>

            <div className="about-us-place-result">
              <h2 className="result-number">470+</h2>
              <p className="result-subtitle">Place in the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
