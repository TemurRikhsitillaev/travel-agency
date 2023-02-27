import "./results.styles.scss";

const Results = () => {
  return (
    <div className="results-container">
      <div className="results-inner">
        <div className="image-container"></div>
        <div className="text-container">
          <h3 className="subtitle">ABOUT US</h3>
          <h1 className="title">The Best And Most trusted service</h1>
          <p className="paragraph">
            We are the largest holiday service provider in the world with
            partners and places spread all over the world by prioritizing
            service and customer satisfaction.
          </p>
          <div className="result-numbers">
            <div className="result-number">
              <h2 className="number">270+</h2>
              <p className="paragraph">Customer and partners</p>
            </div>
            <div className="result-number">
              <h2 className="number">470+</h2>
              <p className="paragraph">Place in the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
