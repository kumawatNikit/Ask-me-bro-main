'use client'
import React, { useState } from 'react';

const Banner = () => {
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskNow = () => {
    setSubmittedQuestion(question); 
    setQuestion(''); 
  };

  return (
    <section className="bg-[#ff7361] text-white pt-14 px-4 lg:px-16">
      <div className="flex flex-col md:flex-row items-center lg:px-5 gap-3">
        
        <div className="flex flex-col  md:text-left md:w-1/3">
          <h1 className="text-3xl  mb-4 typewriter">
            Welcome to <strong>Ask Me, Bro!</strong>
          </h1>
          <p className="text-lg mb-6">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque.
          </p>
          <div className="pb-3 flex gap-2 ">
            <button className="bg-[#2f3239] text-white py-2 px-4 hover:bg-[#eeecec] hover:text-[#1c3a40]">
              About Us
            </button>
            <button className="bg-[#2f3239] text-white py-2 px-4 hover:bg-[#eeecec] hover:text-[#1c3a40]">
              Join Now
            </button>
          </div>
        </div>


        <div className="mt-12 md:mt-0 md:w-2/3 flex justify-center ask-me">
          <div className="relative w-full h-40 bg-[#5c9ebd33] border-2 border-gray-300 shadow-md">
            <div className="absolute top-2 left-4 right-4 flex flex-row items-center">
              <textarea
                className="w-full bg-transparent border-none outline-none px-2 py-1 text-black resize-none"
                placeholder="Type your question here..."
                value={question}
                onChange={handleQuestionChange}
                rows={10} 
              />
            </div>
            <div className='absolute bottom-4 right-4'>
              <button
                className="bg-[#2f3239] text-white py-1 px-2 hover:bg-[#ff7361]"
                onClick={handleAskNow}
              >
                Ask Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {submittedQuestion && (
        <div className="mt-6 text-center text-lg text-gray-900">
          <p><strong>Your Question: </strong>{submittedQuestion}</p>
        </div>
      )}
    </section>
  );
};

export default Banner;
