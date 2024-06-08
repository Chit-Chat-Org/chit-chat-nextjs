import React from "react";
import Link from "next/link";

const Prompt = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white bg-opacity-10 rounded-xl p-8 w-96 shadow-lg backdrop-blur-md">
          <h2 className="text-xl font-bold mb-4">Login Is Required!</h2>
          <Link href={'/login'} className="px-4 py-2 rounded bg-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none">
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Prompt;
