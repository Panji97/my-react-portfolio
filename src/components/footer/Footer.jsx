import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kurniawan's
      </a>
      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/panjie97/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Panji97">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kurniawan's. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
