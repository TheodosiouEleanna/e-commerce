import React from "react";
import { Announcements } from "./Announcements";
import HeroGrid from "./HeroGrid";
import Footer from "./Footer";

export const Home = () => {
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
      <Footer />
    </>
  );
};
