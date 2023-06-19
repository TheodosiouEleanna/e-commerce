import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ item, handleAddToCart }) => {
  console.log(item, item.title);
  return (
    <div
      key={item.id}
      className='m-4 p-8 pt-0 flex flex-col h-[26rem] border bg-[#FFFFFF] border-[#E9E9E9] hover:border-[#228B22]'
    >
      <Link to={`/products/${item.id}`}>
        <div className='flex justify-center h-[16rem] relative'>
          <img
            src={item.image}
            alt='product1'
            className='object-cover w-full h-full'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-10' />
        </div>
        <div className='flex flex-col items-center pt-4'>
          <h3 className='text-lg  text-[#0071BD]'>{item.name}</h3>
          <p>{item.description}</p>
          <p className='font-bold'>{item.price}$</p>
        </div>
        <div className='flex justify-around mt-8'>
          <button
            className=' w-24 border bg-[#E9E9E9] text-base font-bold hover:bg-[#228B22] hover:text-white'
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
          <button
            className='w-24 border bg-[#E9E9E9] text-base font-bold hover:bg-[#228B22] hover:text-white'
            onClick={() => {}}
          >
            Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
