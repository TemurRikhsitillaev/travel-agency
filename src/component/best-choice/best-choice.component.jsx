import { ReactComponent as ArrowButtonDefault } from "../../assets/icons/carousel-arrow-default.svg";
import { ReactComponent as ArrowButtonActive } from "../../assets/icons/carousel-arrow-active.svg";

import "./best-choice.styles.scss";

const BestChoice = () => {
  return (
    <div className="best-choice-container">
      <h2 className="best-choice-subtitle">ARTICLES</h2>
      <h1 className="best-choice-title">
        The Best Choice Of Place <br /> Just For You
      </h1>

      <div className="best-choice-options-container">
        <div>
          <div className="best-choice-decription-container">
            <span className="option-number">01</span>
            <span className="vertical-line"></span>
            <div className="country-decription-container">
              <h3 className="country-name">Indonesia</h3>
              <p className="country-description">
                A country in Southeast Asia that crosses the equator and is
                between <br /> mainland Asia and Australia, and between the
                Pacific Ocean and the Indian <br />
                Ocean. Indonesia is the largest archipelagic country in the
                world
              </p>
            </div>
            <div className="button-container">
              <ArrowButtonDefault className="arrow-button left" />
              <ArrowButtonDefault className="arrow-button right" />
            </div>
          </div>
          <div className="best-choice-images-container">
            <div className="best-choice-image-container"></div>
            <div className="best-choice-image-container"></div>
            <div className="best-choice-image-container"></div>
            <div className="best-choice-image-container"></div>
            <div className="best-choice-image-container"></div>
            <div className="best-choice-image-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChoice;
