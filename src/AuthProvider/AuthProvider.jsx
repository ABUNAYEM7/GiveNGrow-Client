import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectValue, setSelectValue] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, pass);
  };

  const userLogIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, pass);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  const updateUserProfile = async (updatedData) => {
    try {
      await updateProfile(Auth.currentUser, updatedData);
      await Auth.currentUser.reload();
      setUser({ ...Auth.currentUser });
    } catch {
      Swal.fire({
        title: `${err.message || err.code}`,
        text: "Thanks For Being With Us",
        icon: "warning",
        confirmButtonText: "close",
      });
    }
  };

  const userLogOut = async () => {
    setLoading(true);
    try {
      await signOut(Auth);
      setUser(null);
    } catch (err) {
      throw Error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        const user = { email: currentUser.email };
        axios
          .post(`https://give-ngrow-server.vercel.app/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://give-ngrow-server.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            setLoading(false);
          });
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    registerUser,
    userLogIn,
    signInWithGoogle,
    updateUserProfile,
    userLogOut,
    setSelectValue,
    selectValue,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
