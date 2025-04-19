import React, { useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../auth/config";

const useLoggedUser = () => {
  const [loggedUser, setLoggedUser] = React.useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user);
      } else {
        setLoggedUser(null);
      }
    });

  
    return () => unsubscribe();
  }, []);

  return loggedUser; 
};

export default useLoggedUser;
