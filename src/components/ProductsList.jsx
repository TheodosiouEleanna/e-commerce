// ProductList.js
import React, { useContext, useMemo, useState } from "react";
import { products } from "../productsData";
import { CartContext } from "../context/CartContext";
import TextField from "./TextField";
import ProductItem from "./ProductItem";

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
        <div className='flex justify-center flex-col items-center m-8'>
          <div className='text-xl font-bold text-[#0071BD]'>
            Search for products
          </div>
          <TextField
            className='h-4 mt-4 '
            onChange={onSearchChange}
            placeholder='Search here...'
          />
        </div>
        <h2>Product List</h2>
        <ul className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
          {filteredProducts.length ? (
            filteredProducts.map((item) => (
              <ProductItem item={item} handleAddToCart={handleAddToCart} />
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
