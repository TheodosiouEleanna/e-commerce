import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartModal from "./components/CartModal";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/ProductsList";
import { CartProvider } from "./context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const onCartClick = () => {
    setShowCart((prev) => !prev);
  };

  const onCloseCart = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      <Router>
        <Navbar onCartClick={onCartClick} />
        {showCart && <CartModal showCart={showCart} onClose={onCloseCart} />}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sales' element={<Home />} />
          <Route path='/announcements' element={<Home />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
