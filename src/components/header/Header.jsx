import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Panji Kurniawan</h1>
        <h4 className="text-align">Fullstack Developer</h4>
        <CTA />
        <div className="container__wrapper">
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
