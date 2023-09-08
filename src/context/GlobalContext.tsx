import { createContext, useEffect, useState, useReducer } from "react";
import { useAuthState } from "../hooks/authHooks";
import { profileReducer } from "./ProfileReducer";

export const GlobalContext = createContext({user: [], profile:{}});

const profileInitialState = {
  username: null,
  isLoaded: false,
  error: null,
  date_quit: null,
  age: 10,
  cigarrates:{
    total: 20,
    price: 0,
    cigarrates_per_day: 0,
  },
  dispatch: () => {},
};

const useGetProfile = (username) => {
  const [profile, setProfile] = useState(profileInitialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, seUser] = useState(username)

  useEffect(() => {
    if(!loading && user) {
      setLoading(true)
      setUpProfile()
      setLoading(false)
    }
  }, [username]);

  const setUpProfile = async () => {
    const userInfo = await username 
    setProfile({username: userInfo.email, loading: false})
  }

  return [profile, loading, error, setUser]
}


export const GlobalProvider = ({ children }) => {
  const [user, loading, error] = useAuthState()
  const [profile, dispatch] = useReducer(profileReducer, profileInitialState);
  //const [setUser], profile = useGetProfile(user)
  
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
    const userInfo = await user 
    dispatch({type: "SET_USER", payload:{
      username: userInfo.email,
      loading: false,
    }})
  }

  const updateProfile = async (data) => {
    setLoading(true)
    dispatch({type: "UPDATE", payload: data})
    setLoading(false)
  }


  return (
    <GlobalContext.Provider
      value={{
        user:[user, loading, error],profile, dispatch, updateProfile
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}


