import React, { useState } from "react";
import { Link } from "react-router-dom";
import { announcements } from "../productsData";

export const Announcements = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggleExpand = (index) => {
    setExpanded((prev) => {
      return { ...prev, [index]: !prev[index] };
    });
  };
  console.log({ expanded });
  return (
    <div className='flex flex-col items-center xl:w-[60%] md:w-[80%] bg-[#E9E9E9] mb-48'>
      <div className='flex pt-6 px-8'>
        {announcements.map((ann, index) => {
          return (
            <div className='flex flex-col '>
              <img className='object-cover w-80 h-60' src={ann.image} alt='' />
              <h3 className='mt-8 text-xl font-bold text-[#000000]'>
                {ann.title}
              </h3>
              <p className='mt-4 w-80'>
                {expanded[index]
                  ? ann.description
                  : `${ann.description.slice(0, 100)}...`}
                {!expanded[index] && (
                  <Link
                    to='/'
                    onClick={() => handleToggleExpand(index)}
                    className='text-[#3390ce]'
                  >
                    More
                  </Link>
                )}
              </p>
            </div>
          );
        })}
      </div>
      <button className='p-4 m-8 w-48 border-white text-[#3390ce] font-bold text-xl hover:bg-[#228B22] hover:text-white'>
        Learn More
      </button>
    </div>
  );
};
