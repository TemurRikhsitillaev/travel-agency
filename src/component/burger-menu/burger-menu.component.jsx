import { MENU_LINKS } from "../landing-page/landing-page.component";

import "./burger-menu-styles.scss";

const BurgerMenu = ({ isBurgerOpen }) => {
  if (!isBurgerOpen) return;

  return (
    <ul className="burger-menu-container">
      {MENU_LINKS.map((link, index) => {
        return (
          <li
            className="burger-menu-item"
            key={index}
          >
            <a
              href="#"
              className="burger-menu-link"
            >
              {link}
            </a>
          </li>
        );
      })}
      <button
        type="button"
        className="burger-sign-up-button"
      >
        Sign Up
      </button>
    </ul>
  );
};

export default BurgerMenu;
