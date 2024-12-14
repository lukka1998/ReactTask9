import React from 'react';
import image from "../../../assets/Group 5.svg";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate(); 

    const gotohome = () => {
        navigate("/"); 
    };
    const gotofeatures = () => {
        navigate("/Features"); 
    };

    return (
        <div className='flex justify-between px-10 py-10'>
            <div><img src={image} alt="Logo" /></div>
            <div className='flex gap-20'>
                <div 
                    className='text-[#07043B] font-raleway text-base font-normal leading-normal cursor-pointer' 
                    onClick={() => gotohome()}
                >
                    Features
                </div>
                <div 
                    className='cursor-pointer'
                    onClick={() => gotofeatures('/features')}
                >
                    Team
                </div>
                <div 
                    className='cursor-pointer'
                    onClick={() => handleNavigation('/Signin')}
                >
                    Sign In
                </div>
            </div>
        </div>
    );
}

export default Header;
