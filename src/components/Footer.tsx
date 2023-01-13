import React from "react";
import { Link } from "react-router-dom";
import { RSSLogo } from "../icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <Link to="/" className="link_unstressed">
            <div className="text-logo">OnlineStore</div>
          </Link>
          <p>
            2022{" "}
            <a
              href="https://github.com/avpankov"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </p>
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <RSSLogo />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
