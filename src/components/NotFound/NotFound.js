import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className='h-screen'>
            <div className='h-full flex flex-col justify-center items-center'>
                <h1 className='font-black text-8xl text-tuition-care-base-light'>404</h1>
                <h3 className='font-bold text-3xl text-tuition-care-base'>Woops, looks like this page does not exist.</h3>
                <p className='text-tuition-care-base'>You could either go back to the homepage</p>
                <button
                    onClick={() => navigate('/')}
                    className='mt-8 text-white font-semibold border-2 border-tuition-care-base-light hover:bg-transparent hover:text-tuition-care-base-light duration-300 bg-tuition-care-base-light px-7 py-3 rounded-xl'>Go to Homepage</button>
            </div>
        </section>
    );
};

export default NotFound;