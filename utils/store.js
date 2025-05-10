import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();

const initialState = {
  credentials: Cookies.get("credentials")
    ? JSON.parse(Cookies.get("credentials"))
    : {
        referred: "",
        handles: {
          instagram: "",
          twitter: "",
          email: "",
          phone_number: "",
        },
        profile_pic: "",
        career: "",
      },

  activities: {
    clicks: {
      profile: false,
      connect: true,
      settings: false,
      followed: false,
      follow: true,
    },
    modals: {
      instagram: false,
      twitter: false,
      email: false,
      phone: false,
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_HANDLES": {
      const data = action.payload;

      Cookies.set(
        "credentials",
        JSON.stringify({
          ...state.credentials,
          handles: { ...data.handles },
          referred: data.referred,
        })
      );

      return {
        ...state,
        credentials: {
          ...state.credentials,
          handles: { ...data.handles },
          referred: data.referred,
        },
      };
    }

    case "ADD_PROFILE_PIC": {
      const profile_pic = action.payload;

      Cookies.set(
        "credentials",
        JSON.stringify({
          ...state.credentials,
          profile_pic: profile_pic,
        })
      );

      return {
        ...state,
        credentials: {
          ...state.credentials,
          profile_pic: profile_pic,
        },
      };
    }

    case "ADD_CAREER": {
      const career = action.payload;

      Cookies.set(
        "credentials",
        JSON.stringify({
          ...state.credentials,
          career: career,
        })
      );

      return {
        ...state,
        credentials: {
          ...state.credentials,
          career: career,
        },
      };
    }

    case "RESET_CREDENTIALS":
      return {
        ...state,
        credentials: {
          referred: "",
          handles: {
            instagram: "",
            twitter: "",
            email: "",
            phone_number: "",
          },
          profile_pic: "",
          career: "",
        },
      };

    // Clicks

    case "UPDATE_CLICKS": {
      const data = action.payload;

      return {
        ...state,
        activities: {
          ...state.activities,
          clicks: data,
        },
      };
    }

    // Modals

    case "UPDATE_MODALS": {
      const data = action.payload;

      return {
        ...state,
        activities: {
          ...state.activities,
          modals: data,
        },
      };
    }

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
