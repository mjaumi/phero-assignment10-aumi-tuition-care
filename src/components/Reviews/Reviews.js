import React from 'react';
import useReviewData from '../../hooks/useReviewData';
import Review from '../Review/Review';

const Reviews = () => {
    //fetching review data from custom hook
    const [reviews] = useReviewData();

    //rendering reviews component
    return (
        <section className='w-[90%] md:w-4/5 mx-auto m-28'>
            <h2 className='text-tuition-care-base font-bold text-2xl md:text-4xl capitalize'>What the guardians are saying</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </section>
    );
};

export default Reviews;