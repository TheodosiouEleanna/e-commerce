import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const menuItems = [
  { text: "Home", href: "/" },
  { text: "Products", href: "/products" },
  { text: "Sales", href: "/sales" },
  { text: "Announcements", href: "/announcements" },
];

const Navbar = () => {
  return (
    <div className='w-full h-32 shadow-md flex justify-center items-center'>
      <div className=' w-[80%] flex items-center justify-between'>
        <div className='w-32 pl-4'>
          <img src='./LOGO.jpg' alt='logo' />
        </div>
        <ul className='flex h-full justify-end items-center uppercase'>
          {menuItems.map((item) => {
            return (
              <li className='p-4 text-lg text- font-bold hover:text-[#228B22]'>
                <Link to={item.href}>{item.text}</Link>
              </li>
            );
          })}
          <li className='m-14 text-xl text-[#0071BD] hover:text-[#3390ce]'>
            <FaShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
