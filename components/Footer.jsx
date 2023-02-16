import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

import { RiLinkedinFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        {" "}
        All rights reserverd{" "}
        <a href="https://arminbabic.com/" className="hover:underline italic">
          arminbabic.com
        </a>{" "}
        2023
      </p>
      <div className="icons">
        <Link
          aria-label="Visit Github account"
          href="https://github.com/ArminBabic"
        >
          <a aria-label="Visit Github account" target="_blank">
            <div
              aria-label="Visit Github account"
              role="link"
              className="rounded-full bg-[#F4F4F0] p-1 sm:p-2 relative group hover:bg-gray-700 cursor-pointer ease-in duration-300 "
            >
              <AiFillGithub
                role="link"
                className="w-6 sm:w-7 h-6 text-[#111111] group-hover:text-white relative"
              />
            </div>
          </a>
        </Link>
        <Link
          aria-label="Visit Facebook account"
          href="https://www.facebook.com/profile.php?id=100007329615826"
        >
          <a target="_blank">
            <div
              aria-label="Visit Facebook account"
              role="link"
              className="rounded-full bg-[#F4F4F0] p-1 sm:p-2 relative group hover:bg-gray-700  cursor-pointer ease-in duration-300 "
            >
              <FaFacebook
                role="link"
                className="w-6 sm:w-7 h-6 text-[#111111] group-hover:text-white  relative"
              />
            </div>
          </a>
        </Link>

        <Link
          aria-label="Visit LinkedIn account"
          href="https://www.linkedin.com/in/armin-babic-2b2882228/"
        >
          <a target="_blank">
            <div
              aria-label="Visit LinkedIn account"
              role="link"
              className="rounded-full bg-[#F4F4F0] p-1 sm:p-2 relative group hover:bg-gray-700  cursor-pointer ease-in duration-300  "
            >
              <RiLinkedinFill
                role="link"
                className="w-6 sm:w-7 h-6 text-[#111111] group-hover:text-white  relative"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
