"use client";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from "../firebase";
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const OAuth = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleGoogleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            
            setIsLoading(true);
            // Assuming OAuth function is meant to send user data to the server
            const res = await sendDataToServer(result.user);

            setIsLoading(false);
            
            if (res?.data?.status !== "Failed") { // Changed != to !==
                localStorage.setItem('UserId', res.data.response.data._id);
                toast("Organization Submitted!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.push("/dashboard");
            } else {
                toast.error("Failed to Login!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.log("Could not sign in", error);
        }
    }

    const sendDataToServer = async (user: any) => {
        // Here you should send user data to your server using fetch or axios
        // For now, I'll just return a dummy response
        return { data: { status: "Success", response: { data: { _id: "123" } } } };
    }

    return (
        <button onClick={handleGoogleClick} type='button' className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700 mb-4">
            Continue with Google
        </button>
    );
}

export default OAuth;
