import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../productsData";
import { useLocation, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { cartItems } = useContext(CartContext);
  const product = products.find((prod) => prod.id.toString() === id);
  return (
    <div className='flex justify-center items-start'>
      <div className='w-1/2 mr-8'>
        <img src={product.image} alt='Product' className='w-full' />
      </div>
      <div className='w-1/2'>
        <h2 className='text-2xl font-bold mb-4'>{product?.name}</h2>
        <p className='text-gray-600 mb-4'>{}</p>
        <p className='text-gray-600 mb-4'>Price: $99.99</p>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductPage;
