import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user || fbUser) {
        navigate(from, { replace: true });
        toast('Logged In Successfully!!!');
    }

    if (loading || fbLoading) {
        return <loading />;
    }

    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
    }

    const handleFacebookSignIn = async () => {
        await signInWithFacebook();
    }

    return (
        <div>
            <div className='mt-10'>
                <h4 className='font-bold text-2xl text-tuition-care-base'>Social Login</h4>
                <div className='mt-5'>
                    <button
                        onClick={handleGoogleSignIn}
                        className='text-white border-2 border-tuition-care-base bg-tuition-care-base w-full p-2 rounded-xl font-semibold hover:bg-transparent hover:text-tuition-care-base duration-300'>
                        <FontAwesomeIcon className='mr-2' icon={faGoogle} />
                        Login With Google
                    </button>
                    <button
                        onClick={handleFacebookSignIn}
                        className='block mt-3 bg-tuition-care-base-light border-2 border-tuition-care-base-light text-white w-full p-2 rounded-xl font-semibold hover:bg-transparent hover:text-tuition-care-base-light duration-300'>
                        <FontAwesomeIcon className='mr-2' icon={faFacebookF} />
                        Login With Facebook
                    </button>
                </div>
                <div className='mt-2'>
                    <p className='text-red-600'>{fbError?.message && "Failed to Login with Facebook."}</p>
                    <p className='text-red-600'>{error?.message && "Failed to Login with Google."}</p>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SocialLogin;