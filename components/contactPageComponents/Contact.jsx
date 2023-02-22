import React, { useState, useRef } from "react";
import Link from "next/link";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { GiRotaryPhone, GiAlarmClock } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import emailjs from "@emailjs/browser";

const Location = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const form = useRef();

  const [errors, setErrors] = useState(false);
  const [send, setSend] = useState(false);
  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states

  const formValidty =
    fullname.length > 0 && email.includes("@") && message.length > 0;

  const sendEmail = (e) => {
    e.preventDefault();
    if (formValidty) {
      emailjs
        .sendForm("s.........", "t...........", form.current, "............")
        .then(
          (result) => {
            e.target.reset();
            setSend(true);
            setError(false);
            setErrors(false);
            setFullname("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            alert(error.text);
            setError(true);
            setSend(false);
            setErrors(false);
          }
        );
    } else {
      setErrors(true);
      setError(false);
      setSend(false);
    }
  };

  return (
    <div id="contact" className="flex justify-center bg-white py-20 ">
      <section className="w-full lg:w-[900px] xl:w-[1070px] 3xl:w-[1420px]  flex flex-col  items-center gap-8 lg:gap-8 xl:gap-2 mt-8 mb-16 px-2 xs:px-6 sm:px-8 lg:px-0">
        <h2 className="text-3xl lg:text-[3rem] font-serif font-bold mt-10">
          Contact Us
        </h2>

        <div
          data-aos="fade-up"
          className="w-[100%] sm:w-[590px] md:w-[690px] lg:w-full xl:w-[1070px]   flex flex-col items-center    rounded-lg"
        >
          <div className="antialiased  w-full rounded-lg  ">
            <div className="flex w-full  justify-center items-center ">
              <div className="flex flex-col   md:flex-row md:justify-center md:mx-auto md:space-x-2 space-y-6 md:space-y-0  gap-9 xl:gap-2 lg:pb-[42px] xl:pb-[186px]  2xl:pt-20  w-full  py-5 lg:px-3 xl:px-20  rounded-lg lg:shadow-lg text-[#191919] overflow-hidden">
                <div className="flex flex-col md:flex-1 space-y-8 w-full  ">
                  <div className="w-full">
                    <h2 className="text-lg xl:text-xl text-[#f0a92f] w-full font-md tracking-wide mb-2">
                      Contact Us
                    </h2>
                    <p className="pt-2 text-[#191919] font-bold text-2xl xl:text-3xl relative max-w-[300px]">
                      Send a Message
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4 sm:space-y-6   relative ">
                    <div className="flex  gap-2 text-sm w-full  xs:text-start">
                      <HiLocationMarker className="text-[#f0a92f] w-7 h-7 mb-1 relative" />
                      <div className="flex flex-col ">
                        <p className="font-semibold text-lg">Address</p>
                        <p className="text-sm   italic ">
                          ansldned 99,New York
                        </p>
                      </div>
                    </div>
                    <div className=" text-sm  flex  w-full   px-1 justify-start gap-3">
                      <FaEnvelope className="text-[#f0a92f] w-5 h-6 relative" />
                      <div className="flex flex-col ">
                        <p className="font-semibold text-lg">Email</p>
                        <p className="text-sm   italic ">
                          sakib.sakibovic@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className=" flex  px-1 gap-2 text-sm ">
                      <GiRotaryPhone className="text-[#f0a92f] w-6 h-6 relative" />
                      <div className="flex flex-col ">
                        <p className="font-semibold text-lg">Phone</p>
                        <p className="text-sm   italic "> +387 61 345 657</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative ">
                  <div className="relative    bg-white border-2 border-[#f0a92f] rounded-xl p-8 text-gray-600 md:w-full">
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="flex flex-col   space-y-10"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <div>
                          <label htmlFor="fullname" className="text-sm">
                            Your Name
                          </label>
                          <input
                            id="fullname"
                            type="text"
                            value={fullname}
                            onChange={(e) => {
                              setFullname(e.target.value);
                            }}
                            name="user_name"
                            className="border-b-2  w-full    outline-none  focus:border-[#f0a92f]"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-sm">
                            Your Email
                          </label>
                          <input
                            id="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            type="email"
                            className="border-b-2  w-full   outline-none  focus:border-[#f0a92f]"
                          />
                        </div>
                      </div>

                      <div className="">
                        <label htmlFor="message" className="text-sm">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          className="border-b-2  w-full py-10   outline-none  focus:border-[#f0a92f]"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full max-w-[220px]  flex items-center justify-center gap-3 self-center sm:self-start  bg-[#f0a92f] text-white hover:text-[#f0a92f] hover:bg-white border-2 border-[#f0a92f] font-bold rounded-sm xs:px-6 py-3 uppercase text-sm ease-in duration-300"
                      >
                        Send Message
                        <RiSendPlaneFill className="w-6 h-6  relative" />
                      </button>
                      {error && (
                        <div className="flex justify-center">
                          <p className="text-[12px] xs:text-base text-red-400 font-semibold relative">
                            Something went wrong!
                          </p>
                        </div>
                      )}
                      {send && (
                        <div className="flex justify-center">
                          <p className="text-green-400 font-semibold text-center">
                            Message was sent!
                          </p>
                        </div>
                      )}

                      {errors && (
                        <div className="flex justify-center">
                          <p className="text-[12px] xs:text-base text-red-400 font-semibold relative">
                            Fill in all fields!
                          </p>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-[100%] sm:w-[590px] md:w-[690px] lg:w-full xl:w-[1070px] rounded-lg"
        >
          <div className="rounded-lg relative">
            <div className="hidden w-full xl:flex justify-center items-center gap-[3.4rem] absolute  -top-28">
              <article
                data-aos="fade-down"
                data-aos-duration="2000"
                className="w-[270px] h-[250px]  bg-[#fff] border-[1px] border-[#f0a92f] shadow-xl rounded-xl flex flex-col items-center gap-4  justify-center   "
              >
                <div className="px-7 pb-4 relative">
                  <HiLocationMarker className=" text-[#f0a92f] w-10 h-10 relative" />
                </div>

                <h3 className="font-bold text-[#000] px-7 text-xl">Address</h3>
                <p className="text-base   italic ">
                  ansldned 99,New York <br />
                  United States
                </p>
              </article>
              <article
                data-aos="fade-down"
                data-aos-duration="2000"
                className="w-[270px] h-[250px]  bg-[#fff] border-[1px] border-[#f0a92f] shadow-xl rounded-xl flex flex-col items-center gap-4  justify-center   "
              >
                <div className="px-7 pb-4 relative">
                  <GiAlarmClock className=" text-[#f0a92f] w-10 h-10 relative" />
                </div>

                <h3 className="font-bold text-[#000] px-7 text-xl">
                  Working Hours
                </h3>
                <p className="text-base   italic ">
                  Mon - Fri : 09.00 - 17.00 <br /> Sat - Sun : 12.00 - 17.00
                </p>
              </article>
              <article
                data-aos="fade-down"
                data-aos-duration="2000"
                className="w-[270px] h-[250px]  bg-[#fff] border-[1px] border-[#f0a92f] shadow-xl rounded-xl flex flex-col items-center gap-4  justify-center   "
              >
                <div className="px-7 pb-4 relative">
                  <TbSocial className=" text-[#f0a92f] w-10 h-10 relative" />
                </div>

                <h3 className="font-bold text-[#000] px-7 text-xl">
                  Social Media
                </h3>
                <div className=" sm:pt-0 flex flex-row  justify-center   gap-[16px] xs:gap-10 sm:gap-6 md:gap-2">
                  <Link
                    aria-label="Visit Facebook account"
                    href="https://arminbabic.com/"
                  >
                    <a target="_blank">
                      <div
                        aria-label="Visit Facebook account"
                        role="link"
                        className="rounded-sm bg-[#fff] hover:bg-[#f0a92f]  text-white hover:border-white p-1 sm:p-2 relative group border-[#f0a92f]  cursor-pointer ease-in duration-300 "
                      >
                        <FaFacebook
                          role="link"
                          className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5  text-[#f0a92f]  group-hover:text-[#fff] relative"
                        />
                      </div>
                    </a>
                  </Link>

                  <Link aria-label="call me" href="tel:+387 61 917 739">
                    <a target="_blank">
                      <div
                        aria-label="call me"
                        role="link"
                        className="rounded-sm bg-[#fff] hover:bg-[#f0a92f]  text-white hover:border-white p-1 sm:p-2 relative group border-[#f0a92f]  cursor-pointer ease-in duration-300 "
                      >
                        <HiPhone
                          role="link"
                          className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5  text-[#f0a92f]  group-hover:text-[#fff] relative"
                        />
                      </div>
                    </a>
                  </Link>

                  <Link aria-label="Send me email" href="/">
                    <a
                      href="mailto:https://arminbabic.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        aria-label="Send me email"
                        role="link"
                        className="rounded-sm bg-white  border-[#f0a92f] hover:border-white p-1 sm:p-2 relative group hover:bg-[#f0a92f] cursor-pointer ease-in duration-300 "
                      >
                        <FaEnvelope
                          role="link"
                          className="w-5  h-5 md:w-4 md:h-4 lg:w-5 lg:h-5  text-[#f0a92f] group-hover:text-white  relative"
                        />
                      </div>
                    </a>
                  </Link>

                  <Link
                    aria-label="Visit Instagram account"
                    href="https://arminbabic.com/"
                  >
                    <a target="_blank">
                      <div
                        aria-label="Visit Instagram account"
                        role="link"
                        className="rounded-sm bg-white  border-[#f0a92f] hover:border-white p-1 sm:p-2 relative group hover:bg-[#f0a92f] cursor-pointer ease-in duration-300 "
                      >
                        <FaInstagram
                          role="link"
                          className="w-5  h-5 md:w-4 md:h-4 lg:w-5 lg:h-5  text-[#f0a92f] group-hover:text-white  relative"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=suljagica%20sokak%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="585"
              title="location map"
              loading="lazy"
              placeholder="blur"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
