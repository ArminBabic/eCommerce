import Link from "next/link";
import React, { useState } from "react";
import Product from "../Product";

const AllProducts = ({ products }) => {
  const [categoryState, setCategoryState] = useState("all");
  const categoryHandler = (data) => {
    setCategoryState(data);
  };

  return (
    <div className="w-full max-w-[1420px]  pt-32 flex flex-col  xs:items-start mx-auto xs:flex-row justify-center  gap-4 xs:gap-1 xs:px-4 2xl:px-8 ">
      <aside className="w-full max-w-[150px] mt-5 ">
        <div className="px-6 md:ml-8 flex flex-col gap-1">
          <h3 className="font-semibold text-lg">Products</h3>
          <ul className="flex flex-col gap-1 font-md">
            <li className="cursor-pointer hover:translate-x-[2px] hover:italic ease-in duration-300">
              <Link href={"/products"}>All</Link>
            </li>
            <li className="cursor-pointer hover:translate-x-[2px] hover:italic ease-in duration-300">
              <Link href={"/products/headphones"}>Headphones</Link>
            </li>
            <li className="cursor-pointer hover:translate-x-[2px] hover:italic ease-in duration-300">
              <Link href={"/products/notebook"}>Notebook</Link>
            </li>
            <li className="cursor-pointer hover:translate-x-[2px] hover:italic ease-in duration-300">
              <Link href={"/products/smartwatch"}>Smartwatch</Link>
            </li>
            <li className="cursor-pointer hover:translate-x-[2px] hover:italic ease-in duration-300">
              <Link href={"/products/speaker"}>Speaker</Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="products-container">
        {products?.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
