import { items, user } from "@/utils/data";
import Image from "next/legacy/image";
import React, { useState } from "react";
import Tasks from "../tasks";
import Connect_instagram from "./connect_instagram";
import Connect_twitter from "./connect_twitter";

export default function Connect() {
  const [instagram, setInstagram] = useState(true);
  const [twitter, setTwitter] = useState(false);
  const [tasks, setTasks] = useState(false);

  return (
    <div className="relative w-full h-screen px-2 overflow-y-auto overflow-x-hidden">
      <div className="fixed z-50 flex items-center sm:justify-around md:justify-start w-full pb-1 bg-white">
        <button
          className={`text-bold text-sm text-blue-700 font-bold px-4 pb-2 mt-2 ml-2 ${
            twitter ? "border-b-2 border-b-blue-700" : "border-b-0"
          }`}
          onClick={() => {
            setTwitter(true);
            setInstagram(false);
            setTasks(false);
          }}
        >
          <div className="flex items-center">
            <div className="relative bg-white w-8 h-8 mr-1 border rounded-full select-none">
              <Image
                src={"/twitter_logo.png"}
                alt={"profile_picture"}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div>twitter</div>
          </div>
        </button>
        <button
          className={`text-bold text-sm text-blue-700 font-bold px-4 pb-2 mt-2 ${
            instagram ? "border-b-2 border-b-blue-700" : "border-b-0"
          }`}
          onClick={() => {
            setInstagram(true);
            setTwitter(false);
            setTasks(false);
          }}
        >
          <div className="flex items-center">
            <div className="relative w-7 h-7 mr-1 select-none">
              <Image
                src={"/instagram_logo.png"}
                alt={"profile_picture"}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div>Instagram</div>
          </div>
        </button>
        <button
          className={`text-bold text-sm text-blue-700 font-bold h-8 px-4 pb-2 mt-2 ${
            tasks ? "border-b-2 border-b-blue-700" : "border-b-0"
          }`}
          onClick={() => {
            setTasks(true);
            setTwitter(false);
            setInstagram(false);
          }}
        >
          Tasks
        </button>
      </div>
      <div className="w-full my-8 mt-10">
        {items.map((item, index) => (
          <div
            className={`w-full flex flex-col items-center justify-center ${
              instagram ? "block" : "hidden"
            }`}
            key={index}
          >
            <Connect_instagram item={item} />
          </div>
        ))}
        {items.map((item, index) => (
          <div
            className={`w-full flex flex-col items-center justify-center ${
              twitter ? "block" : "hidden"
            }`}
            key={index}
          >
            <Connect_twitter item={item} />
          </div>
        ))}
        <div
          className={`w-full flex flex-col items-center justify-center ${
            tasks ? "block" : "hidden"
          }`}
        >
          <Tasks />
        </div>
      </div>
    </div>
  );
}
