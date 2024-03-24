"use client"
import { googleProvier, auth } from "@/config/firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { FcGoogle } from "react-icons/fc";
import React from "react";

export const Auth = () => {

    const [isTrue,setIsTrue] = React.useState(true)

    const onSuccess = async () => {
        try {
            const response = await signInWithPopup(auth, googleProvier)
            if (response) {
                setIsTrue(false)
                console.log(auth?.currentUser?.displayName)
            }
        } catch (error) {
            alert("SignIn Failed")
        }
    }

    const onLogout = async() =>{
        try {
            const res = await signOut(auth)
            setIsTrue(true)
        } catch (error) {
            alert("Logout Successful")
        }
    }

    return (
        <div>
            {isTrue && (<button onClick={onSuccess} className="hover:bg-blue-400 pr-2 bg-white dark:bg-black rounded-full space-x-2 p-1 flex items-center border-2 border-gray-300 dark:border-gray-800" ><FcGoogle size={24} /><span className="border-l pl-1">Sign In With Google</span></button>)}
            {!isTrue && (<button onClick={onLogout} className="hover:bg-blue-400 pr-2 bg-white dark:bg-black rounded-full space-x-2 p-1 flex items-center border-2 border-gray-300 dark:border-gray-800" ><span className="px-2">Sign Out</span></button>)}
        </div>)
}

