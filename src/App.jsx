import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ContactInfo from "./components/ContactInfo";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/contactInfo'>Contact Info</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contactInfo" element={<ContactInfo />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;