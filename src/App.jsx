import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // Import the CartProvider
import ContactInfo from "./components/contactInfo";
import Cart from "./components/cart";
import Shop from "./components/shop";
import Home from "./components/Home";
import Footer from "./components/footer";
import { BsCart4 } from "react-icons/bs";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul id="navbar">
            <li>
              <Link to="/home">
                <img id="logo" src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contactInfo">Contact Info</Link>
            </li>
            <li id="cart-icon">
              <Link to="/cart">
                <BsCart4 />
              </Link>
            </li>
          </ul>
        </header>
        <main>
          <CartProvider>
            {" "}
            {/* Wrap the App content with CartProvider */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contactInfo" element={<ContactInfo />} />
            </Routes>
          </CartProvider>
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
