'use client'
import React, { useState } from 'react';
import MostResponses from './questionTabs/MostResponses';
import RecentlyAnswered from './questionTabs/RecentlyAnswered';
import NoAnswers from './questionTabs/NoAnswers';
import RecentQuestions from './questionTabs/RecentQuestions';

const DescriptionPart = () => {
  const [activeTab, setActiveTab] = useState('recentQuestions');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tabs Section */}
      <div className="flex flex-wrap border-b border-[#ff7361] text-black">
        <button
          className={`px-4 py-2 w-full sm:w-auto ${activeTab === 'recentQuestions' ? 'bg-[#ff7361] text-white' : ''}`}
          onClick={() => handleTabClick('recentQuestions')}
        >
          Recent Questions
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto ${activeTab === 'mostResponses' ? 'bg-[#ff7361] text-white' : ''}`}
          onClick={() => handleTabClick('mostResponses')}
        >
          Most Responses
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto ${activeTab === 'recentlyAnswered' ? 'bg-[#ff7361] text-white' : ''}`}
          onClick={() => handleTabClick('recentlyAnswered')}
        >
          Recently Answered
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto ${activeTab === 'noAnswers' ? 'bg-[#ff7361] text-white' : ''}`}
          onClick={() => handleTabClick('noAnswers')}
        >
          No Answers
        </button>
      </div>
      
      {/* Tab Content Section */}
      <div className="py-4">
        {activeTab === 'recentQuestions' && <RecentQuestions />}
        {activeTab === 'mostResponses' && <MostResponses />}
        {activeTab === 'recentlyAnswered' && <RecentlyAnswered />}
        {activeTab === 'noAnswers' && <NoAnswers />}
      </div>
    </div>
  );
};

export default DescriptionPart;
