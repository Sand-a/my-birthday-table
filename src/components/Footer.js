import React from "react";

const Footer = () => {
  return (
    <footer className="footer-signature">
      <p className="copyright">
        Copyright&copy;
        <span className="year"> {new Date().getFullYear()} </span>
        {"--- "}
        Developed & Designed by{" "}
      </p>
      <div className="footer-links">
        <a
          className="copyright"
          target="_blank"
          rel="noreferrer"
          href="https://www.sandrineanid.com"
        >
          SANDRINE<strong>ANID</strong>
        </a>
        <p className="copyright"> | all rights reserved.</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sandrine-anid-7a51282a1"
          className="social-media-icon"
        >
          <img src="assets/social-media/linkedin-icon.svg" alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/myveryfirst_bc?igsh=aTZ4dHBzaDFzNzgx"
          className="social-media-icon"
        >
          <img src="assets/social-media/instagram-icon.svg" alt="" />{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
