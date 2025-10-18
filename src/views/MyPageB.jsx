import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import Photo from './../assets/imgA/Photo here.png'
import { FaAngleRight } from 'react-icons/fa';
function MyPageB() {
  return (
    <>
      <div  className='w-full h-lvh flex flex-col items-center bg-black'>
          <div style={{fontFamily: 'IBM Plex Mono'}} className='w-10/12 justify-center items-center flex gap-15 text-1xl text-[#9C9C9C] bg-[#1B1B1B] py-8 rounded-md '>
            <a href="#">Home</a>
            <a href="#">Case Studies</a>
            <a href="#">Testimonials</a>
            <a href="#">Recent work</a>
            <a href="#">Get In Touch</a>
            <div className='flex gap-5 ml-8'>
              <FaLinkedinIn className='w-5 h-min'/>
              <FaBehance className='w-5 h-min'/>
              <FaTwitter className='w-5 h-min'/>
            </div>
          </div>
      
        <div className='flex flex-row'>
          <div className="w-full justify-center h-full ml-50">
            <p style={{ fontFamily: 'Raleway' }} className="text-5xl font-semibold mb-8 mt-25 text-white">
              Sombat  Jaideemak
            </p>
            
            <div style={{fontFamily: 'IBM Plex Mono'}} className=' mr-10 mb-8 text-[#9C9C9C]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              <br />
              Nesciunt rem odit labore unde nemo omnis sequi hic sit
              <br />
              laudantium repellendus recusandae vitae ea laborum, ipsa
              <br />
              nisi eos autem.
            </div>
            <button style={{fontFamily: 'IBM Plex Mono'}} className='text-white w-75 h-15 mb-20 bg-[#3F8E00] rounded-md' >
              Let's get started <FaAngleRight className='inline-block'/>
            </button>
            <p style={{fontFamily: 'IBM Plex Mono'}} className='text-white '>
              Worked with
            </p>
            <div className='text-white'>
              aaa
            </div>
          </div>
          {/* รูป */}
            <div className='w-170 h-min mr-60 mt-15'>
                <img src={Photo} alt="" />
            </div>
          
        </div>           
      </div>
    </>
  )
}

export default MyPageB
