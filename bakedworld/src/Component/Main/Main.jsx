import React from "react";
import Navbar from "../Navbar/Navbar";
import './main.css';
import mainbg from '..//../assets/img/mainbg.jpg';
import bonline from '../../assets/img/lineBonjour.png';
import { FaArrowRight } from "react-icons/fa";


export default function Main() {
  return (
    <>
      <div 
      className="Main-container min-h-screen" 
      style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <Navbar />
        {/* main content */}
        <div className="main-content flex flex-col justify-center items-center py-24 gap-4">
        <div name="bonjour" className="flex items-center justify-center gap-2">
            <img className=" w-6 h-1" src={bonline} alt="" />
            <h1 className="bonjour">bonjour</h1>
            <img className=" w-6 h-1" src={bonline} alt="" />
              </div>
          <h1 className="head text-6xl w-[450px] text-center">Serving Baked Goods Every Day</h1>
          <p className=" text-center w-[630px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="btn border cursor-pointer border-orange-500 bg-[rgba(207,140,11,0.5)] hover:bg-[rgba(207,140,11,0.7)] transition-colors duration-300 ease-in-out py-2 px-4 flex items-center gap-4">
            <h1 className="">Shop now</h1>
            <FaArrowRight size={20} className=" text-[#CF8C0B]"/>
         </div>
        </div>
    </div>
    </>
  );
}
