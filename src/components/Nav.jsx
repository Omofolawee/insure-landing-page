import React from "react";
import logo from "../Home/Images/logo.svg";
import hamburger from "../Home/Images/icon-hamburger.svg";

const nav = () => {
  return (
    <div className="flex justify-between px-12 h-[70px] items-center">
      <img src={logo} alt="" />
      <ul className="md:flex gap-8 text-gray-600 font-medium items-center hidden">
        <li>HOW WE WORK</li>
        <li>BLOG</li>
        <li>ACCOUNT</li>
        <li className=" border border-2 border-black px-4 py-2 text-black">
          VIEW PLANS
        </li>
      </ul>
      <img src={hamburger} alt="" className="md:hidden block" />
    </div>
  );
};

export default nav;
