import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/imgH/img01.png";
import img2 from "../assets/imgA/img02.png";
import img3 from "../assets/imgB/img03.png";
import img4 from "../assets/imgC/img04.png";
function Home() {
  return (
    <>
      <div
        style={{ fontFamily: "Roboto Mono" }}
        className="w-full h-lvh bg-[#91FFB2]"
      >
        {/* บน */}
        <div className="w-8/12 border-2 border-black mx-auto flex py-20 justify-between">
          {/* 1 */}
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

        {/* 2 */}
        <div className="flex ">
            <Link to="/MyPageB">
                <img src={img3} alt="" className="w-53 h-min" />
            </Link>
            <Link to="/MyPageC">
                <img src={img4} alt="" className="w-32 h-min " />
            </Link>
        </div>
        {/* 3 */}

        {/* ล่าง */}
        <div className="flex flex-col justify-center items-center text-lg">
          <span>รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น</span>
          <span>Created by NinniN SAU</span>
          <span>Copyright © 2025 WoW WoW WoW</span>
        </div>
      </div>
    </>
  );
}

export default Home;
