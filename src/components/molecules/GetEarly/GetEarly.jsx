import React from 'react';

function GetEarly() {
  return (
    <section style={{ backgroundColor: '#575988' }} className="  text-white py-20 flex">
      <div className="container mx-auto px-4 flex justify-between">
        <div>
        <h2 className="mb-6 text-5xl font-bold text-white leading-tight">Get early access today</h2>
        <p className="mb-8 text-base font-normal text-white leading-6 tracking-wide w-[733px]">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
        </p>
        </div>
        <div className=' flex  '>
        <div className=" flex flex-col gap-2">
          <input
            type="email"
            placeholder="example@example.com"
            className="w-[480px] h-[48px] flex-shrink-0 px-4 py-3 border border-gray-300 rounded-md mb-6"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-md w-[240px] h-[48px]"
          >
            Get Started For Free
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default GetEarly;