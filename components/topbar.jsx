import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#ff7361] text-white text-sm  lg:px-16">
      <div className="container-fluid mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-2 px-4 space-y-2 sm:space-y-0">
       
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <i className="fas fa-envelope mr-1"></i>
            <span>Contact</span>
          </div>
          <span>|</span>
          <div className="flex items-center">
            <i className="fas fa-headset mr-1"></i>
            <span>Support</span>
          </div>
          <span>|</span>
          <div className="flex items-center">
            <i className="fas fa-user mr-1"></i>
            <span>Login Area</span>
          </div>
        </div>

       
        <div className="flex items-center w-full sm:w-auto">
          <i className="fas fa-search mr-2"></i>
          <input
            type="text"
            placeholder="Search here ..."
            className="bg-transparent border-b border-white focus:outline-none placeholder-white text-white w-full sm:w-auto text-xs sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
