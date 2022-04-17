import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section className='w-4/5 mx-auto m-28'>
            <h2 className='text-tuition-care-base font-bold text-4xl'>My Tuition Packages</h2>
            <div className='grid grid-cols-3 gap-8 mt-8'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;