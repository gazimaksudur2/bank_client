import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { Link, Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div className='h-[100vh] flex'>
            <div className='w-full relative mx-auto flex items-center justify-center'>
                <Link to={'/'}><BiHomeAlt2 className='absolute text-black top-[5%] left-[5%] ' size={25} /></Link>
                <Outlet />
            </div>
            <div className='relative w-full flex items-center justify-center'>
                <img className='opacity-50 absolute bg-cover min-h-full' src="https://themeknit.com/demo/html/authfy/demo/images/computer-1867758_1920-min.jpg" alt="bg-auth" />
                <h4 className='text-4xl text-red-700'>Hello world</h4>
            </div>
        </div>
    );
};

export default Authentication;