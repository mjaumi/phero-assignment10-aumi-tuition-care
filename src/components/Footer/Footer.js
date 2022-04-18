import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {
    //rendering footer component
    return (
        <footer className='bg-tuition-care-base h-52 text-white'>
            <div className='w-4/5 mx-auto h-full flex flex-col-reverse md:flex-row justify-between items-center py-5 md:py-0'>
                <div>
                    <p className='text-lg'>©Milhan Joardar Aumi,2022.</p>
                </div>
                <div>
                    <h4 className='font-thin text-xl mb-5'>Find Me on Social Media</h4>
                    <div className=''>
                        <a href="https://www.facebook.com/mj.aumi">
                            <FontAwesomeIcon className='h-6 w-6 text-tuition-care-base bg-white p-4 rounded-full hover:opacity-40 duration-300 cursor-pointer' icon={faFacebookF} />
                        </a>
                        <a href="https://github.com/mjaumi">
                            <FontAwesomeIcon className='ml-5 h-6 w-6 text-tuition-care-base bg-white p-4 rounded-full hover:opacity-40 duration-300 cursor-pointer' icon={faInstagram} />
                        </a>
                        <a href="https://github.com/mjaumi">
                            <FontAwesomeIcon className='ml-5 h-6 w-6 text-tuition-care-base bg-white p-4 rounded-full hover:opacity-40 duration-300 cursor-pointer' icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;