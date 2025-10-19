import React from 'react'
import { Link } from 'react-router-dom'
import bg1 from "../assets/imgD/bg1.png"
import bg2 from "../assets/imgD/bg2.png"
import bg3 from "../assets/imgD/bg3.png"
import brand from "../assets/imgD/brand.png"
import bg from "../assets/imgD/bg.png"
import bun1 from "../assets/imgD/bun1.png"
import bun2 from "../assets/imgD/bun2.png"
import bun3 from "../assets/imgD/bun3.png"
import bun4 from "../assets/imgD/bun4.png"
import bun5 from "../assets/imgD/bun5.png"
import bun6 from "../assets/imgD/bun6.png"
import offer from "../assets/imgD/offer.png"
import dessert1 from "../assets/imgD/dessert1.png"
import dessert2 from "../assets/imgD/dessert2.png"
import dessert3 from "../assets/imgD/dessert3.png"
import dessert4 from "../assets/imgD/dessert4.png"
import dessert5 from "../assets/imgD/dessert5.png"
import dessert6 from "../assets/imgD/dessert6.png"
import dessert01 from "../assets/imgD/dessert01.png"
import dessert02 from "../assets/imgD/dessert02.png"
import dessert03 from "../assets/imgD/dessert03.png"
import dessert001 from "../assets/imgD/dessert001.png"
import dessert002 from "../assets/imgD/dessert002.png"
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

