import React from 'react'
import imgC01 from './../assets/imgC/imgC01.png'
import { IoIosRadioButtonOn } from 'react-icons/io';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { PiInstagramLogoLight } from 'react-icons/pi';
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

        <div className='flex flex-row mb-20 '>
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
{/*----------------------------------------------------------------------------------------------- */}
        
        <p className='mb-15 bg-[#484848] w-11/12 h-0.5 rounded-full '></p>
{/*----------------------------------------------------------------------------------------------- */}
        <div className='flex flex-row mb-10'>
          <div className="ml-15">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold  text-white">
              ABOUT ME
            </p>
          </div>
          <div className='flex flex-col ml-85 text-white'>
            <div className='text-3xl mb-5'>
              ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงาน
              <br />
              อยู่ในกรุงเทพฯกำลังมองหาโอกาสที่น่า
              <br />
              ตื่นเต้นในการทำงานมีพื้นฐานการศึกษาด้าน
              <br />
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
          <img className='w-250 h-min mb-20 rounded-2xl' src={imgC02} alt="" />
        </div>
{/*----------------------------------------------------------------------------------------------- */}
        
        <p className='mb-15 bg-[#484848] w-11/12 h-0.5 rounded-full '></p>
{/*----------------------------------------------------------------------------------------------- */}
        <div className='flex flex-row mb-20'>
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
{/*----------------------------------------------------------------------------------------------- */}
        
        <p className='mb-15 bg-[#484848] w-11/12 h-0.5 rounded-full '></p>
{/*----------------------------------------------------------------------------------------------- */}     
        <div className='flex flex-row mb-10'>
          <div className="w-1/2 h-full  ">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold ml-35 text-white">
              MY EXPERIENCE
            </p>
          </div>
          <div className='flex flex-col ml-30 text-white w-1/2'>
            <div className='mb-5'>
              <span className='text-2xl '>Freelance Developer</span>
              <span className='ml-50 text-[#C7C7C7]'>Nov 2023 — Present </span>
              <p className='text-[#C7C7C7] mt-5'>
                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้React.jsทำงานร่วมกับทีม <br/>
                ออกแบบ UX/UIเพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจปรับปรุงความเร็วในการโหลด               
                เว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆร่วมพัฒนา
                และดูแลไลบรารีคอมโพเนนต์ภายใน องค์กร
              </p>
            </div>
            <div className='mb-15'>
              <span className='text-2xl'>Front-End Intern</span>
              <span className='ml-60 text-[#C7C7C7]'>Sep 2023 — Nov 2023  </span>
              <p className='text-[#C7C7C7] mt-5'>
                พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript<br/>
                ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG<br/>
                ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
              </p>
            </div>
          </div>
        </div>
{/*----------------------------------------------------------------------------------------------- */}
        
        <p className='mb-15 bg-[#484848] w-11/12 h-0.5 rounded-full '></p>
{/*----------------------------------------------------------------------------------------------- */}
        <div className='flex flex-row mb-10'>
          <div className="w-1/2 h-full">
            <p style={{ fontFamily: 'Bebas Neue' }} className="text-7xl font-semibold mr-40 text-white">
              LET'S CONNECT
            </p>
            <p className='text-[#C7C7C7]'>Say hello at Pakhawat@sau.ac.th</p>
            <p className='text-[#C7C7C7] mb-5'>For more info, here's myresume</p>
            <p className='flex flex-row text-[#7A99E9] gap-5'>
              <FaLinkedinIn className='w-6 h-min'/> 
              <FaSquareGithub className='w-6 h-min'/> 
              <FaXTwitter className='w-6 h-min'/> 
              <PiInstagramLogoLight className='w-6 h-min'/>
            </p>
          </div>
          <div className='flex flex-col rounded-3xl text-[#C7C7C7] w-1/2'>
            <div className='mb-5 ml-15 '>
              <span>Name</span>
              <p className='mb-5 rounded-md bg-[#060135] w-130 h-10'></p>
              <span >Email</span>
              <p className='mb-5 rounded-md bg-[#060135] w-130 h-10'></p>
              <span >Subject</span>
              <p className='mb-5 rounded-md bg-[#060135] w-130 h-10'></p>
              <span >Message</span>
              <p className='rounded-md bg-[#060135] w-130 h-50 mb-10'></p>
              <button className='bg-[#7A99E9] w-30 h-12 text-black rounded-3xl font-medium'>
                SUBMIT
              </button>              
            </div>
          </div>
        </div>
{/*----------------------------------------------------------------------------------------------- */}
        
        <p className='mb-10 bg-[#484848] w-11/12 h-0.5 rounded-full '></p>

{/*----------------------------------------------------------------------------------------------- */}
        <p className='flex justify-center text-white'>
          © 2025 Created by SAU-Dev-Team

        </p>

      </div>
    </>
  )
}

export default MyPageC
