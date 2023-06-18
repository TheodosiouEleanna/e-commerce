// ProductList.js
import React, { useContext } from "react";
import { products } from "../productsData";
import { CartContext } from "../context/CartContext";

function ProductsList() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
