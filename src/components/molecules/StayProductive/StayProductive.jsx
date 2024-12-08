import React from 'react';
import illustration from "../../../assets/illustration_2-01.png"
import bgimage from "../../../assets/Rectangle.svg"
import oval from "../../../assets/Oval (1).png"
import arrowimage from "../../../assets/Group 10.svg"
function StayProductive() {
  return (
    <section className=" mb-[100px] py-20 flex justify-between align-center px-10 bg-cover bg-no-repeat bg-center  bg-gray-100" style={{ backgroundImage: `url(${bgimage})`}}>
      <div className="container mx-auto w-7/12 gap-6 flex flex-col justify-center items-start">
        <h1 className="text-5xl font-bold text-gray-800 leading-[4.5rem] ">Stay productive, wherever you are.</h1>
        <p className="text-base font-normal text-gray-800 leading-7 tracking-wide w-[37rem]">
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.        </p>
        <p className="text-base font-normal text-gray-800 leading-7 tracking-wide w-[37rem]">
        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!       </p> 
        <div>
        <div className='text-base font-normal text-teal-500  cursor-pointer flex justify-center items-center gap-1'>
        See how Fylo works 
        <div>
           <img src={arrowimage} alt="" />
        </div>

        </div>
        <div className='w-40 h-px flex-shrink-0 border-t border-green-300'>
        </div>
        </div>
    
        <div className="bg-white p-6 rounded-lg text-[#07043B] font-raleway text-base font-normal leading-normal w-[356px] h-auto flex-shrink-0">
         <blockquote className="text-gray-800">
        <p className="text-lg">“Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.”</p>
        </blockquote>
        <div className="flex items-center mt-4 gap-4">
        <img src={oval} alt="" />
        <div>
            <p className="font-bold text-gray-800">Kyle Burton</p>
            <p className="text-gray-500">Founder & CEO, Huddle</p>
        </div>
    </div>
</div>
        

     </div>
      <div>
        <img   src={illustration} alt="" />
      </div>
    </section>
  );
}

export default StayProductive;