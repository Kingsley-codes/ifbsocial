import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { geterror } from "@/utils/error";
import { Store } from "@/utils/store";
import Layout from "@/components/layout";
import axios from "axios";

export default function Password() {
  const router = useRouter();
  const { redirect } = router.query;
  const { data: session } = useSession();

  const { state } = useContext(Store);
  const { credentials } = state;

  useEffect(() => {
    if (
      !credentials.handles.instagram &&
      !credentials.handles.twitter &&
      !credentials.handles.email
    ) {
      router.push("/join");
    }
  }, [credentials.handles, redirect, router, session?.user]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const HandleSubmit = async ({ password }) => {
    // await sign_up(password);
    // await sign_in(password);

    router.push("/connect");
  };

  const sign_up = async (password) => {
    try {
      await axios.post("/api/auth/signup", {
        ...credentials,
        password,
      });
    } catch (err) {
      toast.error(geterror(err));
    }
  };

  const sign_in = async (password) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        handles: {
          ...credentials.handles,
        },
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(geterror(err));
    }
    return;
  };

  return (
    <Layout title="Create_Password">
      <div className="flex justify-center items-center w-full h-screen overflow-hidden">
        <motion.form
          className="relative flex flex-col justify-around py-12 p-7 md:border bg-white md:shadow-2xl w-full md:w-10/12 lg:w-1/2"
          onSubmit={handleSubmit(HandleSubmit)}
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
            Sign up <span className="text-black">- create password - 2/2</span>
          </div>
          <div className="mb-4 p-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "Password should be more than 5 characters",
                },
              })}
              autoFocus
              className="w-full mt-2"
              id="password"
            ></input>
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4 p-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-2"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === getValues("password"),
                minLength: {
                  value: 6,
                  message: "Password should be more than 5 characters",
                },
              })}
            ></input>
            {errors.confirmPassword && (
              <div className="text-red-500">
                {errors.confirmPassword.message}
              </div>
            )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === "validate" && (
                <div className="text-red-500">Password do not match</div>
              )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link href={"/join"}>
              <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#133192] hover:bg-[#2c3349] focus:bg-[#2c3349]">
                Back
              </button>
            </Link>
            <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#133192] hover:bg-[#2c3349] focus:bg-[#2c3349]">
              submit
            </button>
          </div>
        </motion.form>
      </div>
    </Layout>
  );
}
