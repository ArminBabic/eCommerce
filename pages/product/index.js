import React, { useState } from "react";
import AllProducts from "../../components/ProductsPageComponents/AllProducts";
import { client } from "../../lib/client";

const index = ({ products, bannerData }) => {
  const [categoryData, setCategoryData] = useState("all");

  const getData = (data) => {
    setCategoryData(data);
  };

  const filteredProducts = products.filter((item, index) => {
    if (categoryData === "all") {
      return item;
    } else {
      return item.category === categoryData;
    }
  });

  return (
    <div>
      <AllProducts products={filteredProducts} onChangeHandler={getData} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=="product"]`;
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
