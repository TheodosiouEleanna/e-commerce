import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const menuItems = [
  { text: "Home", href: "/" },
  { text: "Products", href: "/products" },
  { text: "Sales", href: "/sales" },
  { text: "Announcements", href: "/announcements" },
];

const Navbar = ({ onCartClick }) => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className='w-full h-32 shadow-md flex justify-center items-center'>
      <div className=' w-[60%] h-full flex items-center justify-between'>
        <div className='w-32 pl-4'>
          <img src='./LOGO.jpg' alt='logo' />
        </div>
        <ul className='flex h-full justify-end items-center uppercase'>
          {menuItems.map((item) => {
            return (
              <li className='p-4 text-lg text-[#228B22] font-bold hover:text-[#3390ce]'>
                <Link to={item.href}>{item.text}</Link>
              </li>
            );
          })}
          <li
            className={
              totalQuantity > 0
                ? "m-14 mt-8 text-[#0071BD] hover:text-[#3390ce] text-xl"
                : "m-14 text-[#0071BD] hover:text-[#3390ce] text-xl"
            }
          >
            <button onClick={onCartClick}>
              {totalQuantity > 0 && (
                <span className='flex justify-center items-center text-sm w-4 h-4 bg-[#228B22] text-white ml-4 rounded-full'>
                  {totalQuantity}
                </span>
              )}
              <FaShoppingCart />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
