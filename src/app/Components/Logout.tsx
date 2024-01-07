"use client"

import React from "react";
import Cookies from "js-cookie";

const Logout = () => {
  return (
    <>
      <li>
        <div
          onClick={() => {
            localStorage.removeItem("UserId")
            window.location.reload();
          }}
          
          className="block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600 rounded md:bg-transparent md:p-0"
        >
          Log Out
        </div>
      </li>
    </>
  );
};

export default Logout;
