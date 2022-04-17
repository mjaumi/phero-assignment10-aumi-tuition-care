import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { packageId } = useParams();

    return (
        <section className='pt-28'>
            <h2>Welcome to checkout: {packageId}</h2>
        </section>
    );
};

export default Checkout;