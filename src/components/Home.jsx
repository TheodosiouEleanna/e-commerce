import React from "react";
import { Announcements } from "./Announcements";
import HeroGrid from "./HeroGrid";

export const Home = () => {
  // ! FOR DIMOS
  // Todo: Create a mock list of products
  // Todo: Create grid of products
  // Todo: Make a Card component to have show an image of products and details: category, name, unique code
  //   Todo: You could also create the contact form in the end of the home page

  //   !FOR ELEANNA
  // Todo: Debounce with loader for search
  //   Todo: Add the review functionality (0-5 stars)
  return (
    <>
      <div className={`flex justify-center mt-4 `}>
        <HeroGrid />
      </div>
      <div className='flex mt-16 justify-center'>
        <div className='xl:w-[60%] md:w-[80%] h-96'>
          <h2 className='text-xl font-bold text-[#0071BD]'>Most popular</h2>
        </div>
      </div>
      <div className='flex mt-16 justify-center'>
        <Announcements />
      </div>
    </>
  );
};
