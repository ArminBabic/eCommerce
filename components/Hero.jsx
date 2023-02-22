import React from "react";
import Image from "next/image";
import headphones from "../assets/hero-headphones.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative w-full h-[40rem] xs:h-[50rem] md:h-[38rem] px-4 md:px-6 lg:px-24 flex bg-[#191919] lg:bg-transparent pb-16 ">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center md:gap-8 lg:gap-12 xl:gap-[1rem] pt-32 ">
        {/* left side */}
        <div className="flex flex-col gap-6 sm:gap-12 sm:mt-10 text-white lg:text-black ">
          <h2 className="font-bold font-sans text-[1.5rem] sm:text-[2rem] lg:text-5xl  leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] ">
            QuietComfort <br className=" hidden md:block" /> 35 wireless
            <br className="" /> headphones II
          </h2>
          <div className="flex gap-4 sm:gap-10 items-center w-full ">
            <p className="font-bold text-xl xs:text-3xl">229.99 $</p>{" "}
            <Link href={`/products`}>
              <butoon className="font-semibold lg:text-white text-[#191919] bg-white lg:bg-[#191919] border-white lg:border-[#191919] border-2 rounded-lg px-8 xs:px-16 py-3 uppercase hover:text-white lg:hover:text-[#191919] hover:bg-black lg:hover:bg-white ease-in duration-300 cursor-pointer">
                Buy Now
              </butoon>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="relative w-56 h-72 xs:w-[330px] xs:h-[410px] lg:w-[25rem] lg:h-[31.5rem]  xl:right-40 ">
          <Image
            src={headphones}
            alt="hero-headphones"
            priority
            placeholder="blur"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
