import { createContext, useEffect, useState, useReducer } from "react";
import { useAuthState } from "../hooks/authHooks";
import { profileReducer } from "./ProfileReducer";
import {getProfile, createProfile, updateProfile} from "../firebase/firestoreServices"

export const GlobalContext = createContext({user: [], profile:[], updateProfileService: (data) => {}});

const profileInitialState = {
  username: "",
  isLoaded: false,
  error: false,
  date_quit: "",
  age: "",
  display_name: "",
  cigarrates:{
    total: "20",
    price: "0.00",
    cigarrates_per_day: "0",
  },
};

export const GlobalProvider = ({ children }) => {
  const [user, loading, error] = useAuthState()
  const [profileLoading, setProfileLoading] = useState(true)
  const [profile, dispatch] = useReducer(profileReducer, profileInitialState);
  
  useEffect(() => {
    if(!loading && user) {
      console.log("UPDATE PROFILE")
      console.log(profile)
    }
  }, [profile]);

  useEffect(() => {
    if(!loading && user) {
      setUpProfile()
    }
  }, [user]);

  const setUpProfile = async () => {
    let res =  await getProfile();
    setProfileLoading(true)
    console.log("RES", res)
    if(!res) {
      console.log("CREATE PROFILE")
      const newUser = {
        username: user.email,
        display_name: user.displayName,
        date_quit: "",
        age: "",
        cigarrates:{
          total: "20",
          price: "0.00",
          cigarrates_per_day: "0",
        }
      };
      await createProfile(newUser)
      dispatch({type: "SET_USER", payload: newUser})
    } else {
      dispatch({type: "SET_USER", payload: res})
    }
    setProfileLoading(false)
  }

  const updateProfileService = async (data) => {
    setProfileLoading(true)
    await updateProfile(data)
    dispatch({type: "UPDATE", payload: data})
    setProfileLoading(false)
  }


  return (
    <GlobalContext.Provider
      value={{
        user:[user, loading, error], profile:[profile, profileLoading], updateProfileService
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}


