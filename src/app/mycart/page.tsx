
import React from 'react';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';
import ShopSlider from '../components/ShopSlider';
import { IoIosArrowForward } from 'react-icons/io';

const CartPage = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
        {/* Center section with links */}
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
          <Link href="/"><li className='text-[14px] md:text-[16px] font-semibold'>Home</li></Link>
          <Link href="/shop"><li className='text-[14px] md:text-[16px] font-semibold'>Shop</li></Link>
          <Link href="#"><li className='text-[14px] md:text-[16px] font-semibold'>About</li></Link>
          <Link href="/contact"><li className='text-[14px] md:text-[16px] font-semibold'>Contact</li></Link>
        </ul>

        {/* Right section with icons */}
        <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold'>
          <FaRegUser className="text-base md:text-lg" />
          <CiSearch className="text-base md:text-lg" />
          <CiHeart className="text-base md:text-lg" />
          <IoCartOutline className="text-base md:text-lg" />
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
        
                  <h1 className="text-[24px] md:text-[36px] font-bold">Cart</h1>
        
                  <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
                    Home <IoIosArrowForward /> Shop
                  </p>
        
                </div>
      </div>

      <div className='flex flex-col lg:flex-row pt-[30px] md:py-[60px] max-w-screen-2xl px-4 md:px-[90px]'>
        <div className='lg:w-[60%] w-full'>
          <ul className='w-full lg:w-[700px] bg-[#FFF9E5] h-[50px] flex gap-2 justify-between items-center text-[12px] md:text-[16px] font-semibold pl-[15px] md:pl-[30px] lg:pr-[20px]'>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>

          <div className='flex flex-wrap items-center justify-between w-full pt-[30px] md:py-[50px]'>
         <div className='w-[95px] h-[95px] bg-[#FBEBB5] object-fit'>   <Image src="/images/chair3.png" alt="product text-center items-center" width={90} height={90} /></div>
            <p className="w-[20%] text-[12px] md:text-[16px] ml-[5px]">Name</p>
            <p className="w-[20%] text-[12px] md:text-[16px]">Price</p>
            <div className='w-[30px] h-[30px] bg-black pr-[3px]'></div>
            <p className="w-[20%] text-[12px] md:text-[16px] ml-[1px]">Amount</p>
            <p className="w-[20%] text-[12px] md:text-[16px]">Delete</p>
          </div>
        </div>

        <div className='w-full lg:w-[320px] lg:h-[300px] bg-[#FFF9E5] lg:ml-[60px] text-center mt-4 lg:mt-0'>
          <h1 className='text-[20px] md:text-[30px] font-bold text-[#000000] pt-[10px] lg:pt-[20px]'>Cart Totals</h1>
          <div className='flex flex-col md:flex-row justify-center pt-[10px] font-semibold gap-2 md:gap-6 lg:pt-[20px]'>
            <h2 >Subtotal</h2>
            <p className='opacity-[0.5]'>Rs. 250,000.00</p>
          </div>
          <div className='flex flex-col md:flex-row justify-center pt-[10px] font-semibold gap-2 md:gap-6 lg:pt-[20px]'>
            <h2>Total</h2>
            <p className='text-[#B88E2F]'>Rs. 250,000.00</p>
          </div>
          <button className="w-[100px] md:w-[150px] text-[#000000] py-1 mb-[20px] rounded-md border border-gray-500 mt-[20px] md:mt-[40px]">
            Checkout
          </button>
        </div>
      </div>

      <ShopSlider />
    </>
  )
}

export default CartPage;

