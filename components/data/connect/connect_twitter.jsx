import Image from "next/legacy/image";
import React from "react";

export default function Connect_twitter({ item }) {
  return (
    <div className="flex items-center justify-between w-full md:w-11/12 lg:w-full p-2 h-36 text-blue-900 border-2 border-blue-700 mt-4 rounded-lg">
      <div className="relative z-0 border-2 border-blue-800 rounded-full w-28 h-28 select-none overflow-hidden">
        <Image
          src={item.profile_pic}
          alt={"profile_picture"}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col w-8/12 text-xs md:text-base">
        <div className="flex justify-between items-center">
          <div className="break-all">{item.twitter}</div>
          <button className="flex items-center bg-blue-800 focus:bg-blue-500 w-24 pr-4 py-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm">
            <span>
              <div className="relative border rounded-full bg-white w-7 h-7 mx-2 select-none">
                <Image
                  src={"/twitter_logo.png"}
                  alt={"profile_picture"}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </span>{" "}
            follow
          </button>
        </div>
      </div>
    </div>
  );
}
