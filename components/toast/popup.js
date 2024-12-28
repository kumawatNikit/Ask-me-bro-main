import React, { useEffect } from "react";

const Popup = ({ type, message, onClose }) => {
  // Automatically close popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getPopupStyle = () => {
    if (type === "success") {
      return "bg-green-100 border-green-400 text-green-700";
    }
    if (type === "error") {
      return "bg-red-100 border-red-400 text-red-700";
    }
    return "bg-gray-100 border-gray-400 text-gray-700";
  };

  return (
    <div
      className={`fixed top-5 right-5 z-50 max-w-xs w-full border-l-4 p-4 rounded shadow ${getPopupStyle()}`}
      role="alert"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-lg font-bold focus:outline-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Popup;
