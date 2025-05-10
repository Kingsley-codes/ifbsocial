import Image from "next/legacy/image";
import Head from "next/head";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title ? title + " - ifbsocial" : "ifbsocial"}</title>
        <meta
          name="description"
          content="ifbsocial - build your social media to its fullest potential"
        />
        <link rel="icon" href="/ifbsocial_logo.png" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <section className="w-[100%] z-10">
        <header className="z-40 w-[100%] flex items-center justify-between fixed p-2">
          <div className="flex items-center">
            <AiOutlineMenu
              className={`w-10 text-4xl md:text-5xl font-bold hover:text-blue-600 ${
                title ? "text-blue-800" : "text-blue-300"
              }`}
              onClick={() => setOpen(!open)}
            />
            <Link href="/">
              <div className="flex items-center justify-center mx-1 md:mx-2 font-bold text-xl md:text-2xl text-white">
                <div
                  className={`${
                    title == "Join" ||
                    title == "Login" ||
                    title == "Create_Password"
                      ? "text-[#15349b]"
                      : "text-white"
                  }`}
                >
                  ifbsocial
                </div>
              </div>
            </Link>
          </div>
          <div className={`flex md:mr-4 ${title ? "hidden" : "block"}`}>
            <Link href="/login">
              <span
                className={`mr-4 hover:bg-[#2c3041ce] px-4 md:px-6 py-2 border border-white rounded-lg text-white font-normal text-sm md:text-xl`}
              >
                Login
              </span>
            </Link>
          </div>
        </header>
        <main className="z-10 w-[100%]">{children}</main>
      </section>
      <nav
        className={`absolute flex top-0 z-50 w-[100%] h-screen bg-black bg-opacity-70 ${
          open ? "block" : "hidden"
        } `}
      >
        <motion.div
          className="relative w-9/12 md:w-6/12 lg:w-3/12 h-full bg-[#12072e] text-white"
          initial={{
            x: -200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <HiX
            className="absolute right-3 text-5xl mt-4 text-white hover:text-gray-600"
            onClick={() => setOpen(!open)}
          />
        </motion.div>
        <div
          className="w-3/12 md:w-6/12 lg:w-9/12 h-full"
          onClick={() => setOpen(!open)}
        ></div>
      </nav>
    </>
  );
}
