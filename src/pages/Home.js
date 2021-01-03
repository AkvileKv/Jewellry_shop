import React, { Component } from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <section className="product">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-title">
                  <h4>Naujos Prekės</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <Products limit={4}></Products>
            </div>
          </div>
        </section>
      </>
    );
  }
}
