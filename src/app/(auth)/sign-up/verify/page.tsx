"use client";

import React from "react";
import { SignUp } from "../../../api/apiCall";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isSignedIn) {
    router.push("/sign-up");
  }
  if (!isLoaded) {
    return <div>Loading.....</div>;
  }
  
  console.log(user);
  const handleClick = async () => {
    const res = await SignUp({
      ExternalId: user?.id,
      username: user?.username,
      email: user?.emailAddresses[0].emailAddress,
      fullname: user?.fullName,
    });
    console.log(res);
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <button
        type="submit"
        className="border border-border bg-gray-900 px-4 py3 rounded-md"
        onClick={handleClick}
      >
        Verify
      </button>
    </div>
  );
};

export default Page;
