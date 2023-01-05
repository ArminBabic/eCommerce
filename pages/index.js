import React from "react";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import FooterBanner from "../components/FooterBanner";
import Hero from "../components/Hero";
import Image from "next/image";
import bg from "../assets/bg-black.png";
import union from "../assets/union.png";

import { client } from "../lib/client";
import PerfectSound from "../components/PerfectSound";
import BateryLife from "../components/BateryLife";

const Home = ({ products, bannerData }) => {
  const featuredProducts = products.slice(0, 7);

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
      <div className="products-heading pt-24 xs:pt-4 lg:pt-32">
        <h2>Best products for you</h2>
        <p className="font-semibold text-lg">All tech in one place</p>
      </div>
      <div className="products-container">
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
