import React, { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
  };

  return (
    <footer className='bg-gray-800 text-white p-8'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-1/3 flex flex-col lg:flex-row justify-between'>
          <div className='mb-4'>
            <h3 className='mb-2'>Quick Links</h3>
            <ul>
              <li>
                <a href='#'>
                  About - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </a>
              </li>
              <li>
                <a href='#'>
                  Store Locator - Nulla posuere eros ac dolor consectetur
                  eleifend.
                </a>
              </li>
              <li>
                <a href='#'>
                  FAQs - Cras fermentum nisl quis neque tincidunt volutpat.
                </a>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <h3 className='mb-2'>More Links</h3>
            <ul>
              <li>
                <a href='#'>
                  News - Sed vel purus id lectus egestas tristique vitae id
                  enim.
                </a>
              </li>
              <li>
                <a href='#'>
                  Careers - Duis feugiat nisl sed mauris pellentesque, quis
                  pretium quam accumsan.
                </a>
              </li>
              <li>
                <a href='#'>
                  Contact Us - Sed sit amet justo at neque sollicitudin
                  pharetra.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='w-full lg:w-1/3'>
          <input
            className='mb-4 w-full p-2'
            type='text'
            placeholder='First Name'
          />
          <input
            className='mb-4 w-full p-2'
            type='text'
            placeholder='Last Name'
          />
          <input className='mb-4 w-full p-2' type='email' placeholder='Email' />
          <textarea
            className='mb-4 w-full p-2'
            placeholder='Your Message'
            maxLength={200}
            value={message}
            onChange={handleInputChange}
          />
          <div className='text-sm text-right mb-4'>
            {200 - message.length} words remaining
          </div>
          <button className='py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white'>
            Submit
          </button>
        </form>
      </div>
      <div className='text-center mt-8'>
        <p>Design by Eleanna</p>
      </div>
    </footer>
  );
};

export default Footer;
