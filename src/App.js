import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/prekes" component={Products} />
          <Route path="/prekes-aprasymas/:id" component={ProductPage} />
          <Route exact path="/krepselis" component={Cart} />
          <Route exact path="/uzsakymas" component={Checkout} />
          <Route exact path="/uzsakymai" component={Orders} />
          <Route exact path="/kontaktai" component={Contact} />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
