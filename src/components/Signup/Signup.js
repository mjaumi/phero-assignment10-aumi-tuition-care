import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const Signup = () => {
    //react firebase hook initialization
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    //react hook initialization
    const [signupError, setSignupError] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    //checking for user
    if (user) {
        toast('Signed Up Successfully!!!');
    }

    //event handler for signup button
    const handleSignupWithEmailAndPassword = async event => {
        event.preventDefault();
        const name = event.target.userName.value;
        const email = event.target.userEmail.value;
        const password = event.target.userPassword.value;
        const confirmPassword = event.target.userConPassword.value;

        //checking both password is same or not
        if (password === confirmPassword) {

            await createUserWithEmailAndPassword(email, password);
            updateProfile({ displayName: name });
            await sendEmailVerification();

            if (loading || sending || updating) {
                setShowLoading(true);
            }
            else {
                setShowLoading(true);
            }

            toast('An verification email is sent. Please, check your email.');
        }
        else {
            setSignupError("Your Given Two Passwords Didn't Match");
        }
    }

    //rendering signup component
    return (
        <section className='min-h-screen pt-24 md:pt-20 pb-20 md:pb-0 flex'>
            <div className='hidden md:block h-screen w-[70%] bg-log-sign-banner-img bg-top bg-cover'>

            </div>
            <div className='w-full md:w-[30%] mx-aut0 flex flex-col items-center justify-center p-3 md:p-7'>
                <h2 className='text-tuition-care-base-light font-bold text-3xl text-left w-full ml-5 mb-5'>Signup</h2>
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
                        <p className='text-red-600'>{verificationError?.message}</p>
                    </div>
                    <div className='mt-5'>
                        {
                            showLoading && <Loading />
                        }
                    </div>
                    <SocialLogin />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Signup;