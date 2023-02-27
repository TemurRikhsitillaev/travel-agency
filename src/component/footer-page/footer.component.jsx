import { ReactComponent as FacebookLogo } from "../../assets/social-media/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/social-media/instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/social-media/twitter.svg";

import "./footer.styles.scss";

const HELPFUL_LINKS_DATA = [
  {
    id: 1,
    title: "Information",
    links: ["About us", "More search", "Blogs", "Testimonial", "Event"],
  },
  {
    id: 2,
    title: "Help Full Link",
    links: ["Services", "Support", "Tearm & Condition", "Privacy", "FAQ"],
  },
  {
    id: 3,
    title: "Our Services",
    links: ["Travel", "Guide Travel", "Study Tour"],
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        href="#"
        className="logo-link"
      >
        JelongTour
      </a>

      <div className="helpful-links-container">
        {HELPFUL_LINKS_DATA.map(({ id, title, links }) => {
          return (
            <div
              className="link-container"
              key={id}
            >
              <h3 className="title">{title}</h3>
              {links.map((link) => (
                <a
                  href="#"
                  className="link"
                >
                  {link}
                </a>
              ))}
            </div>
          );
        })}

        <div className="media-container">
          <div className="media-logo-container">
            <FacebookLogo className="media-logo" />
            <InstagramLogo className="media-logo" />
            <TwitterLogo className="media-logo" />
          </div>
          <a
            href="#"
            className="email"
          >
            JelongTour.info@email.com
          </a>
          <p className="phone-number">(704) 555-0127</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
