import React from "react";
import Image from "next/image";
import perfectsound from "../assets/perfect-sound.png";

const PerfectSound = () => {
  return (
    <section className="relative w-full">
      <div className="relative px-24 flex items-center ">
        {/* left side */}
        <div>
          <div className="relative w-[700px] h-[815px]">
            <Image
              src={perfectsound}
              alt="perfect-sound-img"
              layout="fill"
              placeholder="blur"
            />
          </div>
        </div>
        {/* rightside */}
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-5xl">
            Perfect sound <br /> immersive world
          </h2>
          <p className="max-w-[450px]">
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
