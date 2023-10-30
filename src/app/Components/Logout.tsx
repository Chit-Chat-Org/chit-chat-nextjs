"use client"

import React from "react";
import Cookies from "js-cookie";

const Logout = () => {
  return (
    <>
      <li>
        <div
          onClick={() => {
            Cookies.remove("UserId");
            window.location.reload();  // This will refresh the page
          }}
          
          className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Log Out
        </div>
      </li>
    </>
  );
};

export default Logout;
