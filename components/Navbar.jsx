import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../Context/StateContext";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [scrollNav, setScrollNav] = useState(false);

  const [nav, setNav] = useState(false);

  const closeNavHandler = () => setNav(!nav);

  const navHandler = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 30) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    if (typeof window !== "undefined") {
      // Client-side-only code
      window.addEventListener("scroll", changeNavbar);
    }
  }, []);

  return (
    <nav
      className={
        !scrollNav
          ? "w-screen h-[80px] z-10 bg-transparent fixed drop-shadow-lg px-2 xs:px-4 lg:px-24 "
          : "w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg px-2 xs:px-4 lg:px-24"
      }
    >
      <main className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-16">
          <div className="logo">
            <Link href="/">
              <div
                className={
                  !scrollNav
                    ? "text-3xl text-white lg:text-[#191919] font-bold italic cursor-pointer"
                    : "text-3xl text-black lg:text-[#191919] font-bold italic cursor-pointer"
                }
              >
                iTech
              </div>
            </Link>
          </div>
          <ul className="hidden lg:flex  font-semibold text-lg gap-8">
            <li className="cursor-pointer hover:underline ">
              <Link href="/">Home</Link>
            </li>

            <li className="cursor-pointer hover:underline">
              <Link href={"/products/headphones"}>Headphones</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link href={"/products/speaker"}>Speakers</Link>
            </li>

            <li className="cursor-pointer hover:underline">
              <Link href="/contact">Support</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex pr-4">
          <button
            onClick={() => setShowCart(true)}
            type="button"
            className="cart-icon"
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
        <div className="lg:hidden mr-4 " onClick={navHandler}>
          {!nav ? (
            <GiHamburgerMenu
              className={
                !scrollNav
                  ? "w-8 h-8 text-white lg:text-white cursor-pointer"
                  : "w-8 h-8 text-[#191919] lg:text-white cursor-pointer"
              }
            />
          ) : (
            <AiOutlineClose className="w-8 h-8 text-[#191919] relative z-[111111] cursor-pointer" />
          )}
        </div>
      </main>
      <div
        className={
          nav
            ? "lg:hidden absolute top-0 left-0 space-y-6 p-6 flex flex-col  items-center w-full text-[#191919] h-screen bg-white ease-in-out duration-500 z-[80] "
            : "lg:hidden absolute top-0 left-[-100%] p-6 flex flex-col  items-center w-full text-[#191919] h-screen bg-white ease-in-out duration-500 z-[80]"
        }
      >
        <ul className="pt-20 text-center space-y-6 md:space-y-4 text-gray-600">
          <li
            onClick={navHandler}
            className="font-openSans font-bold text-base xs:text-xl  xs:p-1 sm:p-4 tracking-[1px]  hover:underline"
          >
            <Link href="/">Home</Link>
          </li>

          <li
            onClick={navHandler}
            className="font-openSans text-base xs:text-xl font-bold  sm:text-lg xs:p-1 sm:p-4 tracking-[1px]  hover:underline"
          >
            <Link href={"/products/headphones"}>Headphones</Link>
          </li>
          <li
            onClick={navHandler}
            className="font-openSans text-base xs:text-xl font-bold  sm:text-lg xs:p-1 sm:p-4 tracking-[1px]  hover:underline"
          >
            <Link href={"/products/speaker"}>Speakers</Link>
          </li>

          <li
            onClick={navHandler}
            className="font-openSans text-base xs:text-xl font-bold  sm:text-lg xs:p-1 sm:p-4 tracking-[1px]  hover:underline"
          >
            <Link href="/contact">Support</Link>
          </li>
        </ul>
        <div className="flex pr-4" onClick={navHandler}>
          <button
            onClick={() => setShowCart(true)}
            type="button"
            className="cart-icon"
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
