import React from 'react';
import image from "../../../assets/Group 4 (2).svg";
import icon from "../../../assets/icons8-facebook.svg"
import icon1 from "../../../assets/icons8-instagram.svg"
import icon2 from "../../../assets/icons8-twitter-circled.svg"


function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 h-[391px] flex justify-center items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className='flex flex-col gap-6 mb-[100px]'>
          <img src={image} alt="" />
          <p className="text-sm">Phone: +1-543-123-4567</p>
          <p className="text-sm">example@fylo.com</p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold">About Us</h3>
          <a href="#" className="text-sm hover:text-blue-500">Jobs</a>
          <a href="#" className="text-sm hover:text-blue-500">Press</a>
          <a href="#" className="text-sm hover:text-blue-500">Blog</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold">Contact Us</h3>
          <a href="#" className="text-sm hover:text-blue-500">Terms</a>
          <a href="#" className="text-sm hover:text-blue-500">Privacy</a>
        </div>
        <div className="flex space-x-4 ">
            {/* fill argamovida */}
            <div className='w-10 h-10 rounded-full border border-white flex justify-center items-center  hover:border-blue-500 cursor-pointer' >
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
            </svg>
            </div>
            <div className='w-10 h-10 rounded-full border border-white flex justify-center items-center  hover:border-blue-500 cursor-pointer'>
            <svg class="w-6 h-6 text-gray-800 dark:text-white hover:text-blu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
            </svg>
            </div>
            <div className='w-10 h-10 rounded-full border border-white flex justify-center items-center hover:border-blue-500 cursor-pointer'>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" viewBox="0 0 24 24">
            <path fill="white" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
            </svg>

            </div>

          
        </div>
      </div>
    </footer>
  );
}

export default Footer;