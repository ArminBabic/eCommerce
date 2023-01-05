import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>iTech</title>
      </Head>
      <header className="">
        <Navbar />
        <Toaster />
      </header>
      <main className="main-container">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
