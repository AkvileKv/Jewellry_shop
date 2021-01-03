import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Kraunamos prekės...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Prekė(-s)
        </div>
        <div className="filter-sort">
          Rikiuoti pagal:{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="latest">Naujausios</option>
            <option value="lowest">Pigiausios viršuje</option>
            <option value="highest">Brangiausios viršuje</option>
          </select>
        </div>
        <div className="filter-category">
          Kategorija{" "}
          <select
            value={this.props.category}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">Visos</option>
            <option value="earrings">Auskarai</option>
            <option value="bracelets">Apyrankės</option>
            <option value="necklaces">Grandinėlės</option>
          </select>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    (state) => ({
      category: state.products.category,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems,
    }),
    {
      filterProducts,
      sortProducts,
    }
  )
)(Filter);
