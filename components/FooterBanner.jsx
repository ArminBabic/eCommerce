import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <footer className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>
            {discount}
            {""} discount
          </p>
          <h3>{largeText1}!</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p className="mb-12">{desc}</p>
          <Link href={`/product/headphones_2`}>
            <butoon className="  font-semibold text-white bg-black border-black border-2 rounded-2xl px-16 py-3 uppercase hover:text-black hover:bg-white ease-in duration-300 cursor-pointer">
              {buttonText}
            </butoon>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image" />
      </div>
    </footer>
  );
};

export default FooterBanner;
