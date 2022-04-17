import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='bg-tuition-care-base fixed w-full'>
            <div className='w-4/5 mx-auto text-white py-4 flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl m-0'>
                        Aumi
                    </h2>
                    <span className='font-light text-base leading-4'>Tuition Care</span>
                </div>
                <nav className='flex items-center'>
                    <Link className='hover:opacity-40 duration-300' to='/'>Home</Link>
                    <Link className='hover:opacity-40 duration-300 ml-5' to='/services'>Services</Link>
                    <Link className='hover:opacity-40 duration-300 ml-5' to='/blogs'>Blogs</Link>
                    <Link className='hover:opacity-40 duration-300 ml-5' to='/about'>About</Link>

                    <button
                        onClick={() => navigate('/login')}
                        className='ml-5 hover:opacity-40 duration-300 bg-tuition-care-base-light px-5 py-2 rounded-lg'>Login</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;