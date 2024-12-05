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
        setLoading(false)
        if(Auth.currentUser){
            return updateProfile(Auth.currentUser,updatedData)
        }else{
            setLoading(false)
            console.log('No user Login')
        }
    }

    const userLogOut =async ()=>{
        setLoading(true)
        try{
            await signOut(Auth)
            setUser(null)
        }catch(err){
            throw Error(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(Auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=> unsubscribe()
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

