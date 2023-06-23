import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const fields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    id: "phoneNumber",
    label: "Contact Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    id: "shippingAddress",
    label: "Shipping Address",
    type: "text",
    placeholder: "Enter your shipping address",
    required: true,
  },
  {
    id: "shippingMethod",
    label: "Shipping Method",
    type: "select",
    options: [
      "Select shipping method",
      "Pickup from store",
      "Transport with delivery",
    ],
    required: true,
  },
  {
    id: "alternativeTransport",
    label: "Alternative Transport",
    type: "checkbox",
    additionalCost: "Additional cost: 5 euros",
  },
];

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [checkoutInfo, setCheckoutInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    shippingAddress: "",
    shippingMethod: "",
    alternativeTransport: false,
    showTransportDetails: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = item.sale
      ? item.price - (Math.floor(Math.random() * 11) + 5)
      : item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  const onChangeInput = (e, field) => {
    console.log(e.target.value);
    if (e.target.value === "Transport with delivery") {
      setCheckoutInfo({
        ...checkoutInfo,
        [field]: e.target.value,
        showTransportDetails: true,
      });
    } else {
      setCheckoutInfo({
        ...checkoutInfo,
        [field]: e.target.value,
        showTransportDetails: false,
      });
    }
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    clearCart();
  };

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h2 className='text-xl font-bold mb-4 flex justify-start text-[#0071BD]'>
        Checkout
      </h2>
      {formSubmitted ? (
        <div className='xl:w-[60%] lg:w-[80%] md:w-[80%] bg-white p-16 shadow flex flex-col justify-center items-center'>
          <p className='mt-4 font-bold'>
            Order Code: <span className='font-normal'>XYZ123</span>
          </p>
          <p className='mt-4 font-bold text-[#0071BD]'>
            Thank you for your order!
          </p>
        </div>
      ) : (
        <div className='xl:w-[60%] lg:w-[80%] md:w-[80%] bg-white p-16 shadow flex'>
          <div className='w-[40%]'>
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
          <form
            className='grid grid-cols-3 gap-4 gap-x-8 w-[50%] ml-auto'
            onSubmit={onClickSubmit}
          >
            <h3 className='col-span-3 font-bold text-lg text-[#0071BD]'>
              Please fill out your order info.
            </h3>
            {fields.map((field) => (
              <div className='col-span-3' key={field.id}>
                <label
                  className='block font-bold text-gray-700 text-[0.9rem] mb-1'
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    className='w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500'
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    onChange={(e) => onChangeInput(e, field.id)}
                  >
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "checkbox" ? (
                  <>
                    <input
                      className='mr-2'
                      type='checkbox'
                      id={field.id}
                      name={field.id}
                      onChange={(e) => onChangeInput(e, field.id)}
                    />
                    <span className='text-gray-500 text-sm'>
                      {field.additionalCost}
                    </span>
                  </>
                ) : (
                  <input
                    className='w-full border border-[#E9E9E9] py-1 px-3 focus:outline-none focus:border-blue-500'
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    onChange={(e) => onChangeInput(e, field.id)}
                  />
                )}
              </div>
            ))}
            <div className='mt-6 col-span-3 text-gray-500'>
              {checkoutInfo.showTransportDetails && (
                <div className='text-[#BD4E24]'>
                  <p>*Delivery cost will be 5 euros for the main land</p>
                  <p>**Delivery cost will be 8 euros for the islands</p>
                </div>
              )}
              <p className='text-[#BD4E24]'>
                It is not possible to ship abroad
              </p>
            </div>
            <div className='font-bold'>
              Subtotal:
              <span className='text-lg text-[#0071BD]  px-2'>
                {totalAmount}
              </span>
            </div>
            <div className='col-span-3 flex justify-center'>
              <button
                className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600'
                type='submit'
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
