import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatCurrency from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <>
        {!this.props.products ? (
          <div>Loading...</div>
        ) : (
          <Row>
            {this.props.products.slice(0, this.props.limit).map((product) => (
              <Col lg={3} md={4} sm={6} className="mb-4" key={product._id}>
                <div>
                  <Link to={"prekes-aprasymas/" + product._id}>
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </Link>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
  }
)(Products);
