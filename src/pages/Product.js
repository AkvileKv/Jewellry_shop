import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import formatCurrency from "../util";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

class Product extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProductById(id);
  }

  render() {
    return (
      <Container>
        {!this.props.product ? (
          <div>Kraunama prekė...</div>
        ) : (
          <Row>
            <Col lg={5}>
              <img
                src={this.props.product.image}
                alt={this.props.product.title}
              ></img>
            </Col>
            <Col lg={7}>
              <h3>{this.props.product.title}</h3>
              <div className="rating">
                <img src="/images/star.svg" alt="Star" />
                <img src="/images/star.svg" alt="Star" />
                <img src="/images/star.svg" alt="Star" />
                <img src="/images/star.svg" alt="Star" />
                <img src="/images/star.svg" alt="Star" />
                <span>( 4 atsiliepimai )</span>
              </div>
              <div className="product__details__price">
                {formatCurrency(this.props.product.price)}
              </div>
              <p>{this.props.product.description}</p>
              <Link
                to="/krepselis"
                className="theme-button"
                onClick={() => this.props.addToCart(this.props.product)}
              >
                Į krepšelį
              </Link>
            </Col>
            <Col lg={12}>
              <div className="tabs">
                <Tabs defaultActiveKey="description" className="nav">
                  <Tab
                    tabClassName="nav-item"
                    eventKey="description"
                    title="Aprašymas"
                  >
                    <h6>Aprašymas</h6>
                    <p>
                      Aliquam erat volutpat. Nulla facilisi. In nec porttitor
                      dolor. Nullam ut hendrerit ligula, et scelerisque felis.
                      Sed ornare diam nec tortor auctor, in porttitor lectus
                      commodo. Sed consectetur nisi libero, aliquet faucibus
                      ligula luctus quis. Aenean cursus dui vitae venenatis
                      convallis. Sed gravida purus id blandit egestas. Donec
                      mattis quam tincidunt velit mollis, et venenatis leo
                      aliquam. Nullam luctus nisl eu nisi vestibulum, eget
                      tempus ligula auctor. Phasellus egestas est ligula, et
                      laoreet arcu dignissim id.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </Tab>
                  <Tab
                    tabClassName="nav-item"
                    eventKey="information"
                    title="Informacija"
                  >
                    <h6>Informacija</h6>
                    <p>
                      Aliquam erat volutpat. Nulla facilisi. In nec porttitor
                      dolor. Nullam ut hendrerit ligula, et scelerisque felis.
                      Sed ornare diam nec tortor auctor, in porttitor lectus
                      commodo. Sed consectetur nisi libero, aliquet faucibus
                      ligula luctus quis. Aenean cursus dui vitae venenatis
                      convallis. Sed gravida purus id blandit egestas. Donec
                      mattis quam tincidunt velit mollis, et venenatis leo
                      aliquam. Nullam luctus nisl eu nisi vestibulum, eget
                      tempus ligula auctor. Phasellus egestas est ligula, et
                      laoreet arcu dignissim id.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </Tab>
                  <Tab
                    tabClassName="nav-item"
                    eventKey="reviews"
                    title="Atsiliepimai (4)"
                  >
                    <h6>Atsiliepimai</h6>
                    <p>
                      Aliquam erat volutpat. Nulla facilisi. In nec porttitor
                      dolor. Nullam ut hendrerit ligula, et scelerisque felis.
                      Sed ornare diam nec tortor auctor, in porttitor lectus
                      commodo. Sed consectetur nisi libero, aliquet faucibus
                      ligula luctus quis. Aenean cursus dui vitae venenatis
                      convallis. Sed gravida purus id blandit egestas. Donec
                      mattis quam tincidunt velit mollis, et venenatis leo
                      aliquam. Nullam luctus nisl eu nisi vestibulum, eget
                      tempus ligula auctor. Phasellus egestas est ligula, et
                      laoreet arcu dignissim id.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}
export default connect((state) => ({ product: state.products.item }), {
  getProductById,
  addToCart,
})(Product);
