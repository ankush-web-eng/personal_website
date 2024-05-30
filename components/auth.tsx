"use client";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="hover:bg-blue-500 hover:text-white font-mono pr-2 bg-white dark:bg-black rounded-sm px-2 py-1 space-x-2 p-1 flex items-center border-2 border-gray-300 dark:border-gray-800"
      >
        
        <span className="font-semibold italic">Sign Out</span>
      </button>
    );
  } else {
    return (
      <button
        onClick={() => signIn()}
        className="hover:bg-blue-600 hover:text-white font-mono pr-2 bg-white dark:bg-black rounded-sm px-2 py-1 space-x-2 p-1 flex items-center border-2 border-gray-300 dark:border-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
          <path d="M1 1h22v22H1z" fill="none" />
        </svg>
        <span className="font-semibold italic">Sign In</span>
      </button>
    );
  }
}

export const Auth = () => {
  return (
    <div >
      <AuthButton />
    </div>
  );
};

// import { googleProvier, auth } from "@/config/firebase"
// import { signInWithPopup, signOut } from "firebase/auth"
// import { FcGoogle } from "react-icons/fc";
// import React from "react";

// export const Auth = () => {

//     const [isTrue,setIsTrue] = React.useState(true)

//     const onSuccess = async () => {
//         try {
//             const response = await signInWithPopup(auth, googleProvier)
//             if (response) {
//                 setIsTrue(false)
//                 console.log(auth?.currentUser?.displayName)
//             }
//         } catch (error) {
//             alert("SignIn Failed")
//         }
//     }

//     const onLogout = async() =>{
//         try {
//             const res = await signOut(auth)
//             setIsTrue(true)
//         } catch (error) {
//             alert("Logout Successful")
//         }
//     }

//     return (
//         <div>
//             {isTrue && (<button onClick={onSuccess} className="hover:bg-blue-400 pr-2 bg-white dark:bg-black rounded-full space-x-2 p-1 flex items-center border-2 border-gray-300 dark:border-gray-800" ><FcGoogle size={24} /><span className="border-l pl-1">Sign In With Google</span></button>)}
//             {!isTrue && (<button onClick={onLogout} className="hover:bg-blue-400 pr-2 bg-white dark:bg-black rounded-full space-x-2 p-1 flex items-center border-2 border-gray-300 dark:border-gray-800" ><span className="px-2">Sign Out</span></button>)}
//         </div>)
// }
