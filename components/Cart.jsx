import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../Context/StateContext";
import { urlFor } from "../lib/client";
import Image from "next/image";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  return (
    <div className="cart-wrapper relative z-30" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} products )</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShoppingCart size={200} />
            <h3>Your cart is empty.</h3>
            <Link href="/products">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shoping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems?.length >= 1 &&
            cartItems?.map((item, index) => {
              return (
                <div className="product" key={item?._id}>
                  <img
                    src={urlFor(item?.image[0]) || "loading..."}
                    className="cart-product-image"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item?.name}</h5>
                      <h4>${item?.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc flex items-center max-w-[130px] max-h-[50px]">
                          <span
                            className="minus"
                            onClick={() => {
                              toggleCartItemQuantity(item?._id, "dec");
                            }}
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num">{item?.quantity}</span>
                          <span
                            className="plus"
                            onClick={() => {
                              toggleCartItemQuantity(item?._id, "inc");
                            }}
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        className="remove-item"
                        type="button"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Total:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">
                Buy with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
