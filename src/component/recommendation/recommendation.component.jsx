import { ReactComponent as ArrowButtonDefault } from "../../assets/icons/carousel-arrow-default.svg";
import { ReactComponent as ArrowButtonActive } from "../../assets/icons/carousel-arrow-active.svg";

import "./recommendation.styles.scss";

const RECOMMENDATION_CAROUSEL_DATA = [
  {
    id: 1,
    image: "smth",
    title: "Raja Ampat, Indonesia",
    tourismType: "Underwater Tourism",
    price: 750,
  },
  {
    id: 2,
    image: "smth",
    title: "Machu Piccu, Mexico",
    tourismType: "Cultural Tourism",
    price: 1200,
  },
  {
    id: 3,
    image: "smth",
    title: "Nusa Penida, Indonesia",
    tourismType: "Beach Tourism",
    price: 670,
  },
  {
    id: 4,
    image: "smth",
    title: "Bromo Tengger, Indonesia",
    tourismType: "Mountain Tourism",
    price: 350,
  },
];

const Recommendation = () => {
  return (
    <div className="recommendation-container">
      <h2 className="recommendation-title">
        Some our recommended place <br /> around the world
      </h2>
      <div className="recommendation-carousel-container">
        {/* ARROW BUTTONS */}
        <button className="recommendation-carousel-arrow-left">
          <ArrowButtonDefault className="default-button-left" />
        </button>

        <button className="recommendation-carousel-arrow-right">
          <ArrowButtonDefault className="default-button-right" />
        </button>

        {RECOMMENDATION_CAROUSEL_DATA.map(
          ({ id, image, title, tourismType, price }) => {
            return (
              <div
                className="recommendation-carousel-item"
                key={id}
              >
                <div className="recommendation-carousel-item-image-container">
                  {/* <img src={image} /> */}
                </div>
                <p className="recommendation-carousel-item-place-title">
                  {title}
                </p>
                <p className="recommendation-carousel-item-tourism-type">
                  {tourismType}
                </p>
                <p className="recommendation-carousel-item-price">
                  <span className="price">${price}/</span>Pax
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Recommendation;
