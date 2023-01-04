import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../Context/StateContext";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container px-24 py-4">
      {/* left side */}
      <div className="flex items-center gap-16">
        <div className="logo">
          <Link href="/">
            <div className="text-3xl text-black font-bold italic">iTech</div>
          </Link>
        </div>
        <ul className="flex font-semibold text-lg gap-8">
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Notebook</li>
          <li>Support</li>
        </ul>
      </div>
      {/* right side */}
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
  );
};

export default Navbar;
