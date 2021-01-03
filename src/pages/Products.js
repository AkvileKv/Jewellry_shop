import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Filter from "../components/Filter";
import Products from "../components/Products";

export default class ProductsPage extends Component {
  render() {
    return (
      <Container>
        <Filter></Filter>
        <Products></Products>
      </Container>
    );
  }
}
