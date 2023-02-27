import { ReactComponent as Partner1 } from "../../assets/partners/partner-1.svg";
import { ReactComponent as Partner2 } from "../../assets/partners/partner-2.svg";
import { ReactComponent as Partner3 } from "../../assets/partners/partner-3.svg";
import { ReactComponent as Partner4 } from "../../assets/partners/partner-4.svg";
import { ReactComponent as Partner5 } from "../../assets/partners/partner-5.svg";

import "./partners.styles.scss";

const Partners = () => {
  return (
    <div className="partners-container">
      <h1 className="title">Our Partnership</h1>
      <h3 className="subtitle">
        Some our best partnership travel <br /> service worldwide
      </h3>
      <div className="partners">
        <Partner1 className="partner"></Partner1>
        <Partner2 className="partner"></Partner2>
        <Partner3 className="partner"></Partner3>
        <Partner4 className="partner"></Partner4>
        <Partner5 className="partner"></Partner5>
      </div>
    </div>
  );
};

export default Partners;