function MyPageD() {
  // --- Data for products to make code cleaner ---
  const topProducts1 = [
    { id: 1, name: "Whold Grain Bread", price: "40 Baht", image: bun1 },
    { id: 2, name: "Whold Grain Bread", price: "40 Baht", image: bun2 },
    { id: 3, name: "Whold Grain Bread", price: "40 Baht", image: bun3 },
    { id: 4, name: "Whold Grain Bread", price: "40 Baht", image: bun4 },
    { id: 5, name: "Whold Grain Bread", price: "40 Baht", image: bun5 },
    { id: 6, name: "Whold Grain Bread", price: "40 Baht", image: bun6 },
  ];

  return (
    <>
      <div className="w-full h-[1250px]  bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="flex ml-25 mt-10">
          <Link to="/"><img src={brand} alt="" className='w-[120px] ' /></Link>
          <div className='flex items-center gap-10 text-white ml-50 text-2xl font-semibold' style={{ fontFamily: "Poppins" }}>
            <button className='text-[#E9BD8C]'>Home</button>
            <button className='hover:text-[#E9BD8C]  transition duration-400'>Blog</button>
            <button className='hover:text-[#E9BD8C]  transition duration-400'>Contact Us</button>
            <button className='hover:text-[#E9BD8C]  transition duration-400'>Service</button>
          </div>
        </div>
        <div className='flex-col ml-30 mt-60 '>
          <p className='text-[#E9BD8C] text-3xl font-medium' style={{ fontFamily: "Inter" }}>Delicious Cafe</p>
          <h1 className='text-white text-8xl leading-tight' style={{ fontFamily: "Sansita Swashed" }}>
            Sweet Treats,<br />
            Perfect Eats
          </h1>
          <div className='flex mt-40 gap-10' style={{ fontFamily: "Inter" }}>
            <button className='text-white text-xl font-semibold bg-[#933C24] px-12 py-5 flex items-center justify-centertext-white rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400' >
              Shop Now
            </button>
            <button className='text-[#E9BD8C] flex justify-center items-center text-xl font-semibold hover:text-[#933C24] transition duration-400'>Learn More</button>
          </div>
        </div>
      </div>

      {/* =========== Top Products1 Section (REVISED) =========== */}
      <div className='mt-50'>
        <p className='flex justify-center items-center text-7xl font-semibold' style={{ fontFamily: "Sansita Swashed" }}>Top Products</p>
        <div className='mt-30 px-18 flex flex-wrap justify-center gap-10'>
          {topProducts1.map((product) => (
            <div key={product.id} className="w-[560px] h-[660px] rounded-xl flex flex-col p-8" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
              <div className='h-80 flex-grow flex items-center justify-center'>
                <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className='flex-shrink-0'>
                <div className='text-white font-semibold text-3xl mt-10 flex justify-between items-center' style={{ fontFamily: "Inter" }}>
                  <p>{product.price}</p>
                  <span className='font-normal border-2 p-1 rounded-full px-5 cursor-pointer'>i</span>
                </div>
                <div className='text-white font-semibold text-3xl mt-10 flex justify-between items-end' style={{ fontFamily: "Inter" }}>
                  <h1 className='leading-tight'>
                    {product.name.split(" ").map((word, index) => (
                      <React.Fragment key={index}>{word}<br /></React.Fragment>
                    ))}
                  </h1>
                  <button className='bg-[#933C24] px-4 py-2 rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ======================================================= */}


      <div className="mt-50 w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${offer})` }}>
        <h2 className="text-[#933C24] text-6xl font-semibold mb-10 tracking-widest leading-19" style={{ fontFamily: "Sansita Swashed" }}>
          20% Off Your <br />
          <span className='ml-5 '>First Order</span>
        </h2>
        <p className="text-[#5D5D5D] text-center text-2xl mt-5" style={{ fontFamily: "Inter" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Voluptatibus sed tempore distinctio, <br />
          minima nihil incidunt amet soluta cupiditate magnam?
        </p>
        <button className="font-semibold text-2xl mt-23 bg-[#933C24] text-white px-8 py-4 rounded-xl hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400">
          Learn More
        </button>
      </div>

      <div className='mt-50'>
        <p className='flex justify-center items-center text-7xl font-semibold' style={{ fontFamily: "Sansita Swashed" }}>Explore More</p>
      </div>
      <div className='mt-30 text-[#5D5D5D] flex justify-center items-center text-3xl font-semibold gap-20' style={{ fontFamily: "Poppins" }}>
        <div className="relative inline-block">
          <span>Cake</span>
          <div className="absolute left-1/2 translate-x-[-50%] w-20 h-2 bg-[#8B3E2F] rounded-full"></div>
        </div>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Muffins
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Croissant
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Bread
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Tart
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Favorite
        </h1>
      </div>

      <div className="ml-10 mr-10 h-[2px] bg-[#D9D9D9] opacity-50 mt-5"></div>

      <div className='mt-50 gap-10 flex ml-22 '>
        <img src={dessert1} alt="" className='w-[550px] ' />
        <img src={dessert2} alt="" className='w-[550px] ' />
        <img src={dessert3} alt="" className='w-[550px] ' />
      </div>
      <div className='mt-10 gap-10 flex ml-22 '>
        <img src={dessert4} alt="" className='w-[550px] ' />
        <img src={dessert5} alt="" className='w-[550px] ' />
        <img src={dessert6} alt="" className='w-[550px] ' />
      </div>

      <div className="mt-50 w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bg2})` }}>
        <h2 className="text-white text-7xl font-semibold mb-10 tracking-widest leading-19" style={{ fontFamily: "Sansita Swashed" }}>
          About us
        </h2>
        <p className="text-[#B9B9B9] text-center text-2xl mt-5" style={{ fontFamily: "Inter" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Voluptatibus sed tempore distinctio, <br />
          minima nihil incidunt amet soluta cupiditate magnam?
        </p>
        <button className="font-semibold text-2xl mt-23 bg-[#933C24] text-white px-8 py-4 rounded-xl hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400">
          Read More
        </button>
      </div>

      <div className='mt-40'>
        <p className='flex justify-center items-center text-7xl font-semibold' style={{ fontFamily: "Sansita Swashed" }}>Featured Treats</p>
      </div>
      <div className='flex justify-center items-center mt-40 gap-10'>
        <div className='flex-col '>
          <img src={dessert01} alt="" className='w-[500px]' />
          <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
            <p>Puff Pastry </p> <span>8 Baht</span>
          </div>
        </div>
        <div className='flex-col '>
          <img src={dessert02} alt="" className='w-[500px]' />
          <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
            <p>Doughnuts </p> <span>8 Baht</span>
          </div>
        </div>
        <div className='flex-col '>
          <img src={dessert03} alt="" className='w-[500px]' />
          <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
            <p>Brownies </p> <span>8 Baht</span>
          </div>
        </div>
      </div>

      {/* =========== Footer Section (REVISED) =========== */}
      <div className="mt-50 w-full min-h-[1000px] bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${bg3})` }}>
        <div className="flex-grow"> {/* This wrapper will push the copyright down */}
          <div className='px-30 flex justify-between items-center'>
            <img src={brand} alt="" className='w-[150px] pt-20' />
            <div className='flex justify-center items-center mt-12 text-[#E9BD8D] gap-8' style={{ fontFamily: "Inter" }}>
              <button className='text-2xl font-semibold hover:text-[#933C24] transition duration-400'>Follow us</button>
              <div className='flex gap-5 text-4xl '>
                <span className='hover:text-[#933C24] transition duration-400 cursor-pointer'> <FaFacebook /> </span>
                <span className='hover:text-[#933C24] transition duration-400 cursor-pointer'> <FaPinterest /> </span>
                <span className='hover:text-[#933C24] transition duration-400 cursor-pointer'> <IoLogoWhatsapp /> </span>
                <span className='hover:text-[#933C24] transition duration-400 cursor-pointer'> <AiFillInstagram /> </span>
              </div>
            </div>
          </div>

          <div className="mx-35 h-[2px] bg-[#E9BD8D] mt-8"></div>

          {/* --- 3 Columns Content (REVISED FOR BETTER ALIGNMENT) --- */}
          <div className='flex justify-between mt-25 px-35 text-white' >

            {/* Column 1: About Us */}
            <div className='flex flex-col w-1/3'>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>About Us</span>
              <span className='font-semibold text-3xl leading-loose'> (02) 807-4500 </span>
              <span className=' text-3xl leading-loose' style={{ fontFamily: "Poppins" }}>
                info@sau.ac.th  <br />
                19/1 Phetkasem Road <br />
                Nongkham Bangkok <br />
                10160
              </span>
            </div>

            {/* Column 2: Explore */}
            <div className='flex flex-col w-1/4'>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>Explore</span>
              <div className='flex flex-col text-3xl leading-loose font-semibold' style={{ fontFamily: "Poppins" }}>
                <a href="#" className="hover:text-[#E9BD8C]">Home</a>
                <a href="#" className="hover:text-[#E9BD8C]">Blog</a>
                <a href="#" className="hover:text-[#E9BD8C]">Contact Us</a>
                <a href="#" className="hover:text-[#E9BD8C]">Services</a>
              </div>
            </div>

            {/* Column 3: Recent News */}
            <div className='flex flex-col w-1/3'>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>Recent News</span>
              <div className='flex flex-col gap-8'>
                <div className='flex items-center' style={{ fontFamily: "Poppins" }}>
                  <img src={dessert001} alt="news 1" className='w-[130px]' />
                  <div className='flex flex-col ml-5 text-xl leading-relaxed'>
                    <span className='text-[#E9BD8C] font-semibold'>June 14,2025</span>
                    <span className='text-2xl'>Puff pastry bliss.</span>
                  </div>
                </div>
                <div className='flex items-center' style={{ fontFamily: "Poppins" }}>
                  <img src={dessert002} alt="news 2" className='w-[130px]' />
                  <div className='flex flex-col ml-5 text-xl leading-relaxed'>
                    <span className='text-[#E9BD8C] font-semibold'>June 14,2025</span>
                    <span className='text-2xl'>Puff pastry bliss.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Copyright at the bottom --- */}
        <div className='flex-shrink-0 pb-10'>
          <span className='flex justify-center items-center text-[#737373] text-3xl font-semibold' style={{ fontFamily: "Inter" }}>
            © 2025 Bake House. All rights reserved
          </span>
        </div>
      </div>
      {/* ======================================================= */}
    </>
  )
}
export default MyPageD