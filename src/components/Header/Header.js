import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    //initializing react hooks
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [menuClick, setMenuClick] = useState(false);

    //event handler for log out button
    const handleSignOut = () => {
        signOut(auth)
            .then(() => toast('Logged Out Successfully!!!'));
    }

    //rendering header component
    return (
        <header className='bg-tuition-care-base fixed w-full'>
            <div className='w-4/5 mx-auto text-white py-4 flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl m-0'>
                        Aumi
                    </h2>
                    <span className='font-light text-base leading-4'>Tuition Care</span>
                </div>
                <div onClick={() => setMenuClick(!menuClick)} className='visible md:hidden'>
                    {
                        menuClick ?
                            <FontAwesomeIcon className='h-7 w-7' icon={faMultiply} />
                            :
                            <FontAwesomeIcon className='h-7 w-7' icon={faBars} />
                    }
                </div>
                <nav className={`absolute md:static w-full md:w-fit p-5 md:p-0 bg-tuition-care-base left-1/2 -translate-x-1/2 md:translate-x-0 duration-500 ${menuClick ? 'top-14' : 'top-[-350px]'}  flex flex-col md:flex-row justify-center md:items-center -z-50 md:z-50`}>
                    <Link className='hover:opacity-40 duration-300 mt-5 md:mt-0' to='/'>Home</Link>
                    <Link className='hover:opacity-40 duration-300 mt-2 md:mt-0 md:ml-5' to='/packages'>Packages</Link>
                    <Link className='hover:opacity-40 duration-300 mt-2 md:mt-0 md:ml-5' to='/blogs'>Blogs</Link>
                    <Link className='hover:opacity-40 duration-300 mt-2 md:mt-0 md:ml-5' to='/about'>About</Link>

                    {
                        user ?
                            <>
                                <p className='font-bold mt-6 md:mt-0 ml-0 md:ml-10'>{user.displayName}</p>
                                <button
                                    onClick={handleSignOut}
                                    className='mt-5 md:mt-0 md:ml-5 hover:opacity-40 duration-300 bg-tuition-care-base-light px-5 py-2 rounded-lg'>
                                    Log Out
                                </button>
                            </>
                            :
                            <button
                                onClick={() => navigate('/login')}
                                className=' mt-2 md:mt-0 md:ml-5 hover:opacity-40 duration-300 bg-tuition-care-base-light px-5 py-2 rounded-lg'>
                                Login
                            </button>
                    }
                </nav>
            </div>
            <ToastContainer />
        </header>
    );
};

export default Header;