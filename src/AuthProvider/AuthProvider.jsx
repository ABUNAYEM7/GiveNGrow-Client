import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import Auth from "../firebase/firebaseConfig"
import Swal from "sweetalert2"

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
 
    const updateUserProfile =async (updatedData)=>{

       try{
        await updateProfile(Auth.currentUser,updatedData)
        await Auth.currentUser.reload()
        setUser({...Auth.currentUser})
       }catch{
        Swal.fire({
            title: `${err.message || err.code}`,
            text: "Thanks For Being With Us",
            icon: "warning",
            confirmButtonText: "close",
          })
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
    },[])


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

