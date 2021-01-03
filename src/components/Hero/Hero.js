import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";

const backgroundStyle = {
  backgroundImage: "url('/images/landing.png')",
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero__image" style={backgroundStyle}>
              <div className="hero__text">
                <h1>Juvelyriniai Dirbiniai</h1>
                <p>
                  Aenean cursus dui vitae venenatis convallis. Donec mattis quam
                  tincidunt velit mollis, et venenatis leo aliquam.
                </p>
                <Link to="/prekes" className="theme-button">
                  žiūrėti prekes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
