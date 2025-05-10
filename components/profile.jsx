import Image from "next/legacy/image";
import React, { useContext, useState } from "react";
import { FiSettings, FiPhoneCall } from "react-icons/fi";
import { BsCameraFill } from "react-icons/bs";
import { user } from "@/utils/data";
import { Store } from "@/utils/store";

export default function Profile() {
  const [image, setImage] = useState();
  const [filesKey, setFilesKey] = useState("");
  const [settingsClicked, setSettingsClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { state, dispatch } = useContext(Store);
  const { activities } = state;
  const { profile, connect } = activities.clicks;

  // Submit

  const HandleSubmit = async (e) => {
    e.preventDefault();

    // if (image && image !== credentials.profile_pic) {
    //   const uploaded = await uploadImage();

    //   if (uploaded) {
    //     await submitBio();
    //   }
    // } else {
    //   await submitCareer();
    // }

    return dispatch({
      type: "RESET_CREDENTIALS",
    });
  };

  // Grab image

  const HandleImages = (e) => {
    let img = [...e.target.files];

    setFilesKey("image");

    return setImage(img[0]);
  };

  // Upload Image

  const uploadImage = async () => {
    let img = {};
    const formData = new FormData();

    if (image) {
      formData.append("file", image);
      formData.append("upload_preset", "metamart");
      const result = await fetch(
        "https://api.cloudinary.com/v1_1/WebOfZander/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      img = result.secure_url;

      setImage(img);

      dispatch({
        type: "ADD_PROFILE_PIC",
        payload: img,
      });

      console.log(img);
    }
    return;
  };

  return (
    <div className="relative w-full lg:w-4/12 bg-[#301283] text-white p-3 md:py-5">
      <div className="absolute pl-8 right-0 flex z-50 justify-end w-1/2">
        <button
          className={`ml-3 md:ml-6 px-2  ${
            profile ? "border-b-2 border-b-blue-600" : "border-b-0"
          }`}
          onClick={() => {
            dispatch({
              type: "UPDATE_CLICKS",
              payload: {
                connect: false,
                profile: true,
              },
            });
          }}
        >
          Profile
        </button>
        <button
          className={`ml-2 md:ml-6 px-2  ${
            connect ? "border-b-2 border-b-blue-600" : "border-b-0"
          }`}
          onClick={() => {
            dispatch({
              type: "UPDATE_CLICKS",
              payload: {
                connect: true,
                profile: false,
              },
            });
          }}
        >
          Connect
        </button>
        <button
          className={`mx-2 md:mx-6 pb-1`}
          onClick={() => setSettingsClicked(true)}
        >
          <FiSettings className="text-2xl" />
        </button>
      </div>

      <div className=" flex justify-center w-full mt-14">
        {/* Profile picture component */}

        <form onSubmit={(e) => HandleSubmit(e)}>
          <div className="relative flex items-center justify-around w-44 h-44 md:w-52 md:h-52 border-4 border-blue-800 rounded-full overflow-hidden">
            {image || user.profile_pic ? (
              <div className="relative z-0 border border-blue-800 rounded-full w-44 h-44 md:w-52 md:h-52 select-none">
                <Image
                  src={image ? URL.createObjectURL(image) : user.profile_pic}
                  alt={"profile_picture"}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            ) : (
              <div
                className={`absolute top-0 z-10 flex items-center justify-center w-full h-full bg-black opacity-70 ${
                  user.profile_pic ? "hidden" : "block"
                }`}
              >
                <BsCameraFill className="text-6xl text-gray-700" />
              </div>
            )}

            <input
              className={`absolute z-20 top-0 border-none focus:ring-0 w-[300px] h-[300px] text-[#180746] -mt-8 rounded-full ${
                user.profile_pic ? "hidden" : "block"
              }`}
              key={filesKey}
              type="file"
              name="file"
              accept="image/*"
              onChange={(e) => HandleImages(e)}
            />
          </div>
          <div className="flex">
            <div
              className={`flex items-center relative mt-2 px-2 py-1 w-24 h-9 border rounded text-white text-sm font-semibold bg-[#021d79] focus:bg-[#2c3349] overflow-hidden ${
                !user.profile_pic || image ? "hidden" : "block"
              }`}
            >
              <div className="w-full text-center">Edit picture</div>
              <input
                className="absolute z-20 top-0 border-none focus:ring-0 w-[285px] h-[285px] -mt-8 bg-[#021d79] opacity-0"
                key={filesKey}
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) => HandleImages(e)}
              />
            </div>
            <div
              className={`bg-[#180746] hover:bg-blue-600 mr-1 mt-1 px-4 py-2 border-2 border-blue-800 rounded-lg text-white font-normal text-sm ${
                !image ? "hidden" : "block"
              }`}
              onClick={() => {
                setImage();
                setFilesKey("");
              }}
            >
              Cancel
            </div>
            <button
              className={`bg-[#180746] hover:bg-blue-600 mt-1 px-4 py-2 border-2 border-blue-800 rounded-lg text-white font-normal text-sm ${
                !image ? "hidden" : "block"
              }`}
            >
              Upload
            </button>
          </div>
        </form>

        {/*  */}

        <div className="relative w-full flex flex-col justify-center p-4">
          <div
            className={`font-medium ${
              user?.account_status == "Active"
                ? "text-green-500"
                : "text-red-600"
            }`}
          >
            {user?.account_status}
          </div>
          <div className="text-sm md:text-base">
            {user?.used_connect} / {user?.available_connect} connect
          </div>
          <button className="w-28 bg-blue-600 hover:bg-[#180746] px-4 py-2 mt-2 border border-blue-800 rounded-lg text-white font-normal text-sm">
            Buy connect
          </button>
          <button
            className="absolute bottom-2 right-2 text-blue-400 hover:text-blue-900 font-semibold block lg:hidden"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "show less" : "show more"}
          </button>
        </div>
      </div>

      {/*  */}

      <div className="flex justify-center">
        <div
          className={`w-full md:w-9/12 lg:w-full ${
            expanded ? "block" : "hidden lg:block"
          }`}
        >
          {/* Referral Link */}

          <div className="mt-2 flex flex-col md:flex-row md:items-center justify-between w-full">
            <div>referral link</div>
            <div className="flex items-center">
              <div className="break-all text-blue-400 lg:text-sm px-2">
                {user?.referralLink}
              </div>
              <button className="bg-[#180746] hover:bg-blue-600 px-4 py-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm">
                copy
              </button>
            </div>
          </div>

          {/* Handles */}

          <div className="mt-4 w-full">
            <div className="mt-1 md:mt-2 flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center">
                <div className="relative w-10 h-10 mx-2 select-none">
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
              <div className="flex items-center">
                <div className="break-all text-blue-400 lg:text-sm px-2 mr-2">
                  {user?.handles.instagram}
                </div>
                <button
                  className="bg-[#180746] hover:bg-blue-600 px-4 py-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm"
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_MODALS",
                      payload: {
                        instagram: true,
                        twitter: false,
                        email: false,
                        phone: false,
                      },
                    });
                  }}
                >
                  edit
                </button>
              </div>
            </div>

            {/* twitter */}

            <div className="mt-1 md:mt-2 flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center">
                <div className="relative bg-white w-10 h-10 mx-2 border rounded-full select-none">
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
              <div className="flex items-center">
                <div className="break-all text-blue-400 lg:text-sm px-2">
                  {user?.handles.twitter}
                </div>
                <button
                  className="bg-[#180746] hover:bg-blue-600 px-4 py-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm"
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_MODALS",
                      payload: {
                        instagram: false,
                        twitter: true,
                        email: false,
                        phone: false,
                      },
                    });
                  }}
                >
                  edit
                </button>
              </div>
            </div>

            {/* Email */}

            <div className="mt-1 md:mt-2 flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center">
                <div className="relative w-10 h-10 mx-2 select-none">
                  <Image
                    src={"/email_logo.png"}
                    alt={"email"}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div>Email</div>
              </div>
              <div className="flex items-center">
                <div className="flex break-all text-blue-400 lg:text-sm px-2">
                  {user?.handles.email}
                </div>
                <button
                  className="bg-[#180746] hover:bg-blue-600 px-4 py-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm"
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_MODALS",
                      payload: {
                        email: true,
                        instagram: false,
                        twitter: false,
                        phone: false,
                      },
                    });
                  }}
                >
                  edit
                </button>
                <button
                  className={`bg-[#180746] hover:bg-blue-600 px-4 py-1 ml-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm ${
                    user?.emailVerified == false ? "block" : "hidden"
                  }`}
                >
                  verify
                </button>
              </div>
            </div>

            {/* Phone number */}

            <div
              className={`mt-2 md:mt-4 flex flex-col md:flex-row md:items-center justify-between ${
                user?.handles?.phone_number ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center">
                <FiPhoneCall className="text-white w-8 h-8 mx-3" />
                <div>Phone number</div>
              </div>
              <div className="flex items-center">
                <div className="flex text-blue-400 lg:text-xs px-3">
                  {user?.handles.phone_number}
                </div>
                <button
                  className="bg-[#180746] hover:bg-blue-600 px-4 py-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm"
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_MODALS",
                      payload: {
                        instagram: false,
                        twitter: false,
                        email: false,
                        phone: true,
                      },
                    });
                  }}
                >
                  edit
                </button>
                <button
                  className={`bg-[#180746] hover:bg-blue-600 px-4 py-1 ml-1 border-2 border-blue-800 rounded-lg text-white font-normal text-sm ${
                    user?.phoneVerified == false ? "block" : "hidden"
                  }`}
                >
                  verify
                </button>
              </div>
            </div>

            {/*  */}
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
