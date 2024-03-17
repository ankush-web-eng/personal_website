"use client"
import { googleProvier, auth } from "@/config/firebase"
import { GoogleLogin } from "react-google-login"
import { signInWithPopup, signOut } from "firebase/auth"
import { Button } from "./ui/button"
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
            {isTrue && (<button onClick={onSuccess} className="text-white bg-blue-500 rounded-full space-x-2 p-1 flex items-center" ><FcGoogle size={24} /><span className="border-l pl-1">Sign In With Google</span></button>)}
            {!isTrue && (<button onClick={onLogout} className="text-white bg-blue-500 rounded-full space-x-2 p-1 flex items-center" ><span className="px-2">Sign Out</span></button>)}
        </div>)
}

