import React from 'react'
import image from "../../../assets/Group 5.svg"

function Header() {
    return (
        <div className='flex justify-between px-10 py-10'>
            <div><img src={image} alt="" /></div>
            <div className='flex gap-20'>
                <div className='text-[#07043B] font-raleway text-base font-normal leading-normal'>Features</div>
                <div>Team</div>
                <div>Sign In</div>
                
            </div>
        </div>
    )
}

export default Header
