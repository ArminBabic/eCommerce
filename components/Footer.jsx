import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import footerImg from "../assets/footerImg.png";

import { RiLinkedinFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-[#191919] flex flex-col mx-auto items-center text-white gap-4  mt-40 px-6">
      <div className="flex flex-col md:flex-row gap-2 lg:gap-20 items-center md:max-h-[350px] ">
        <div className=" ">
          <div className="w-[240px] h-[270px] xs:w-[300px] xs:h-[330px] sm:w-[360px] sm:h-[440px] relative bottom-[3rem] sm:bottom-[2.7rem]">
            <Image src={footerImg} layout="fill" alt="footerImg" />
          </div>
        </div>
        <div className="w-full sm:max-w-[420px] md:max-w-[500px] px-4 flex flex-col gap-6">
          <h2 className="text-white text-center md:text-start text-2xl xs:text-3xl lg:text-4xl font-bold">
            Being first has its perks
          </h2>
          <p className="w-full max-w-[370px] text-center md:text-start">
            Sign up to get more information about Bose, exclusive first looks at
            promotions, new products and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className=" border-[#191919] border-2 text-[#191919] rounded-[3rem] px-4 md:px-2 lg:px-4 py-3 "
            />
            <butoon className=" font-md text-center font-semibold text-[#191919] bg-white border-white border-2 rounded-[3rem] px-[4.5rem] sm:px-12 md:px-5 lg:px-12 py-3 uppercase hover:text-white hover:bg-[#191919] ease-in duration-300 cursor-pointer">
              Sign Up
            </butoon>
          </div>
        </div>
      </div>
      <div className="py-5 border-t-2  w-full flex flex-col items-center text-[12px] xs:text-[14px] sm:text-base">
        <p>
          {" "}
          All rights reserved{" "}
          <a href="https://arminbabic.com/" className="hover:underline italic">
            arminbabic.com
          </a>{" "}
          2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
