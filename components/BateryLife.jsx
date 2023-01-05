import React from "react";
import Image from "next/image";
import baterylife from "../assets/batery-life.png";
const BateryLife = () => {
  return (
    <section className="relative w-full pt-10">
      <div className="relative px-4 lg:px-24 flex flex-col justify-center md:flex-row items-center ">
        {/* left side */}
        <div className="flex flex-col gap-6 items-center md:items-start justify-center w-full max-w-[560px]">
          <h2 className="font-bold text-3xl lg:text-5xl text-center md:text-start w-full">
            Up to 20 hours <br /> battery life
          </h2>
          <p className="max-w-[300px] md:max-w-[450px] text-sm sm:text-base text-center md:text-start w-full">
            Enjoy up to 20 hours of listening, enough time to pore through this
            entire playlist. So you can keep the music — or the quiet — going
            all day long. And when it finally runs down, a quick 15-minute
            charge gives you another 2.5 hours.
          </p>
        </div>

        {/* rightside */}
        <div>
          <div className="relative  w-[270px] h-[300px] xs:w-[380px] xs:h-[420px] sm:w-[500px] sm:h-[570px]  md:w-[380px] md:h-[420px] lg:w-[500px] lg:h-[570px]  2xl:w-[700px] 2xl:h-[815px]">
            <Image
              src={baterylife}
              alt="perfect-sound-img"
              layout="fill"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BateryLife;
