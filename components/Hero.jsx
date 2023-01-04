import React from "react";
import Image from "next/image";
import headphones from "../assets/hero-headphones.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative w-full h-[40rem] px-24">
      <div className="flex justify-start items-center gap-[18rem] ">
        {" "}
        {/* left side */}
        <div className="flex flex-col gap-12">
          <h2 className="font-bold text-6xl leading-[4.4rem] ">
            QuietComfort
            <br /> 35 wireless
            <br /> headphones II
          </h2>
          <div className="flex gap-16 items-center">
            <p className="font-bold text-3xl">229.99 $</p>{" "}
            <Link href={`/product/headphones_2`}>
              <butoon className="font-semibold text-white bg-black border-black border-2 rounded-2xl px-16 py-3 uppercase hover:text-black hover:bg-white ease-in duration-300 cursor-pointer">
                Buy Now
              </butoon>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="relative w-[25rem] h-[34.5rem]">
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
