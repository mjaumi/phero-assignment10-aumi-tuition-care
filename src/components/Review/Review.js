import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import Rating from 'react-rating';

const Review = ({ review }) => {
    //destructuring the props
    const { userImg, userName, reviewText, rating } = review;

    //rendering review component
    return (
        <div className='grid grid-rows-review-card border-2 border-tuition-care-base text-tuition-care-base p-5 rounded-[20px] -z-50'>
            <div className='w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-tuition-care-base-light'>
                <img className='w-full' src={userImg} alt="" />
            </div>
            <div>
                <h4 className='font-semibold text-xl mb-6'>{userName}</h4>
            </div>
            <div className='relative'>
                <p className='text-lg'>{reviewText}</p>
                <FontAwesomeIcon
                    icon={faQuoteRight}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-tuition-care-base-light opacity-20'
                />
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <div className='flex items-center h-[30px]'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<StarIcon className="inline-block h-6 w-6" fill='none' stroke='#0e59ed' />}
                        fullSymbol={<StarIcon className="inline-block h-6 w-6 text-tuition-care-base-light" stroke='#0e59ed' />}
                        readonly
                    ></Rating>
                </div>
                <p className='ml-2 text-gray-400'><span className='font-semibold text-xl text-tuition-care-base'>{rating}</span>/<small>5.00</small> </p>
            </div>
        </div>
    );
};

export default Review;