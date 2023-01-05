import React from "react";
import Image from "next/image";
import perfectsound from "../assets/perfect-sound.png";

const PerfectSound = () => {
  return (
    <section className="relative w-full pt-10">
      <div className="relative px-4 lg:px-24 flex flex-col-reverse justify-center md:flex-row items-center ">
        {/* left side */}
        <div>
          <div className="relative w-[270px] h-[300px] xs:w-[380px] xs:h-[420px] sm:w-[500px] sm:h-[570px]  md:w-[380px] md:h-[420px] lg:w-[500px] lg:h-[570px]  2xl:w-[700px] 2xl:h-[815px]">
            <Image
              src={perfectsound}
              alt="perfect-sound-img"
              layout="fill"
              placeholder="blur"
            />
          </div>
        </div>
        {/* rightside */}
        <div className="flex flex-col items-center md:items-start gap-6 justify-center w-full max-w-[560px]">
          <h2 className="font-bold text-3xl lg:text-5xl text-center md:text-start w-full">
            Perfect sound <br /> immersive world
          </h2>
          <p className="max-w-[300px] md:max-w-[450px] text-sm sm:text-base text-center md:text-start w-full">
            QuietComfort 35 wireless headphones II are engineered with renowned
            noise cancellation. With the Google Assistant and Amazon Alexa
            built-in, you have instant access to millions of songs, playlists
            and more—hands free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerfectSound;
