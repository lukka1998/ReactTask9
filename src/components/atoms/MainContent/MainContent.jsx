import React from 'react';
import illustration from "../../../assets/illustration_1-01 (1).png"
function MainContent() {
  return (
    <section className=" mb-[100px] py-20 flex  justify-between align-center px-10 ">
      <div className="container mx-auto w-7/12  gap-12 flex flex-col  justify-center items-start "> 
        <h1 className="text-5xl font-bold text-gray-800 leading-[4.5rem] ">All your files in one secure location, accessible anywhere.</h1>
        <p className="text-base font-normal text-gray-800 leading-7 tracking-wide">
          Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
        </p>
        <div className="flex  items-start justify-start h-30  ">
                <input required type="email" placeholder="Enter your email" className="w-96 h-45 flex-shrink-0 px-4 py-3 border border-gray-300 rounded-md mb-6" />
                <button className="w-40 h-45 flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">Get Started</button>       
         </div>
        </div>
      <div><img src={illustration} alt="" /></div>
    </section>
  );
}

export default MainContent;