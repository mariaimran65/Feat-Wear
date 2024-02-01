import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col md:flex-row relative z-0 justify-center items-center md:items-start text-center md:text-left">
      <div className=" md:mt-44 md:mr-20 md:ml-auto lg:mx-auto max-w-xl">
        <h1 className="font-semibold text-base mb-4 md:text-4xl md:mb-6">
          Feat Wear <i className="text-purple-600">Paradise</i>
        </h1>
        <p className="text-slate-400 mb-6 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
        </p>
        <div className="flex flex-col md:flex-row justify-center z-1 md:justify-start">
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:mr-4 md:mb-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Log In
            </button>
          </Link>
          <Link to="/adminpanel">
            <button
              type="button"
              className="admin py-2.5 px-5 mb-2 md:mb-0 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Admin Panel
            </button>
          </Link>
        </div>
      </div>
      <img
        alt=""
        className="z-10 tilted w-full md:w-auto md:max-w-lg"
        src="https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75"
      ></img>
    </div>
  );
}

export default Header;
