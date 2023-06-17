import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  // ! FOR DIMOS
  // Todo: Create a mock list of products
  // Todo: Create grid of products
  // Todo: Make a Card component to have show an image of products and details: category, name, unique code
  //   Todo: You could also create the contact form in the end of the home page

  //   !FOR ELEANNA
  // Todo: Create a search bar that will be filtering all the products of the grid by name and category
  // Todo: Create the cart logic of adding and removing items
  //   Todo: Add the review functionality (0-5 stars)

  return (
    <div className='mt-16'>
      Home
      <div>
        <Link to='/products'>LINK</Link>
      </div>
    </div>
  );
};
