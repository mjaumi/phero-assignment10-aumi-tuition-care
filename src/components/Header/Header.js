import React from 'react';

const Header = () => {
    return (
        <header className='bg-tuition-care-base'>
            <div className='w-4/5 mx-auto text-white py-4 flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl m-0'>
                        Aumi
                    </h2>
                    <span className='font-light text-base leading-4'>Tuition Care</span>
                </div>
                <nav className='flex'>
                    <p>Home</p>
                    <p className='ml-5'>Services</p>
                    <p className='ml-5'>Blogs</p>
                    <p className='ml-5'>About</p>
                    <p className='ml-5'>Login</p>
                </nav>
            </div>
        </header>
    );
};

export default Header;