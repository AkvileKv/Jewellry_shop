import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="header__logo">
              <Link className="text-link" to="/">
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <nav className="header__menu">
              <ul>
                <li>
                  <Link className="text-link" to="/">
                    Pradinis
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/auskarai">
                    Auskarai
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/pakabukai">
                    Pakabukai
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/ziedai">
                    Žiedai
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/grandineles">
                    Grandinėlės
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4 align-self-center">
            <div className="header__right">
              <div className="header__right__contacts">
                <Link className="text-link" to="/kontaktai">
                  Kontaktai
                </Link>
              </div>
              <form action="#" className="search">
                <input type="text" placeholder="Paieška" />
                <img
                  src="/images/search.svg"
                  className="icon_search"
                  alt="Paieška"
                />
              </form>
              <Link to="/krepselis" className="text-link">
                <img
                  src="/images/shopping-cart.svg"
                  className="icon_cart_alt"
                  alt="Pirkinių krepšelis"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
