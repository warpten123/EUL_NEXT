import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/app/auth/config";
import { deleteCookie } from "cookies-next";
import { setAuthCookie } from "../helpers/setAuthCookie";

const useAuthFirebase = () => {
  //sign up
  const createUserWithEmailPassword = async (
    signUpPayload: string,
    password: string
  ) => {
    const email = signUpPayload.split("+")[0].trim();
    const displayName = signUpPayload.split("+")[1].trim();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName,
        });
      }
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  //login
  const signInWithEmailPassword = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setAuthCookie()
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in user:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      deleteCookie('token')
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const getCurrentUser = () => {
    return auth.currentUser;
  };

  return {
    createUserWithEmailPassword,
    signInWithEmailPassword,
    getCurrentUser,
    logout,
  };
};

export default useAuthFirebase;
