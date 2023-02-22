import { ReactComponent as FacebookIcon } from "../../assets/social-media/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/social-media/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/social-media/twitter.svg";
import "./footer.styles.scss";

const FOOTER_INNER_DATA = [
  {
    id: 1,
    title: "Information",
    items: ["About us", "More search", "Blogs", "Testimonial", "Event"],
  },
  {
    id: 2,
    title: "Help Full Link",
    items: ["Services", "Support", "Tearm & Condition", "Privacy", "FAQ"],
  },
  {
    id: 3,
    title: "Our Services",
    items: ["Travel", "Guide Travel", "Study Tour"],
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        href="#"
        className="footer-logo"
      >
        JelongTour
      </a>
      <div className="footer-inner-container">
        {FOOTER_INNER_DATA.map(({ id, title, items }) => {
          return (
            <div
              className="footer-inner-item"
              key={id}
            >
              <h4 className="footer-inner-title">{title}</h4>

              {items.map((item) => {
                return (
                  <a
                    href="#"
                    className="item"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          );
        })}
        <div className="footer-communication-ways-container">
          <div className="footer-social-media-container">
            <a className="footer-social-media">
              <FacebookIcon />
            </a>
            <a className="footer-social-media">
              <InstagramIcon className="footer-social-media" />
            </a>
            <a className="footer-social-media">
              <TwitterIcon className="footer-social-media" />
            </a>
          </div>
          <p className="footer-social-media-email">JelongTour.info@email.com</p>
          <p className="footer-social-media-phone">(704) 555-0127</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
