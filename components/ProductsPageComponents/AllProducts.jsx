import React from "react";
import Product from "../Product";
const AllProducts = ({ products }) => {
  return (
    <div className="w-full pt-32 flex flex-col xs:flex-row justify-center  gap-4 xs:gap-1 xs:px-4 2xl:px-8 ">
      <aside className="w-full max-w-[150px] mt-5 ">
        <div className="px-6 md:ml-8 flex flex-col gap-1">
          <h3 className="font-semibold text-lg">Products</h3>
          <ul className="flex flex-col gap-1 font-md">
            <li>All </li>
            <li>Еаrphones</li>
            <li>Notebook</li>
            <li>Smartwatch</li>
            <li>Others</li>
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
