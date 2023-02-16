import React, { useState } from "react";
import { urlFor, client } from "../../lib/client";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "../../components/Product";
import { useStateContext } from "../../Context/StateContext";

const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { image, name, details, price } = product;
  const { increaseQty, decreaseQty, qty, onAdd } = useStateContext();

  return (
    <div>
      <div className="flex flex-col items-center mx-auto sm:flex-row sm:items-start gap-4  py-32 px-4 md:px-10 lg:px-24">
        <div className="flex flex-col ">
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => {
              return (
                <img
                  key={i}
                  src={urlFor(item || "Loading")}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              );
            })}
          </div>
        </div>
        <div className="max-w-[270px] sm:max-w-[300px] w-full flex flex-col gap-3">
          <h1>{name}</h1>
          <div className="flex items-center">
            <div className="flex text-orange-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <h4>Detalji:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Kolicina:</h3>
            <p className="quantity-desc flex items-center max-w-[130px] max-h-[50px]">
              <span className="minus" onClick={decreaseQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={increaseQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="buttons flex items-center gap-2">
            <button
              type="button"
              className="add-to-cart "
              onClick={() => onAdd(product, qty)}
            >
              Dodaj u korpu
            </button>
            <button
              type="button"
              className="buy-now hidden sm:block" /* onClick="" */
            >
              Kupi sada
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>Preporuka za vas</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item, i) => {
              return <Product key={i} product={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
    slug{
        current
    }
}

`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
  const productsQuery = '*[_type=="product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
      product,
    },
  };
};

export default ProductDetails;
