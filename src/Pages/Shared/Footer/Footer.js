import React from "react";
import footerImage from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footerImage})`, backgroundSize: 'cover' }}
      className="pt-[200px]"
    >
      <div className="footer p-10 text-accent">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <div className=" text-center p-4 text-black">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
