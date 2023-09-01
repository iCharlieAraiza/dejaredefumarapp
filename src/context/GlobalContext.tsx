import { createContext, useEffect, useState } from "react";
import { useAuthState } from "../hooks/authHooks";

export const GlobalContext = createContext({user: {}});

export const GlobalProvider = ({ children }) => {
  const [user, loading, error] = useAuthState()
  const [profile, setProfile] = useState<any>({username:""})

  useEffect(() => {
    if(!loading && user) {
      setUpProfile()
    }
  }, [user]);

  useEffect(() => {
    console.log("PROFILE",profile)
  }, [profile]);

  const setUpProfile = async () => {
    const userInfo = await user.email 
    setProfile({username: userInfo})
  }


  return (
    <GlobalContext.Provider
      value={{
        user:[user, loading, error],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}


