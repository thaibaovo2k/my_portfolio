import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Thai Bao</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            
            <li>
                <a href="#qualification" className="footer__link">Qualification</a>
            </li>
            
            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>

            <li>
                <a href="#contact" className="footer__link">Contact</a>
            </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/tbv2k/" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/thaibaovo2k/" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/thaibaovo191020/" className="footer__social-link">
          <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/thaibaovo2k" className="footer__social-link">
          <i className='bx bxl-github'></i>
            </a>
        </div>
        <div className="footer__copy">@Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
