import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceData from '../../hooks/useServiceData';

const Checkout = () => {
    const { packageId } = useParams();
    const [services] = useServiceData();
    const [service, setService] = useState({});
    const [showModal, setShowModal] = useState(false);

    const nameRef = useRef('');
    const phoneNoRef = useRef('');
    const addressRef = useRef('');

    useEffect(() => {
        setService(services.find(service => service.id === parseInt(packageId)));
    }, [packageId, services]);

    const handleProceedCheckout = (event) => {
        event.preventDefault();
        if (nameRef.current.value && phoneNoRef.current.value && addressRef.current.value) {
            setShowModal(true);
            console.log('form submitted');
        }
    }

    return (
        <section className='w-4/5 mx-auto pt-28'>
            <h2 className='font-black text-4xl text-tuition-care-base'>Welcome to checkout</h2>
            <div className='text-tuition-care-base grid grid-cols-2 gap-10'>
                <div className='flex items-center w-full'>
                    <div className='w-full text-left border-2 border-tuition-care-base p-5 rounded-2xl'>
                        <h3 className='font-bold text-2xl'>You have chosen:</h3>
                        <div className='ml-8'>
                            <p className='mt-5 text-xl'>Package: <span className='font-bold'>{service?.serviceName}</span></p>
                            <p className='mt-1 text-xl'>For Class: <span className='font-bold'>{service?.studentClass}</span></p>
                            <p className='mt-1 text-xl'>Charge: <span className='font-bold'>৳{service?.salary}</span></p>
                            <p className='mt-1 text-xl'>Days: <span className='font-bold'>{service?.daysPerWeek}</span></p>
                            <p className='mt-1 text-xl'>Negotiability: <span className='font-bold'>{service?.negotiable ? 'Yes' : 'No'}</span></p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='w-4/5 mx-auto bg-white p-8 rounded-3xl shadow-3xl'>
                        <div className='text-tuition-care-base text-left w-full mb-5'>
                            <h2 className=' font-bold text-3xl'>Checkout Form</h2>
                            <p>Please, fill up the form to checkout.</p>
                        </div>
                        <form onSubmit={handleProceedCheckout}>
                            <div className='text-left text-tuition-care-base'>
                                <label className='ml-2' htmlFor="studentName">Student Name</label>
                                <input ref={nameRef} className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="text" name="studentName" placeholder='Enter The Student Name' required />
                            </div>
                            <div className='text-left text-tuition-care-base mt-6'>
                                <label className='ml-2' htmlFor="phoneNo">Guardian Phone Number</label>
                                <input ref={phoneNoRef} className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="number" name="phoneNo" placeholder="Enter Guardian's Phone Number" required />
                            </div>
                            <div className='text-left text-tuition-care-base mt-6'>
                                <label className='ml-2' htmlFor="address">Address</label>
                                <textarea ref={addressRef} className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' name="address" cols="30" rows="10" placeholder='Enter Your Address' required></textarea>
                            </div>
                            <div className='mt-6'>
                                <button className='bg-tuition-care-base-light border-2 border-tuition-care-base-light w-full py-2 rounded-xl text-white font-medium text-lg hover:bg-transparent duration-300 hover:text-tuition-care-base-light'>
                                    Proceed Checkout
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {
                showModal ? (<>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-tuition-care-base">
                                        Checkout Successful
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none opacity-40 hover:text-red-500 duration-300 focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <FontAwesomeIcon icon={faMultiply} />
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Thank you for checking out. I will contact with you soon.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-tuition-care-base-light hover:opacity-40 duration-300 text-white active:bg-emerald-600 font-medium text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition-all"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Okay, Thank you
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>) : null
            }
        </section>
    );
};

export default Checkout;