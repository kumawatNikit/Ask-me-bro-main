import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import Login from "@/app/auth/login/page";

const RightSideLayout = () => {
  return (
    <div className="space-y-4">
      {/* Stats Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#428690]">
          Stats
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Questions (20)</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Answers (50)</span>
          </li>
        </ul>
      </div>

      {/* Find Us Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#428690]">
          Find Us
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between w-full hover:bg-black bg-orange-500 text-white py-2 rounded-md text-start p-3 flex-grow">
            <button className="text-start">
              Subscribe to <br /> RSS Feed
            </button>
            <FontAwesomeIcon className="ml-3 w-4 text-white" icon={faRss} />
          </div>

          <div className="flex justify-between w-full hover:bg-black bg-blue-600 text-white py-2 rounded-md text-start p-3">
            <button className="text-start">
              5,000 <br /> People Like Us
            </button>
            <FontAwesomeIcon className="ml-3 w-4 text-white" icon={faRss} />
          </div>

          <div className="flex justify-between w-full hover:bg-black bg-sky-500 text-white py-2 rounded-md text-start p-3">
            <button className="text-start">
              3,000 <br /> Followers
            </button>
            <FontAwesomeIcon className="ml-3 w-4 text-white" icon={faRss} />
          </div>

          <div className="flex justify-between w-full hover:bg-black bg-red-500 text-white py-2 rounded-md text-start p-3">
            <button className="text-start">
              1,000 <br /> Subscribers
            </button>
            <FontAwesomeIcon className="ml-3 w-4 text-white" icon={faRss} />
          </div>
        </div>
      </div>

      {/* Login Section */}
      <Login   />

      {/* Highest Points Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#428690]">
          Highest Points
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full">
              {" "}
              <img src="/user.png"></img>
            </div>
            <span className="ml-2">
              Admin <br /> 12 Points
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full">
              {" "}
              <img src="/user.png"></img>
            </div>
            <span className="ml-2">
              vibgy <br /> 10 Points
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full">
              {" "}
              <img src="/user.png"></img>
            </div>
            <span className="ml-2">
              Ram <br /> 5 Points
            </span>
          </li>
        </ul>
      </div>

      {/* Tags Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#428690]">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#1c3a40] text-white px-3 py-1 text-sm rounded hover:bg-[#428690]">
            PHP
          </span>
          <span className="bg-[#1c3a40] text-white px-3 py-1 text-sm rounded hover:bg-[#428690]">
            WordPress
          </span>
          <span className="bg-[#1c3a40] text-white px-3 py-1 text-sm rounded hover:bg-[#428690]">
            HTML
          </span>
          <span className="bg-[#1c3a40] text-white px-3 py-1 text-sm rounded hover:bg-[#428690]">
            CSS
          </span>
          <span className="bg-[#1c3a40] text-white px-3 py-1 text-sm rounded hover:bg-[#428690]">
            React
          </span>
        </div>
      </div>

      {/* Recent Questions Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#428690]">
          Recent Questions
        </h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-1 hover:text-[#428690]">
              This is my first Question
            </p>
            <p className="text-gray-500 text-sm">Feb 22, 2014</p>
          </div>
          <div>
            <p className="font-bold mb-1 hover:text-[#428690]">
              This Is My Second Poll Question
            </p>
            <p className="text-gray-500 text-sm">Feb 22, 2014</p>
          </div>
        </div>
      </div>
    </div>
  );
};

RightSideLayout.displayName = "RightSideLayout";

export default RightSideLayout;
