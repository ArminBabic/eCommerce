import Link from "next/link";
import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            className="product-image w-[250px] xs:w-[150px] xs:h-[150px] h-[250px] md:w-[250px] md:h-[250px]"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
