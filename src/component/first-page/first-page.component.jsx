import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import "./first-page.styles.scss";

const FirstPage = () => {
  return (
    <div className="first-page-container">
      <nav className="first-page-navigation-container">
        <a
          href="#"
          className="first-page-logo"
        >
          JelongTour
        </a>

        <ul className="first-page-navigation-items-container">
          <li className="first-page-navigation-item">
            <a
              href="#"
              className="first-page-navigation-link"
            >
              Home
            </a>
          </li>
          <li className="first-page-navigation-item">
            <a
              href="#"
              className="first-page-navigation-link"
            >
              Explore
            </a>
          </li>
          <li className="first-page-navigation-item">
            <a
              href="#"
              className="first-page-navigation-link"
            >
              About us
            </a>
          </li>
          <li className="first-page-navigation-item">
            <a
              href="#"
              className="first-page-navigation-link"
            >
              Booking
            </a>
          </li>
        </ul>
        <button className="first-page-registration-button">Sign Up</button>
      </nav>

      <h1 className="first-page-h1">
        Explore The Most Beautiful <br />
        Place Around The World
      </h1>

      <footer className="first-page-footer">
        <div className="first-page-progress-bar-number-container">
          <p className="first-page-number">
            <span className="first-page-number-active">1/</span>8
          </p>
          <div className="first-page-progress-bar">
            <span className="first-page-progress-bar-active"></span>
          </div>
        </div>
        <button className="first-page-see-more-button">
          <span className="first-page-title">See more</span>
          <Arrow className="first-page-arrow-img" />
        </button>
      </footer>
    </div>
  );
};

export default FirstPage;
