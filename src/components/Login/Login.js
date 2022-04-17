import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passReseterror] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        toast('Logged In Successfully!!!');
        navigate(from, { replace: true });
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.userEmail.value;
        const password = event.target.userPassword.value;

        await signInWithEmailAndPassword(email, password);
    }

    const handleForgotPassword = async () => {
        if (emailRef.current.value) {
            await sendPasswordResetEmail(emailRef.current.value);
            toast('Please, check your email.');
        }
        else {
            toast('Please, enter your email address.');
        }
    }

    return (
        <section className='h-screen pt-20 flex'>
            <div className='h-full w-[70%] bg-log-sign-banner-img bg-top bg-cover'>

            </div>
            <div className='w-[30%] mx-aut0 flex flex-col items-center justify-center p-7'>
                <h2 className='text-tuition-care-base-light font-bold text-3xl text-left w-full ml-5 mb-5'>Login Form</h2>
                <div className='w-full bg-white p-8 rounded-3xl shadow-3xl'>
                    <form onSubmit={handleLogin}>
                        <div className='text-left text-tuition-care-base'>
                            <label className='ml-2' htmlFor="userEmail">Email</label>
                            <input ref={emailRef} className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="email" name="userEmail" placeholder='Enter Your Email' required />
                        </div>
                        <div className='text-left text-tuition-care-base mt-6'>
                            <label className='ml-2' htmlFor="userPassword">Password</label>
                            <input className='px-3 py-2 border-2 border-tuition-care-base outline-none rounded-xl w-full font-semibold' type="password" name="userPassword" placeholder='Enter Your Password' required />
                        </div>
                        <div className='text-right text-tuition-care-base-light mt-3'>
                            <button
                                onClick={handleForgotPassword}
                                className='hover:opacity-50 duration-300 underline'>
                                Forgot Password?
                            </button>
                        </div>
                        <div className='mt-2'>
                            <p className='text-red-600'>{error?.message && 'Invalid ID or Password'}</p>
                        </div>
                        <div className='mt-6'>
                            <button className='bg-tuition-care-base-light border-2 border-tuition-care-base-light w-full py-2 rounded-xl text-white font-medium text-lg hover:bg-transparent duration-300 hover:text-tuition-care-base-light'>Login</button>
                        </div>
                    </form>
                    <div className='mt-2'>
                        <p className='text-tuition-care-base'>Don't Have an account? <Link className='text-tuition-care-base-light underline' to='/signup'>Register Now</Link></p>
                    </div>
                    <SocialLogin />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Login;