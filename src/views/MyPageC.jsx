import React from 'react'
import imgC01 from './../assets/imgC/imgC01.png'
import { IoIosRadioButtonOn } from 'react-icons/io';
function MyPageC() {
  return (
    <>
      <div className='w-full h-lvh flex flex-col items-center bg-blue-950'>
        <div style={{ fontFamily: 'Bebas Neue' }} className='gap-10 w-full justify-right flex text-3xl text-[#FFFFFF] bg-[#060135] py-5 rounded-md '>
          <a className='mr-190 ml-10' href="#">CHANINTORN  CHALERMSUK</a>
          <a className='text-lg mt-2' href="#">Work</a>
          <a className='text-lg mt-2' href="#">About</a>
          <a className='text-lg mt-2' href="#">Contact</a>
        </div>

        <div className='flex flex-row'>
          <div className="w-full justify-center h-full ml-50 ">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold mb-2 mt-15 text-white">
              HI, I AM
              <br />
              PAKHAWAT
            </p>

            <div style={{ fontFamily: 'IBM Plex Mono' }} className=' mb-8 text-[#9C9C9C]'>
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย
              <br />
              ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </div>
            <button style={{ fontFamily: 'IBM Plex Mono' }} className='text-black w-40 h-10 mb-20 bg-[#7A99E9] rounded-3xl font-bold' >
              CONTACT ME <IoIosRadioButtonOn className='inline-block w-3 -mt-1 h-min ml-3' />
            </button>
            <p style={{ fontFamily: 'IBM Plex Mono' }} className='text-white '>
              Worked with
            </p>
            <div className='text-white'>
              aa
            </div>
          </div>
          {/* รูป */}
          <div className='w-200 h-min mr-50 mt-15'>
            <img className='rounded-4xl' src={imgC01} alt="" />
          </div>

        </div>

      </div>
    </>
  )
}

export default MyPageC
