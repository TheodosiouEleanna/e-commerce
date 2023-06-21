import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../productsData";
import { useLocation, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  console.log({ pathname });
  const { cartItems } = useContext(CartContext);
  const product = products.find((prod) => prod.id.toString() === id);
  console.log({ id, product });
  console.log({ cartItems });
  return <div>ProductPage</div>;
};
export default ProductPage;
