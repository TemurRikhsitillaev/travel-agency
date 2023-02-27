import { useState } from "react";

import BurgerMenu from "../burger-menu/burger-menu.component";

import { ReactComponent as BurgerMenuIcon } from "../../assets/icons/burger-menu.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

import "./landing-page.styles.scss";

export const MENU_LINKS = ["Home", "Explore", "About us", "Booking"];

const LandingPage = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleIsBurgerOpen = () => setIsBurgerOpen(!isBurgerOpen);

  return (
    <>
      <div className="landing-page">
        <nav className="navigation-bar">
          <a
            href="#"
            className="logo"
          >
            Jelong Tour
          </a>
          <ul className="menu-container">
            {MENU_LINKS.map((link, index) => {
              return (
                <li
                  className="menu-item"
                  key={index}
                >
                  <a
                    href="#"
                    className="menu-link"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
            <button
              type="button"
              className="sign-up-button"
            >
              Sign Up
            </button>
          </ul>
          <button
            type="button"
            className="burger-menu"
            onClick={handleIsBurgerOpen}
          >
            <BurgerMenuIcon className="burger-menu-icon" />
          </button>
        </nav>
        <h1 className="landing-page-title">
          Explore The Most Beautiful
          <br /> Place Around The World
        </h1>

        <div className="landing-page-footer">
          <div className="page-number-container">
            <h4 className="page-number">
              <span className="current-page">1/</span>8
            </h4>

            <div className="page-slider">
              <span className="current-page-slider"></span>
            </div>
          </div>
          <button
            type="button"
            className="see-more-button"
          >
            See More
            <ArrowIcon className="arrow-icon" />
          </button>
        </div>
      </div>
      <BurgerMenu isBurgerOpen={isBurgerOpen} />
    </>
  );
};

export default LandingPage;
