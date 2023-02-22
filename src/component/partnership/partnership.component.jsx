import { ReactComponent as Partner1 } from "../../assets/partners/partner-1.svg";
import { ReactComponent as Partner2 } from "../../assets/partners/partner-2.svg";
import { ReactComponent as Partner3 } from "../../assets/partners/partner-3.svg";
import { ReactComponent as Partner4 } from "../../assets/partners/partner-4.svg";
import { ReactComponent as Partner5 } from "../../assets/partners/partner-5.svg";
import "./partnership.styles.scss";

const Partnership = () => {
  return (
    <div className="partnership-container">
      <h1 className="partnership-title">Our Partnership</h1>
      <h2 className="partnership-sub-title">
        Some our best partnership travel <br /> service worldwide
      </h2>
      <div className="partners-container">
        <Partner1 className="partner-image" />
        <Partner2 className="partner-image" />
        <Partner3 className="partner-image" />
        <Partner4 className="partner-image" />
        <Partner5 className="partner-image" />
      </div>
    </div>
  );
};

export default Partnership;
