import React from 'react'
{/*import hello */}
{/*import profile */}
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import hello from './../assets/imgH/Logo.png'
function MyPageA() {
  return (
    <>
      <div style={{fontFamily: 'Monamaniac One'}} className='w-full h-lvh flex flex-col items-center bg-black'>
        {/* ส่วน 1 เมนู */}
        <div className='w-10/12 mx-auto flex mt-15 items-center'>
          <div className='flex-1 flex gap-10 text-2xl'>
            <a href="#" className='text-white'>Porfolio</a>
            <a href="#" className='text-white'>About</a>
            <a href="#" className='text-white'>Get In Touch</a>
          </div>
          <div className='flex-1 flex justify-center'>
            <img src={hello} alt="" className="w-20" />
          </div>
          <div className='flex-1 text-white flex gap-5 justify-end text-2xl'>
            <FaGithub/>
            <FaInstagramSquare/>
            <FaTwitterSquare/>
            <FaLinkedinIn/>            
          </div>
        </div>
        {/* ส่วน 2 ข้อความ */}        
        <div className='flex-col text-white items-center text-center mt-23 text-4xl'>
          <p className='mb-5'>Somrak Sudyodjing</p>
          <p className='text-[#01D5A2] mb-5'>Freelance Web Developer</p>
          <p>Based In THAILAND</p>
        </div>
        {/* ส่วน 3  */}
        <div>
          <div></div>
        </div>

                  
      </div>
    </>
  );
}

export default MyPageA
