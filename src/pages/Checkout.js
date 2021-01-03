import React, { Component } from "react";
import formatCurrency from "../util";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postcode: "",
      country: "",
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      postcode: this.state.postcode,
      country: this.state.country,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Krepšelis tuščias</div>
        ) : (
          <div className="cart cart-header">
            Jūs turite {cartItems.length} prekę(-es) krepšelyje{" "}
          </div>
        )}

        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <button className="close-modal" onClick={this.closeModal}>
              x
            </button>
            <div className="order-details">
              <h3 className="success-message">Prekės sėkmingai užsakytos.</h3>
              <h2>Užsakymo nr. {order._id}</h2>
              <ul>
                <li>
                  <div>Name:</div>
                  <div>{order.name}</div>
                </li>
                <li>
                  <div>Pavardė:</div>
                  <div>{order.surname}</div>
                </li>
                <li>
                  <div>El. paštas:</div>
                  <div>{order.email}</div>
                </li>
                <li>
                  <div>Tel. nr.:</div>
                  <div>{order.phone}</div>
                </li>
                <li>
                  <div>Adresas:</div>
                  <div>{order.address}</div>
                </li>
                <li>
                  <div>Miestas:</div>
                  <div>{order.city}</div>
                </li>
                <li>
                  <div>Pašto kodas:</div>
                  <div>{order.postcode}</div>
                </li>
                <li>
                  <div>Šalis:</div>
                  <div>{order.country}</div>
                </li>
                <li>
                  <div>Data:</div>
                  <div>{order.createdAt}</div>
                </li>
                <li>
                  <div>Iš viso:</div>
                  <div>{formatCurrency(order.total)}</div>
                </li>
                <li>
                  <div>Prekės:</div>
                  <div>
                    {order.cartItems.map((x) => (
                      <div>
                        {x.count} {" x "} {x.title}
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <Link to="/uzsakymai" className="theme-button" type="submit">
                    Visi užsakymai
                  </Link>
                </li>
              </ul>
            </div>
          </Modal>
        )}
        <div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Iš viso:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                </div>
              </div>
              <div className="cart">
                <form onSubmit={this.createOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Vardas</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Pavardė</label>
                      <input
                        name="surname"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>El. paštas</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Tel. nr.</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Adresas</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Miestas</label>
                      <input
                        name="city"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Pašto kodas</label>
                      <input
                        name="postcode"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Šalis</label>
                      <input
                        name="country"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <button className="theme-button" type="submit">
                        Užsakyti
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, createOrder, clearOrder }
)(Cart);
