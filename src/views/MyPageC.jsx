import React from 'react'
import imgC01 from './../assets/imgC/imgC01.png'
import { IoIosRadioButtonOn } from 'react-icons/io';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from "react-icons/fa";
import imgC02 from './../assets/imgC/imgC02.png'
function MyPageC() {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center bg-blue-950 '>
        <div style={{ fontFamily: 'Bebas Neue' }} className='gap-10 w-full justify-right flex text-3xl text-[#FFFFFF] bg-[#060135] py-5 rounded-md '>
          <a className='mr-190 ml-10' href="#">CHANINTORN  CHALERMSUK</a>
          <a className='text-lg mt-2' href="#">Work</a>
          <a className='text-lg mt-2' href="#">About</a>
          <a className='text-lg mt-2' href="#">Contact</a>
        </div>

        <div className='flex flex-row mb-50 '>
          <div className="w-2/3 justify-center h-full ml-50 ">
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
            <div className=''>
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
          {/* รูป */}
          <div className='w-200 h-min mr-50 mt-15'>
            <img className='rounded-4xl' src={imgC01} alt="" />
          </div>
        </div>
{/* --------------------------------------------------------------------------------------------*/}
        <div className='flex flex-row mb-10'>
          <div className="ml-15">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold  text-white">
              ABOUT ME
            </p>
          </div>
          <div className='flex flex-col ml-85 text-white'>           
            <div className='text-3xl mb-5'>
              ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงาน
              <br/>
              อยู่ในกรุงเทพฯกำลังมองหาโอกาสที่น่า
              <br/>
              ตื่นเต้นในการทำงานมีพื้นฐานการศึกษาด้าน
              <br/>
              วิศวกรรมซอฟต์แวร์
            </div>
            <div className='text-[#C7C7C7] mb-10'>
              ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์
              <br />
              มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ 
              <br />
              ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ
              <br />
              เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม 
              <br />                
              FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
            </div>           
            <div className='flex'>    
              <button style={{ fontFamily: 'IBM Plex Mono' }} className='text-black w-55  h-12 bg-[#7A99E9] rounded-3xl font-bold' >
                Download Resume <IoIosRadioButtonOn className='inline-block w-3 -mt-1 h-min ml-3' />
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
{/* --------------------------------------------------------------------------------------------*/}
        <div className='flex justify-center '>
          <img className='w-250 h-min mb-40 rounded-2xl' src={imgC02} alt="" />
        </div>
{/* --------------------------------------------------------------------------------------------*/}
        <div className='flex flex-row mb-10'>
          <div className="w-2/3 h-full ml-15">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold   text-white">
              MY CAPABILITIES
            </p>
          </div>
          <div className='flex flex-col  ml-15 text-[#C7C7C7]   '>           
            <div className=' mb-5'>
              ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์แบล็กเอนต์ การ ออกแบบ UX/UI ฐานข้อมูล
            </div>   
            <div className='flex flex-col text-white '>
              <div className='flex flex-row gap-5 mb-3'>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>HTML</p>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>CSS</p>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>Javascript</p>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>FLUTTER</p>
              </div>
              <div className='flex flex-row gap-5'>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>DART</p>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>IoT</p>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>REACT</p>
                <p className='border-[#484848] border-1 px-8 py-2 rounded-3xl'>DATABASE</p>
              </div>
            </div>  
          </div>
        </div>
{/* --------------------------------------------------------------------------------------------*/}
        <div className='flex flex-row mb-10'>
          <div className="w-1/2 h-full mr-37">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold  text-white">
              MY EXPERIENCE
            </p>
          </div>
          <div className='flex flex-col ml-8 text-white'>           
            <div className='text-3xl mb-5'>
              ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงาน
              <br/>
              อยู่ในกรุงเทพฯกำลังมองหาโอกาสที่น่า
              <br/>
              ตื่นเต้นในการทำงานมีพื้นฐานการศึกษาด้าน
              <br/>
              วิศวกรรมซอฟต์แวร์
            </div>
            <div className='text-[#C7C7C7] mb-10'>
              ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์
              <br />
              มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ 
              <br />
              ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ
              <br />
              เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม 
              <br />                
              FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
            </div>
          </div>
        </div>           

      </div>
    </>
  )
}

export default MyPageC
