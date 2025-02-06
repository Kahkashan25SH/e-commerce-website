import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import ShopSlider from '../components/ShopSlider';
import { IoIosArrowForward } from 'react-icons/io';

const MyAccount = () => {
  return (
    <>

<div className='flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
        {/* Center section with links */}
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
          <Link href="/"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Home</li></Link>
          <Link href="/shop"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Shop</li></Link>
          <Link href="/product"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Product</li></Link>
          <Link href="/contact"><li className='text-[14px] md:text-[18px] font-semibold hover:text-gray-400'>Contact</li></Link>
        </ul>

        {/* Right section with icons */}
        <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold'>
         <Link href="/account"><FaRegUser className="text-base md:text-lg hover:text-gray-400" /></Link>
         <Link href="/product"><IoSearch className="text-base md:text-lg hover:text-gray-400" /></Link>
          <FaRegHeart className="text-base md:text-lg hover:text-gray-400 " />
         <Link href="/cart"><MdOutlineShoppingCart className="text-base md:text-lg hover:text-gray-400" /></Link>
        </div>
      </div>

      <div className="relative w-full h-[250px] md:h-[350px] mt-[30px]">
        {/* Background Image */}
        <Image
          src="/images/Rectangle 1.png"
          alt="insta"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        {/* Text Overlay */}
       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]px-4">
                 <Image
                   src="/images/Meubel House_Logos-05.png"
                   alt="logo"
                   width={77}
                   height={77}
                   className="mb-2"
                 />
       
                 <h1 className="text-[24px] md:text-[36px] font-bold">Account</h1>
       
                 <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
                   Home <IoIosArrowForward /> Shop
                 </p>
       
               </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0 p-4 md:py-[80px]">
        {/* Log In Section */}
        <div className="w-full md:w-[500px] p-6 md:pt-0 rounded-md  flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-4 md:mb-8 md:mt-0 text-[#000000]">Log In</h1>
          <div>
            <p className="mb-2 md:mb-4 text-[#000000] md:mt-0">Username or email address</p>
            <input
              type="email"
              name="email"
              className="w-full md:w-[400px] p-3 border border-gray-400 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mb-2 text-[#000000]">Password</p>
            <input
              type="password"
              name="password"
              className="w-full p-3 border md:w-[400px] border-gray-400 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2 mb-4">
              <input type="checkbox" className="h-4 w-4 border-gray-300" />
              <p className="text-[#000000] mt-[10px]">Remember me</p>
            </div>
            <button className=" w-[200px] border border-gray-700 px-[20px] py-[8px] text-[#000000] font-medium  rounded-xl hover:bg-[#000000] hover:text-white transition mt-[20px] mr-[20px]">
             Log In
            </button>
          <span className='text-gray-500 text-[12px] md:text-[14px] '> Lost your password?</span>
          </div>
         
        </div>

        {/* Register Section */}
        <div className="w-full md:w-[500px]   p-6 md:pt-0 rounded-md flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-4 md:mb-8 text-[#000000]">Register</h1>
          <div>
            <p className="mb-2 text-[#000000] md:mb-7">Email address</p>
            <input
              type="text"
              className="w-full md:w-[400px] p-3 border border-gray-400  rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
            <p className="text-gray-700 mb-4 md:mt-[10px]">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-gray-700 text-sm">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our privacy policy.
             
            </p>
            <span className='font-md '>privacy policy.</span>
          </div>
          <button className=" w-[200px] border border-gray-700 px-[20px] py-[8px] text-[#000000] font-medium  rounded-xl hover:bg-[#000000] hover:text-white transition mt-[30px] mr-[20px]">
             Register
            </button>
        </div>
      </div>
      <ShopSlider/>
    </>
  );
};

export default MyAccount;
