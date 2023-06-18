// CartModal.js
import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";

const CartModal = ({ showCart, onClose }) => {
  const modalRef = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (showCart) {
      document.addEventListener("click", handleOutsideClick);
      setInitialized(true);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showCart, onClose]);

  if (!initialized || !showCart) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 flex justify-end bg-black bg-opacity-50 transform ${
        showCart ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div
        className='w-96 flex flex-col bg-white shadow-lg overflow-y-auto'
        ref={modalRef}
      >
        <div className='px-4 flex justify-end'>
          <button
            onClick={onClose}
            className=' px-4 py-4 text-2xl text-[#0071BD] hover:text-[#3390ce]'
          >
            <FaTimes />
          </button>
        </div>
        <div>
          <h2 className='px-8 py-4 text-xl text-[#0071BD] font-bold'>
            Cart ({totalQuantity})
          </h2>
          {cartItems.length === 0 ? (
            <p className='px-8'>Your cart is empty.</p>
          ) : (
            <ul className='px-8 h-[70vh] overflow-scroll overflow-x-hidden'>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
        <div className='absolute w-96 bottom-0 flex justify-between items-center p-8 text-xl text-[#0071BD] font-bold'>
          <div>
            Subtotal:
            <span className='font-normal text-lg text-gray-500 px-2'>
              {totalAmount}
            </span>
          </div>
          <span className=' font-normal text-lg text-slate-950'>
            <button className='border px-4 py-2 font-bold hover:bg-[#228B22] hover:text-white'>
              Go to checkout
            </button>
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartModal;
