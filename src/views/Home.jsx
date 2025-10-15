import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/imgH/img01.png";
import img2 from "../assets/imgA/img02.png";
import img3 from "../assets/imgB/img03.png";
import img4 from "../assets/imgC/img04.png";
function Home() {
  return (
    <>
      <div style={{ fontFamily: "Roboto Mono" }} className="w-full h-lvh bg-[#91FFB2]">
        <div className="w-9/12  mx-auto flex py-20 justify-between">

          <div className="flex flex-col -mt-5 ">
            <div>
              <h1 className="text-5xl font-bold text-[#333333]">
                My Web Desogm by
              </h1>
              <h1 className="text-5xl font-bold text-[#333333]">
                React + TailwindCSS
              </h1>
            </div>

            <div className="mt-8 mb-4 text-xl">
              <p className="text-[#333333]">
                Lorem ipsum dolor sit amet, <br />
                Reprehenderit ratione ad, <br />
                animi magni quidem excepturi <br />
                Teneturconsectetur <br />
              </p>
            </div>
            <div className="mt-5 mb-10">
              <a
                href="#"
                className="bg-[#333333]  text-white rounded-4xl py-3 px-10 hover:bg-[#282828]"
              >
                Follow Me
              </a>
            </div>
            <div className=" flex">
              <Link to="/MypageA">
                <img className="w-65 h-min mr-5" src={img1} alt="" />
              </Link>
              <Link to="/MyPageB">
                <img className="w-65 h-auto mt-1" src={img2} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-end -mt-50">
            <Link to="/MyPageC">
              <img src={img3} alt="" className="w-47.5 h-min mr-10" />
            </Link>
            <Link to="/MyPageHome">
              <img src={img4} alt="" className="w-28.5 h-min mr-20" />
            </Link>
          </div>

        </div>
        <div className="flex flex-center justify-center -mt-15">
         <div>
              <h1 className=" text-[#333333]">
                (รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)
              </h1>
              <h1 className="text-[#333333] ml-13">
              Created by NinniN SAU
              </h1>
              <h1 className="text-[#333333] ml-4">
              Copyright © 2025 WoW WoW WoW
              </h1>
            </div>
        </div>
      </div>

    </>
  );
}

export default Home;
{/*<div
        style={{ fontFamily: "Roboto Mono" }}
        className="w-full h-lvh bg-[#91FFB2]"
      >
        บน
        <div className="w-8/12 border-2 border-black mx-auto flex py-20 justify-between">
          1 
          <div className="flex flex-col">
            <div>
              <h1 className="text-5xl font-bold text-[#333333]">
                MY web Desogm by
              </h1>
              <h1 className="text-5xl font-bold text-[#333333]">
                React + Tailwind CSS
              </h1>
            </div>
          </div>
          <div className="mt-10">
            <span className="text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Reprehenderit ratione ad, deserunt quasi, a iusto eos eligendi{" "}
              <br />
              animi magni quidem excepturi doloremque doloribus.
              Teneturconsectetur <br />
              praesentium ab vero quod. Sunt. <br />
            </span>
          </div>
          <div className="mt-5">
            <a
              href="#"
              className="bg-[#333333] text-white rounded-4xl py-4 px-8 hover:bg-[#282828]"
            >
              Follow Me
            </a>
          </div>
          <div className="ml-10 flex">
            <Link to="/MyPageHome">
                <img className="w-50 h-min mr-5" src={img1} alt="" />
            </Link>
            <Link to="/MyPageA">
                <img className="w-50 h-min" src={img2} alt="" />
            </Link>
          </div>
        </div>

        2 
        <div className="flex ">
            <Link to="/MyPageB">
                <img src={img3} alt="" className="w-53 h-min" />
            </Link>
            <Link to="/MyPageC">
                <img src={img4} alt="" className="w-32 h-min " />
            </Link>
        </div>
         3 

         ล่าง 
        <div className="flex flex-col justify-center items-center text-lg">
          <span>รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น</span>
          <span>Created by NinniN SAU</span>
          <span>Copyright © 2025 WoW WoW WoW</span>
        </div>
      </div>*/}