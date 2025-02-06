import React from 'react';
import Image from 'next/image';

const Slider = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap bg-[#FAFAFA] w-full lg:w-[1440px] h-auto lg:h-[100px] mt-[40px] justify-between sm:justify-around items-center px-4 sm:px-0">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 sm:gap-10 font-semibold text-start items-center w-full sm:w-auto justify-center sm:justify-start">
      <Image
              src="/images/Vector (1).png"
              alt="adjustment"
              width={25}
              height={25}
            />
        <p>Filter</p>
        <Image
                src="/images/Vector (2).png"
                alt="vector"
                width={16.36}
                height={16.36}
              />
        <Image
                src="/images/Vector (3).png"
                alt="vector"
                width={21}
                height={19.5}
              />
        <p className="text-center sm:text-left">| Showing 1–16 of 32 results</p>
      </div>

      {/* Show and Sort Section */}
      <div className="flex flex-wrap gap-4 font-semibold items-center justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
        <p>Show</p>
        <div className="w-[40px] h-[40px] bg-white text-black flex justify-center items-center">
          16
        </div>
        <p>Sort by</p>
        <div className="w-[150px] h-[50px] bg-white flex justify-center items-center">
          default
        </div>
      </div>
    </div>
  );
};

export default Slider;



