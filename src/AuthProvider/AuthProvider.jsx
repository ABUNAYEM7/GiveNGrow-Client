import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import Auth from "../firebase/firebaseConfig"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const registerUser =(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth,email,pass)
    }

    const userLogIn =(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(Auth,email,pass)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(Auth,googleProvider)
    }
 
    const updateUserProfile =(updatedData)=>{
        setLoading(true)
        return updateProfile(Auth,updatedData)
    }

    const userLogOut =async ()=>{
        setLoading(true)
        try{
            await signOut(Auth)
        }catch(err){
            throw Error(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        onAuthStateChanged(Auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            console.log(currentUser)
        })
    },[user])


    const authInfo={
        registerUser,
        userLogIn,
        signInWithGoogle,
        updateUserProfile,
        userLogOut,
        user,
        loading
    }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

