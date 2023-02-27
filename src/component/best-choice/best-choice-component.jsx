import { ReactComponent as ArrowDefaultButton } from "../../assets/icons/carousel-arrow-default.svg";
import { ReactComponent as ArrowActiveButton } from "../../assets/icons/carousel-arrow-active.svg";

import "./best-choice.styles.scss";

const BestChoice = () => {
  return (
    <div className="best-choice-container">
      <h3 className="subtitle">ARTICLES</h3>
      <h1 className="title">
        The Best Choice Of Place <br /> Just For You
      </h1>

      <div className="best-country-container">
        <div className="best-country-inner">
          <div className="best-country-header">
            <div className="best-country-title">
              <h1 className="number">01</h1>
              <span className="vertical-line"></span>
              <div className="article">
                <h3 className="country-name">Indonesia</h3>
                <p className="country-history">
                  A country in Southeast Asia that crosses the equator and is
                  between mainland Asia and Australia, and between the Pacific
                  Ocean and the Indian Ocean. Indonesia is the largest
                  archipelagic country in the world
                </p>
              </div>
            </div>
            <div className="display650 arrow-buttons-container ">
              <button className="arrow-button left">
                <ArrowDefaultButton />
              </button>
              <button className="arrow-button right">
                <ArrowDefaultButton />
              </button>
            </div>
          </div>

          <div className="displayNone650 arrow-buttons-container">
            <button className="arrow-button left">
              <ArrowDefaultButton />
            </button>
            <button className="arrow-button right">
              <ArrowDefaultButton />
            </button>
          </div>

          <div className="best-country-images-container">
            <div className="image-container"></div>
            <div className="image-container"></div>
            <div className="image-container"></div>
            <div className="image-container"></div>
            <div className="image-container"></div>
            <div className="image-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChoice;
