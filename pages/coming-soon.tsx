import React from "react";
import Head from "next/head";
import Image from "next/image";
const CoomingSoon = () => {
  return (
    <>
      <Head>
        <title>Armin Babic</title>

        <meta
          name="description"
          content="Turn designs into reality , logos, UI/UX, apps &
websites, social media, magazines & banners."
        />
        <link rel="icon" href="/a.png" />

        <meta
          content="website,websites,web developer,developer,developers,coding,code,programming,java script,web services,react,next.js,development,services,privacy police,cookies,cookie."
          name="keywords"
        ></meta>
      </Head>

      <main>
        <div>
          <div className="w-full h-[630px]">
            <div className="absolute top-0 -z-10 bg-black/40  w-full overflow-hidden h-[750px] ">
              <Image
                alt="bg-image"
                src="/commingBg.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                placeholder="blur"
                blurDataURL="/commingBg.jpg"
                priority
                className="mix-blend-overlay"
              />
              <div className="absolute text-center bottom-72 lg:bottom-60 font-serif text-white text-[2rem] xs:text-[3rem] sm:text-[4rem] lg:text-[6rem] font-bold  mx-auto  left-0 right-0 w-[280px] xs:w-[400px] sm:w-[640px] lg:w-[700px]">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CoomingSoon;
