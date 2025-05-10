import Layout from "@/components/layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Index_background from "@/components/index/index_background";

export default function Index() {
  const [indexG, setIndexG] = useState(0);
  const [indexH, setIndexH] = useState();

  const keywords = [
    "about you",
    "your potential",
    "you're valuable",
    "your worth",
    "you're good",
  ];

  useEffect(() => {
    let i = 0;
    let _i = 0;

    const HandleWords = () => {
      i = (i + 1) % keywords.length;
      setIndexG(i);
    };

    const HandleIndexH = () => {
      _i = (_i + 1) % 2;
      setIndexH(_i);
    };

    setInterval(() => {
      HandleWords();
      HandleIndexH();
    }, 5000);
  }, [keywords.length]);

  return (
    <Layout>
      <div className="relative flex items-center justify-center w-full h-screen bg-[rgb(49,5,182)] text-white overflow-hidden">
        <div
          className={`absolute w-full h-full flex items-center justify-center ${
            indexH == 1 ? "opacity-60" : "opacity-100"
          }`}
        >
          <Index_background indexH={indexH} />
        </div>
        <motion.div
          className="absolute flex items-center w-96 h-64 md:w-[900px] md:h-[550px] lg:w-[760px] lg:h-[500px] top-20 lg:top-10 right-1"
          initial={{
            y: 30,
          }}
          animate={{
            y: indexH !== 1 ? 20 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 5000,
          }}
        >
          <div className="relative w-96 h-64 md:w-[900px] md:h-[550px] lg:w-[760px] lg:h-[500px] select-none">
            <Image
              src={"/bluexito.png"}
              alt={"bluexito"}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </motion.div>
        <div className="absolute bottom-16 md:bottom-0 z-30 flex flex-col mb-14 md:mb-24 px-4 md:p-6 text-left w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Let the whole world
            {keywords.map((item, index) => (
              <motion.span
                key={index}
                className={`text-blue-400 ${
                  index !== indexG ? "hidden" : "block"
                }`}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 3,
                }}
              >
                <span className="text-white">know</span> {item}
              </motion.span>
            ))}
          </h1>
          <p className="pt-2 md:pt-4 text-base md:text-xl">
            the platform where millions of social media users
          </p>
          <p className="py-2 md:py-4 text-base md:text-xl">
            gain reach to large people of interest.
          </p>
          <div className="flex mt-2">
            <Link href="#">
              <span className="mr-4 w-40 px-4 py-2 border border-white rounded-lg text-white font-normal text-xl">
                Learn more
              </span>
            </Link>
            <Link href="/join">
              <span className="mr-4 w-40 bg-blue-500 hover:bg-[#2c3041ce] px-4 py-2 border border-white rounded-lg text-white font-normal text-xl">
                Get started
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
