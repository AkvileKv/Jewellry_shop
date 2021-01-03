import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="footer__about">
              <div className="footer__logo">
                <Link className="text-link" to="/">
                  <img src="/images/logo.png" alt="Logo" />
                </Link>
              </div>
              <p>
                Aenean cursus dui vitae venenatis convallis. Donec mattis quam
                tincidunt velit mollis, et venenatis leo aliquam.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="footer__social">
              <h6>Sekite mus socialiniuose tinkluose:</h6>
              <div className="footer__social-links">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/social-icons/facebook.svg" alt="Facebook" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/social-icons/twitter.svg" alt="Twitter" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/social-icons/instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/social-icons/youtube.svg" alt="Youtube" />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/social-icons/pinterest.svg"
                    alt="Pinterest"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
