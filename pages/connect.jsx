import Connect from "@/components/data/connect/connect";
import Data from "@/components/data/profile/data";
import Tasks from "@/components/data/tasks";
import Layout from "@/components/layout";
import Profile from "@/components/profile";
import { user } from "@/utils/data";
import { Store } from "@/utils/store";
import { useContext, useEffect, useState } from "react";

export default function Index() {
  const { state, dispatch } = useContext(Store);
  const { activities } = state;

  const [instagram_modal, setInstagram_modal] = useState();
  const [twitter_modal, setTwitter_modal] = useState();
  const [email_modal, setEmail_modal] = useState();
  const [phone_modal, setPhone_modal] = useState();

  useEffect(() => {
    setInstagram_modal(user.handles.instagram);
    setTwitter_modal(user.handles.twitter);
    setEmail_modal(user.handles.email);
    setPhone_modal(user.handles.phone_number);
  }, []);

  return (
    <Layout title="Connect">
      <div className="w-full flex items-center justify-center">
        <div className="relative flex flex-col lg:flex-row w-full h-screen overflow-hidden">
          {/*  */}

          <Profile />

          <div className="flex justify-center w-full lg:w-8/12 h-screen">
            {activities.clicks.connect ? <Connect /> : <Data />}
          </div>
          {/*  */}

          <div
            className={`absolute z-50 w-screen h-screen bg-black opacity-80 ${
              activities?.modals?.instagram ||
              activities?.modals?.twitter ||
              activities?.modals?.email ||
              activities?.modals?.phone
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              dispatch({
                type: "UPDATE_MODALS",
                payload: {
                  instagram: activities?.modals?.instagram
                    ? !activities?.modals?.instagram
                    : false,
                  twitter: activities?.modals?.twitter
                    ? !activities?.modals?.twitter
                    : false,
                  email: activities?.modals?.email
                    ? !activities?.modals?.email
                    : false,
                  phone: activities?.modals?.phone
                    ? !activities?.modals?.phone
                    : false,
                },
              });
            }}
          ></div>
        </div>

        {/*  */}

        <div
          className={`absolute z-50 w-11/12 md:w-9/12 lg:w-1/2 h-64 p-2 bg-white border rounded-lg ${
            activities?.modals?.instagram ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center mb-4 p-4">
            <div className="w-full text-xl text-center text-[#113bc2] font-semibold mb-4">
              Edit Instagram Handle{" "}
            </div>
            <input
              className="w-full md:w-9/12 md:border mt-2 ring ring-[#113bc2] border-gray-200 mb-4"
              id="instagram"
              autoFocus
              required
              value={instagram_modal}
              placeholder="e.g zander_de_claus"
              onChange={(e) => setInstagram_modal(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-end px-6">
            <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#133192] hover:bg-[#2c3349] focus:bg-[#2c3349]">
              submit
            </button>
          </div>
        </div>

        {/*  */}

        <div
          className={`absolute z-50 w-11/12 md:w-9/12 lg:w-1/2 h-64 p-2 bg-white border rounded-lg ${
            activities?.modals?.twitter ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center mb-4 p-4">
            <div className="w-full text-xl text-center text-[#113bc2] font-semibold mb-4">
              Edit Twitter Handle{" "}
            </div>
            <input
              className="w-full md:w-9/12 md:border mt-2 ring ring-[#113bc2] border-gray-200 mb-4"
              id="twitter"
              autoFocus
              required
              value={twitter_modal}
              placeholder="e.g zander_de_claus"
              onChange={(e) => setTwitter_modal(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-end px-6">
            <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#133192] hover:bg-[#2c3349] focus:bg-[#2c3349]">
              submit
            </button>
          </div>
        </div>

        {/*  */}

        <div
          className={`absolute z-50 w-11/12 md:w-9/12 lg:w-1/2 h-64 p-2 bg-white border rounded-lg ${
            activities?.modals?.email ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center mb-4 p-4">
            <div className="w-full text-xl text-center text-[#113bc2] font-semibold mb-4">
              Edit Email{" "}
            </div>
            <input
              className="w-full md:w-9/12 md:border mt-2 ring ring-[#113bc2] border-gray-200 mb-4"
              id="email"
              autoFocus
              required
              value={email_modal}
              placeholder="e.g zander_de_claus"
              onChange={(e) => setEmail_modal(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-end px-6">
            <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#133192] hover:bg-[#2c3349] focus:bg-[#2c3349]">
              submit
            </button>
          </div>
        </div>

        {/*  */}

        <div
          className={`absolute z-50 w-11/12 md:w-9/12 lg:w-1/2 h-64 p-2 bg-white border rounded-lg ${
            activities?.modals?.phone ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center mb-4 p-4">
            <div className="w-full text-xl text-center text-[#113bc2] font-semibold mb-4">
              Edit Phone number{" "}
            </div>
            <input
              className="w-full md:w-9/12 md:border mt-2 ring ring-[#113bc2] border-gray-200 mb-4"
              id="phone"
              autoFocus
              required
              value={phone_modal}
              onChange={(e) => setPhone_modal(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-end px-6">
            <button className="mb-4 px-8 py-2 border  rounded-lg text-white font-semibold bg-[#133192] hover:bg-[#2c3349] focus:bg-[#2c3349]">
              submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
