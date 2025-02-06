
// This is my final code
// ProductPage.tsx
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

import CartIcon from "../components/CartIcon";
import ProductCard from "../components/ProductList";
import ShopSlider from "../components/ShopSlider";
import { IoIosArrowForward } from "react-icons/io";



const client = createClient({
 projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  inventory: number;
  colors: string[];
};


const ProductPage = async () => {
  // Fetch products directly inside the component during server-side rendering
  const products = await client.fetch(
    `*[_type == "product"]{ 
      _id, 
      title, 
      description, 
      price, 
      inventory, 
      image{asset->{url}} 
    }`
  );


  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="px-4  py-8 lg:my-[50px] lg:mt-0 mx-auto md:mx-0  md:w-full ">
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">

        {/* Center section with links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
          <Link href="/">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Home
            </li>
          </Link>
          <Link href="/shop">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Shop
            </li>
          </Link>
          <Link href="/account">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Account
            </li>
          </Link>

          <Link href="/contact">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Contact
            </li>
          </Link>
          <CartIcon />
        </ul>


        <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold">
          <FaRegUser className="text-base md:text-lg hover:text-gray-400" />
          <IoSearch className="text-base md:text-lg hover:text-gray-400" />
          <Link href="/blog"><FaRegHeart className="text-base md:text-lg hover:text-gray-400" /></Link>
        </div>
      </div>

      <div className="relative w-full h-[250px] md:h-[350px] mt-[30px] ">
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
        
                  <h1 className="text-[24px] md:text-[36px] font-bold">Product</h1>
        
                  <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
                    Home <IoIosArrowForward /> Shop
                  </p>
        
                </div>
      </div>

      <div className="grid gap-y-8 gap-x-6 lg:gap-x-8 lg:gap-y-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:my-[30px] ">
        {products.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ShopSlider/>
    </div>
  );
};

export default ProductPage;