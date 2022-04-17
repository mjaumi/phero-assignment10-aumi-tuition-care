import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    const [signupError, setSignupError] = useState('');

    const handleSignupWithEmailAndPassword = async event => {
        event.preventDefault();
        const name = event.target.userName.value;
        const email = event.target.userEmail.value;
        const password = event.target.userPassword.value;
        const confirmPassword = event.target.userConPassword.value;

        if (password === confirmPassword) {

            await createUserWithEmailAndPassword(email, password);
            updateProfile({ displayName: name });
            await sendEmailVerification();
            toast('An verification email is sent. Please, check your email.');
        }
        else {
            setSignupError("Your Given Two Passwords Didn't Match");
        }
    }

    return (
        <section className='h-screen pt-20 flex'>
            <div className='h-full w-[70%] bg-log-sign-banner-img bg-top bg-cover'>

            </div>
            <div className='w-[30%] mx-aut0 flex flex-col items-center justify-center p-7'>
                <h2 className='text-tuition-care-base-light font-bold text-3xl text-left w-full ml-5 mb-5'>Signup Form</h2>
                <div className='w-full bg-white p-8 rounded-3xl shadow-3xl'>
                    <form onSubmit={handleSignupWithEmailAndPassword}>
                        <div className='text-left text-tuition-care-base'>
                            <label className='ml-2' htmlFor="userName">Name</label>
                            <input className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="text" name="userName" placeholder='Enter Your Name' required />
                        </div>
                        <div className='text-left text-tuition-care-base mt-6'>
                            <label className='ml-2' htmlFor="userEmail">Email</label>
                            <input className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="email" name="userEmail" placeholder='Enter Your Email' required />
                        </div>
                        <div className='text-left text-tuition-care-base mt-6'>
                            <label className='ml-2' htmlFor="userPassword">Password</label>
                            <input className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="password" name="userPassword" placeholder='Enter Your Password' required />
                        </div>
                        <div className='text-left text-tuition-care-base mt-6'>
                            <label className='ml-2' htmlFor="userConPassword">Confirm Password</label>
                            <input className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="password" name="userConPassword" placeholder='Confirm Your Password' required />
                        </div>
                        <div className='mt-6'>
                            <button className='bg-tuition-care-base-light border-2 border-tuition-care-base-light w-full py-2 rounded-xl text-white font-medium text-lg hover:bg-transparent duration-300 hover:text-tuition-care-base-light'>signup</button>
                        </div>
                    </form>
                    <div className='mt-2'>
                        <p className='text-tuition-care-base'>Already Have an account? <Link className='text-tuition-care-base-light underline' to='/login'>Login Now</Link></p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-red-600'>{signupError}</p>
                        <p className='text-red-600'>{error?.message}</p>
                        <p className='text-red-600'>{updateError?.message}</p>
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
            <ToastContainer />
        </section>
    );
};

export default Signup;