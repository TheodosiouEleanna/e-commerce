import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartModal from "./components/CartModal";
import CheckoutPage from "./components/Checkout";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductsList";
import { CartProvider } from "./context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  //Todo: Add cart to local storage
  //Todo: Footer
  //Todo:  Form
  const onCartClick = () => {
    setShowCart((prev) => !prev);
  };

  const onCloseCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Navbar showCart={showCart} onCartClick={onCartClick} />
      {showCart && <CartModal showCart={showCart} onClose={onCloseCart} />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='products' element={<ProductsList />} />
        <Route path='products/:id' element={<ProductPage />} />
        <Route path='sales' element={<ProductsList />} />
        <Route path='announcements' element={<Home />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
