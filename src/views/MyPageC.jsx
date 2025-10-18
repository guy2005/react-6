import React from 'react'
import imgC01 from './../assets/imgC/imgC01.png'
import { IoIosRadioButtonOn } from 'react-icons/io';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from "react-icons/fa";
function MyPageC() {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center bg-blue-950'>
        <div style={{ fontFamily: 'Bebas Neue' }} className='gap-10 w-full justify-right flex text-3xl text-[#FFFFFF] bg-[#060135] py-5 rounded-md '>
          <a className='mr-190 ml-10' href="#">CHANINTORN  CHALERMSUK</a>
          <a className='text-lg mt-2' href="#">Work</a>
          <a className='text-lg mt-2' href="#">About</a>
          <a className='text-lg mt-2' href="#">Contact</a>
        </div>

        <div className='flex flex-row mb-50'>
          <div className="w-full justify-center h-full ml-50 ">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold mb-2 mt-15 text-white">
              HI, I AM
              <br />
              PAKHAWAT
            </p>

            <div style={{ fontFamily: 'IBM Plex Mono' }} className=' mb-6 text-[#9C9C9C]'>
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย
              <br />
              ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </div>
            <button style={{ fontFamily: 'IBM Plex Mono' }} className='text-black w-40 h-12 bg-[#7A99E9] rounded-3xl font-bold' >
              CONTACT ME <IoIosRadioButtonOn className='inline-block w-3 -mt-1 h-min ml-3' />        
            </button>
            <button className='inline-block  ml-6 bg-[#222222] text-[#7A99E9] py-3 px-3 rounded-full'>
              <FaLinkedinIn className=' w-6 h-min ' />
            </button>
            <button className='inline-block  ml-6 bg-[#222222] text-[#7A99E9] py-3 px-3 rounded-full'>
              <FaSquareGithub className=' w-6 h-min ' />
            </button>
            
            
          </div>
          {/* รูป */}
          <div className='w-200 h-min mr-50 mt-15'>
            <img className='rounded-4xl' src={imgC01} alt="" />
          </div>
        </div>
{/* --------------------------------------------------------------------------------------------*/}
         <div className='flex flex-row'>
          <div className="w-full justify-right h-full mr-90 ">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold mb-2 mt-15 text-white">
              ABOUT ME
            </p>
          </div>
          <div style={{ fontFamily: 'IBM Plex Mono' }} className=' mb-6 mr-30 text-[#9C9C9C]'>
          <div>
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย
              <br />
              ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
          </div>
          <div>
            <button style={{ fontFamily: 'IBM Plex Mono' }} className='text-black w-40 h-12 bg-[#7A99E9] rounded-3xl font-bold' >
              CONTACT ME <IoIosRadioButtonOn className='inline-block w-3 -mt-1 h-min ml-3' />        
            </button>
            <button className='inline-block  ml-6 bg-[#222222] text-[#7A99E9] py-3 px-3 rounded-full'>
              <FaLinkedinIn className=' w-6 h-min ' />
            </button>
            <button className='inline-block  ml-6 bg-[#222222] text-[#7A99E9] py-3 px-3 rounded-full'>
              <FaSquareGithub className=' w-6 h-min ' />
            </button>
          </div>
          </div>
        
      </div>

      </div>
    </>
  )
}

export default MyPageC
