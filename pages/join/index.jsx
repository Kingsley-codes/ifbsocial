import Layout from "@/components/layout";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Store } from "../../utils/store";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/legacy/image";

export default function Index() {
  const router = useRouter();
  const { redirect, ref } = router.query;
  const { data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { credentials } = state;
  const { handles } = credentials;

  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/connect");
    }

    setInstagram(handles.instagram ? handles.instagram : "");
    setTwitter(handles.twitter ? handles.twitter : "");
    setEmail(handles.email ? handles.email : "");
  }, [
    handles.email,
    handles.instagram,
    handles.twitter,
    redirect,
    router,
    session?.user,
  ]);

  const HandleNext = async (e) => {
    e.preventDefault();

    await dispatch({
      type: "ADD_HANDLES",
      payload: {
        handles: {
          instagram: instagram,
          twitter: twitter,
          email: email,
        },
        referred: ref ? ref : "",
      },
    });

    router.push("/join/password");
    return;
  };

  return (
    <Layout title="Join">
      <div className="flex justify-center items-center w-full h-screen overflow-hidden">
        <motion.form
          className="relative flex flex-col justify-around py-12 p-7 md:border bg-white md:shadow-2xl w-full md:w-10/12 lg:w-1/2"
          onSubmit={(e) => HandleNext(e)}
          initial={{
            x: 500,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          <div className="absolute top-2 left-4 text-[#3c63e6] text-right font-medium">
            Sign up <span className="text-black">- Handles - 1/2</span>
          </div>
          <div className="flex flex-col md:flex-row my-6 justify-between md:items-center">
            <label htmlFor="instagram">
              <span className="flex items-center mr-2">
                <div className="relative w-10 h-10 mx-2 select-none">
                  <Image
                    src={"/instagram_logo.png"}
                    alt={"profile_picture"}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div>Instagram:</div>
              </span>
            </label>
            <input
              className="w-full md:w-9/12 md:border mt-2 border-gray-200"
              id="instagram"
              autoFocus
              required
              value={instagram}
              placeholder="e.g zander_de_claus"
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>

          {/*  */}

          <div className="flex flex-col md:flex-row mb-6 justify-between md:items-center">
            <label htmlFor="twitter">
              <span className="flex items-center mr-2">
                <div className="relative w-10 h-10 mx-2 select-none">
                  <Image
                    src={"/twitter_logo.png"}
                    alt={"profile_picture"}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div>Twitter:</div>
              </span>
            </label>
            <input
              className="w-full md:w-9/12 md:border mt-2 border-gray-200"
              id="twitter"
              required
              value={twitter}
              placeholder="e.g zander_de_claus"
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>

          {/* Email */}

          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <label htmlFor="email">
              <span className="flex items-center mr-2">
                <div className="relative w-10 h-10 mx-2 bg-blue-800 border rounded-full select-none">
                  <Image
                    src={"/email_logo.png"}
                    alt={"email"}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div>Email:</div>
              </span>
            </label>
            <input
              className="w-full md:w-9/12 md:border mt-2 border-gray-200"
              id="email"
              required
              value={email}
              placeholder="e.g zander_de_claus"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/*  */}

          <div className="mb-4 p-4 w-full text-right">
            <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#1c46ce] hover:bg-[#2c3349] focus:bg-[#2c3349]">
              Continue
            </button>
          </div>
          <div>
            Already have an account? &nbsp;
            <Link href={`/login?redirect=${redirect || "/"}`}>
              <span className="text-blue-800 font-bold">Login</span>
            </Link>
          </div>
        </motion.form>
      </div>
    </Layout>
  );
}
