import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='h-screen pt-20 flex'>
            <div className='h-full w-[70%] bg-log-sign-banner-img bg-top bg-cover'>

            </div>
            <div className='w-[30%] mx-aut0 flex flex-col items-center justify-center p-7'>
                <h2 className='text-tuition-care-base-light font-bold text-3xl text-left w-full ml-5 mb-5'>Login Form</h2>
                <div className='w-full bg-white p-8 rounded-3xl shadow-3xl'>
                    <form>
                        <div className='text-left text-tuition-care-base'>
                            <label className='ml-2' htmlFor="user-email">Email</label>
                            <input className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="email" name="user-email" placeholder='Enter Your Email' required />
                        </div>
                        <div className='text-left text-tuition-care-base mt-6'>
                            <label className='ml-2' htmlFor="user-password">Password</label>
                            <input className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="password" name="user-password" placeholder='Enter Your Password' required />
                        </div>
                        <div className='text-right text-tuition-care-base-light mt-3'>
                            <button className='hover:opacity-50 duration-300 underline'>Forgot Password?</button>
                        </div>
                        <div className='mt-6'>
                            <button className='bg-tuition-care-base-light border-2 border-tuition-care-base-light w-full py-2 rounded-xl text-white font-medium text-lg hover:bg-transparent duration-300 hover:text-tuition-care-base-light'>Login</button>
                        </div>
                    </form>
                    <div className='mt-2'>
                        <p className='text-tuition-care-base'>Don't Have an account? <Link className='text-tuition-care-base-light underline' to='/signup'>Register Now</Link></p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='font-bold text-2xl text-tuition-care-base'>Social Login</h4>
                        <div className='mt-5'>
                            <button className='text-tuition-care-base border-2 border-tuition-care-base w-full p-2 rounded-xl font-semibold hover:bg-tuition-care-base hover:text-white duration-300'>
                                <FontAwesomeIcon className='mr-2' icon={faGoogle} />
                                Login With Google
                            </button>
                            <button className='block mt-3 bg-tuition-care-base-light border-2 border-tuition-care-base-light text-white w-full p-2 rounded-xl font-semibold hover:bg-transparent hover:text-tuition-care-base-light duration-300'>
                                <FontAwesomeIcon className='mr-2' icon={faFacebookF} />
                                Login With Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;