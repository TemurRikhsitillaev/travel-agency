import { useEffect, useState } from "react";

import { ReactComponent as ArrowDefaultIcon } from "../../assets/icons/carousel-arrow-default.svg";

import "./recommendation.styles.scss";

const RECOMMENDATION_DATA = [
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
  {
    id: 5,
    image: "smth",
    title: "Bromo Tengger, Indonesia",
    tourismType: "Mountain Tourism",
    price: 350,
  },
  {
    id: 6,
    image: "smth",
    title: "Bromo Tengger, Indonesia",
    tourismType: "Mountain Tourism",
    price: 350,
  },
  {
    id: 7,
    image: "smth",
    title: "Bromo Tengger, Indonesia",
    tourismType: "Mountain Tourism",
    price: 350,
  },
];

const Recommendation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [stepSize, setStepSize] = useState(14.5);
  const [widthSize, setWidthSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const previousSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : 0;

    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const numberOfImages = RECOMMENDATION_DATA.length - visibleSlides;
    const index =
      currentSlide < numberOfImages ? currentSlide + 1 : numberOfImages;

    setCurrentSlide(index);
  };

  useEffect(() => {
    if (widthSize <= 1200 && widthSize > 750) {
      console.log("1200 log", visibleSlides);
      setStepSize(14.65);
      setVisibleSlides(3);
    } else if (widthSize <= 750 && widthSize > 550) {
      setStepSize(14.6);
      setVisibleSlides(2);
    } else if (widthSize <= 550) {
      setStepSize(14.5);
      setVisibleSlides(1);
    }
    console.log("visible", visibleSlides);
  }, [widthSize]);

  return (
    <div className="recommendation">
      <h1 className="title">
        Some our recommended place <br /> around the world
      </h1>
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(${-currentSlide * stepSize}%)`,
            transition: `ease-in-out 1s`,
          }}
        >
          {RECOMMENDATION_DATA.map(({ id, title, tourismType, price }) => (
            <div
              className="carousel-item"
              key={id}
            >
              <div className="image-container"></div>
              <h3 className="location-name">{title}</h3>
              <p className="tourism-type">{tourismType}</p>
              <h4 className="price-container">
                <span className="price">${price}/</span>Pax
              </h4>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="arrow-button left"
        onClick={previousSlide}
      >
        <ArrowDefaultIcon />
      </button>
      <button
        type="button"
        className="arrow-button right"
        onClick={nextSlide}
      >
        <ArrowDefaultIcon />
      </button>
    </div>
  );
};

export default Recommendation;
