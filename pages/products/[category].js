import React, { useState } from "react";
import AllProducts from "../../components/ProductsPageComponents/AllProducts";
import { client } from "../../lib/client";

const index = ({ products, bannerData }) => {
  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { category } = params;
  const query = `*[_type=="product" && category=="${category}"]`;
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

export default index;
