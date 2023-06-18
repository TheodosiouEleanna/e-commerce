// ProductList.js
import React, { useContext, useMemo, useState } from "react";
import { products } from "../productsData";
import { CartContext } from "../context/CartContext";
import TextField from "./TextField";

function ProductsList() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      // const categoryMatch = product.category
      //   .toLowerCase()
      //   .includes(searchTerm.toLowerCase());
      return nameMatch;
      // || categoryMatch;
    });
    if (filtered.length) {
      return filtered;
    }
    return [];
  }, [searchTerm]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm);
  return (
    <div className='flex justify-center  mb-48'>
      <div className=' xl:w-[60%] md:w-[80%]'>
        <div className='flex items-center m-8'>
          <span className='text-xl mr-8'>Search for products</span>
          <TextField className='h-4' onChange={onSearchChange} />
        </div>
        <h2>Product List</h2>
        <ul className='flex flex-wrap'>
          {filteredProducts.length ? (
            filteredProducts.map((item) => (
              <div className='m-2 p-2 bg-slate-400'>
                <li key={item.id}>
                  {item.name}
                  <div>{item.price}</div>
                </li>
                <button
                  className='bg-green-700'
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div>No product found.</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductsList;
