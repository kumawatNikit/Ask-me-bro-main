import React from 'react';

const QuestionCard = ({ title, description,date }) => {
  return (
    <div className="bg-white text-black shadow-md rounded-lg p-4 mb-4 border border-gray-300">
      <div className="flex flex-col sm:flex-row items-start">
        
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 sm:mb-0 sm:mr-4">
          <img src='/user.png'></img>
        </div>

        <div className="flex-1">
          {/* Question title */}
          <h3 className="text-lg font-bold mb-1">{title}</h3>

          {/* Question description */}
          <p className="text-gray-600 text-sm mb-4 border-b-2 p-2">
           {description}
          </p>

          {/* Question details */}
          <div className="flex flex-wrap items-center text-gray-500 text-xs">
            <span className="text-green-600 font-medium mr-2 mb-2 sm:mb-0">✔ solved</span>
            <span className="mr-4 mb-2 sm:mb-0">⭐ 5</span>
            <span className="mr-4 mb-2 sm:mb-0">📂 wordpress</span>
            <span className="mr-4 mb-2 sm:mb-0">⏱ 4 mins ago</span>
            <span className="mr-4 mb-2 sm:mb-0">💬 5 Answers</span>
            <span className="mb-2 sm:mb-0">👀 70 views</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-wrap sm:flex-col sm:items-start gap-2">
          <button className="bg-[#ff7361] text-white text-xs px-2 py-1 mr-2 mb-md-2 sm:mb-0 sm:mr-0">Question</button>
          <button className="bg-[#2f3239] text-white text-xs px-2 py-1 sm:mb-0">Report</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
