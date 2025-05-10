import Link from "next/link";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { geterror } from "../utils/error";

export default function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        handles: {
          instagram: email,
          twitter: email,
          tik_tok: email,
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
    <Layout title="Login">
      <div className="flex justify-center items-center h-screen w-full">
        <form
          className="flex flex-col justify-around md:border bg-white md:shadow-2xl py-12 p-7 w-full md:w-10/12 lg:w-1/2"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="mb-4 text-lg text-[#3c63e6] font-medium">Sign in</h1>
          <div className="mb-4 p-4">
            <label htmlFor="email">Handle </label>
            <input
              type="email"
              className="w-full mt-2"
              id="email"
              autoFocus
              {...register("email", {
                required: "Please enter your handle",
              })}
            ></input>
            {errors.email && (
              <div className="text-red-500 py-2">{errors.email.message}</div>
            )}
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
              className="w-full mt-2"
              id="password"
            ></input>
            {errors.password && (
              <div className="text-[#de1212]">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4 p-4 text-right">
            <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#133192] hover:bg-[#2c3349] focus:bg-[#2c3349]">
              Login
            </button>
          </div>
          <div>
            Don&apos;t have an account? &nbsp;
            <Link href={`/join?redirect=${redirect || "/"}`}>
              <span className="text-blue-800 font-bold">Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
