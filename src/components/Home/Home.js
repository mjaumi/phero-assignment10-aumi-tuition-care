import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePackageData from '../../hooks/usePackageData';
import Package from '../Package/Package';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    //getting package data from custom hook
    const [packages] = usePackageData();
    const navigate = useNavigate();

    //rendering home component
    return (
        <section>
            <div className='bg-banner-img h-screen bg-center bg-cover bg-black/50 bg-blend-multiply'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h2 className='text-white text-2xl md:text-5xl font-extrabold capitalize'>Looking for a <span className='text-tuition-care-text-base-light'>home tutor</span> <br /> for your beloved child?</h2>
                    <h5 className='text-white text-lg md:text-2xl mt-4'>Don't worry I am here to help you out!!</h5>
                    <p className='text-white mt-7 w-4/5 md:w-1/2 text-base md:text-lg'>I am Milhan Joardar Aumi, a highly experienced home tutor who teaches Physics, Chemistry, Mathematics and Higher Mathematics from class 9 to class 12.</p>
                </div>
            </div>
            <div className='w-[90%] md:w-4/5 mx-auto mt-28'>
                <h2 className='text-tuition-care-base font-bold text-2xl md:text-4xl'>Top Tuition Packages</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                    {
                        packages.slice(0, 3).map(tuitionPackage => <Package
                            key={tuitionPackage.id}
                            tuitionPackage={tuitionPackage}
                        ></Package>)
                    }
                </div>
                <button
                    onClick={() => navigate('/packages')}
                    className='mt-14 bg-tuition-care-base-light border-2 border-tuition-care-base-light px-8 py-2 rounded-xl text-white text-lg hover:bg-transparent duration-300 hover:text-tuition-care-base-light'>
                    View All Packages
                </button>
            </div>
            <Reviews />
        </section>
    );
};

export default Home;