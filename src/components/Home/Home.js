import React from 'react';
import Services from '../Services/Services';

const Home = () => {
    return (
        <section>
            <div className='bg-banner-img h-screen bg-center bg-cover bg-black/50 bg-blend-multiply'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h2 className='text-white text-5xl font-extrabold capitalize'>Looking for a <span className='text-tuition-care-text-base-light'>home tutor</span> <br /> for your beloved child?</h2>
                    <h5 className='text-white text-2xl mt-4'>Don't worry I am here to help you out!!</h5>
                    <p className='text-white mt-7 w-1/2 text-lg'>I am Milhan Joardar Aumi, a highly experienced home tutor who teaches Physics, Chemistry, Mathematics and Higher Mathematics from class 9 to class 12.</p>
                </div>
            </div>
            <Services />
        </section>
    );
};

export default Home;