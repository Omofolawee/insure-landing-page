import React from "react";
import left from "../Home/Images/bg-pattern-intro-left-desktop.svg";
import right from "../Home/Images/bg-pattern-intro-right-desktop.svg";
import picture from "../Home/Images/image-intro-desktop.jpg";
import mpicture from "../Home/Images/image-intro-mobile.jpg";
import snappy from "../Home/Images/icon-snappy-process.svg";
import prices from "../Home/Images/icon-affordable-prices.svg";
import people from "../Home/Images/icon-people-first.svg";
import facebook from "../Home/Images/icon-facebook.svg";
import twitter from "../Home/Images/icon-twitter.svg";
import pinterest from "../Home/Images/icon-pinterest.svg";
import instagram from "../Home/Images/icon-instagram.svg";
import logo from "../Home/Images/logo.svg";
import design from "../Home/Images/bg-pattern-intro-left-mobile.svg";

const Hero = () => {
  return (
    <>
      <div>
        <img src={mpicture} alt="" className="md:hidden block w-[100%]" />
      </div>
      <div className="bg-violet-950 text-white md:h-[60vh] h-[60vh] w-[100%] flex justify-center items-center  text-center ">
        <div className="">
          {/* <img
            src={design}
            alt=""
            className="absolute md:hidden md:mt-0 mt-8"
          /> */}
          <div className="">
            <h1 className="text-5xl">Humanizing your insurance.</h1>
            <p className="text-xl">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
          </div>
          <button className="mt-6 border border-2 px-4 py-2 font-semibold">
            VIEW PLANS
          </button>
        </div>
        <div className="w-[70%] mt-32 md:block hidden">
          <img src={picture} alt="" className="w-[400px]" />
        </div>
      </div>
      <div className="mt-28">
        <h1 className="font-semibold text-5xl font-serif md:text-left text-center">
          We're different
        </h1>
        <div className=" md:flex w-[100%] block text-center mt-12">
          <div className="flex flex-col gap-4 ">
            <img src={snappy} alt="bolt" className="h-[86px] w-[86px] m-auto" />
            <div className="flex flex-col gap-4 w-[90%]">
              <h1 className="font-semibold text-3xl">Snappy Process</h1>
              <p className="text-zinc-600 md:px-0 px-14">
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:mt-0 mt-12">
            <img
              src={prices}
              alt="dollar-sign"
              className="h-[86px] w-[86px] m-auto"
            />
            <div className="flex flex-col gap-4 w-[90%]">
              <h1 className="font-semibold text-3xl">Affordable Prices</h1>
              <p className="text-zinc-600 md:px-0 px-14">
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:mt-0 mt-12">
            <img
              src={people}
              alt="people"
              className="h-[86px] w-[86px] m-auto"
            />
            <div className="flex flex-col gap-4 w-[90%]">
              <h1 className="font-semibold text-3xl">People First</h1>
              <p className="text-zinc-600 md:px-0 px-14">
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:flex justify-between items-center bg-violet-950 md:h-[35vh] md:px-16 w-[100%] h-[50vh] text-center py-5">
        <div className="md:w-[45%] w-[95%] md:mt-0 mt-8">
          <h1 className="text-5xl text-white font-extrabold font-serif">
            Find out more about how we work
          </h1>
        </div>
        <h4 className="text-white border border-white px-6 py-4 md:w-[170px] w-[170px]">
          HOW WE WORK
        </h4>
      </div>

      <div className="md:flex justify-between md:mt-28 px-8 block">
        <div>
          <img src={logo} alt="" className="md:mt-0 mt-4" />
        </div>
        <div className="flex gap-6 md:mt-0 mt-4">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>

      <hr className="mt-6 " />

      <div className="md:flex md:justify-between block text-center">
        <div className="flex flex-col gap-4 mt-8">
          <div className="text-zinc-600 font-semibold">OUR COMPANY</div>
          <ul className="flex flex-col gap-2 font-semibold">
            <li>HOW WE WORK</li>
            <li>WHY INSURE?</li>
            <li>VIEW PLANS</li>
            <li>REVIEWS</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="text-zinc-600  font-semibold">HELP ME</div>
          <ul className="flex flex-col gap-2 font-semibold">
            <li>FAQ</li>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIES</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="text-zinc-600 font-semibold ">CONTACT</div>
          <ul className="flex flex-col gap-2 font-semibold">
            <li>SALES</li>
            <li>SUPPORT</li>
            <li>LIVE CHAT</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="text-zinc-600 font-semibold">OTHERS</div>
          <ul className="flex flex-col gap-2 font-semibold">
            <li>CAREERS</li>
            <li>PRESS</li>
            <li>LICENSES</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
