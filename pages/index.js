import React from "react";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import FooterBanner from "../components/FooterBanner";
import Hero from "../components/Hero";
import Image from "next/image";
import bg from "../assets/bg-black.png";
import Link from "next/link";
import union from "../assets/union.png";

import { client } from "../lib/client";
import PerfectSound from "../components/PerfectSound";
import BateryLife from "../components/BateryLife";

const Home = ({ products, bannerData }) => {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <div>
        <div className="hidden lg:block absolute top-0 right-0 -z-10  lg:w-[31.5rem] overflow-hidden h-[719px]">
          <Image
            alt="bg-image"
            src={bg}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            priority
          />
          <Image
            alt="bg-image"
            src={union}
            layout="fill"
            objectFit="content"
            quality={100}
            placeholder="blur"
            priority
          />
        </div>
      </div>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <Hero />
      <div className="flex flex-col gap-4 sm:flex-row items-center w-full max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1160px] mx-auto mt-20 mb-10 sm:px-10 justify-between pt-24 xs:pt-4 lg:pt-32">
        <h2 className="text-2xl lg:text-4xl font-bold font-serif">
          Related Products
        </h2>
        <Link href={`/products`}>
          <butoon className="  text-center font-semibold text-[#191919] bg-white border-[#191919] border-2 rounded-2xl px-16 sm:px-16 py-3 uppercase hover:text-white hover:bg-[#191919] ease-in duration-300 cursor-pointer">
            Show All
          </butoon>
        </Link>
      </div>
      <div className="products-container max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1160px] text-center mx-auto">
        {featuredProducts?.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
      <PerfectSound />
      <BateryLife />
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
