import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, thumbnail, serviceName, studentClass, daysPerWeek, salary, negotiable } = service;
    const navigate = useNavigate();

    const handleCheckoutBtn = id => {
        navigate(`/checkout/${id}`);
    }

    return (
        <div className='border-2 border-tuition-care-base p-7 rounded-3xl'>
            <div className='rounded-2xl overflow-hidden'>
                <img src={require(`../../images/${thumbnail}.jpg`)} alt="" />
            </div>
            <div className='text-tuition-care-base'>
                <h3 className='font-bold mt-5 text-xl '>{serviceName}</h3>
                <h6 className='text-lg mt-3'>Class: <span className='font-bold'>{studentClass}</span></h6>
                <h6 className='text-lg mt-1'>Days A Week: <span className='font-bold'>{daysPerWeek}</span></h6>
                <h6 className='text-lg mt-1'>Charge: <span className='font-bold'>৳{salary}</span></h6>
                <p className='mt-1'>Negotiability: <span className='font-bold'>{negotiable ? 'Yes' : 'No'}</span></p>
            </div>
            <div className='mt-5'>
                <button
                    onClick={() => handleCheckoutBtn(id)}
                    className='bg-tuition-care-base-light border-2 border-tuition-care-base-light w-full py-3 rounded-xl text-white font-semibold text-lg hover:bg-transparent duration-300 hover:text-tuition-care-base-light'>Checkout</button>
            </div>
        </div>
    );
};

export default Service;