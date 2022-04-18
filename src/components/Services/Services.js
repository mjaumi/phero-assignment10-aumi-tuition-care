import useServiceData from '../../hooks/useServiceData';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServiceData();

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
            {console.log(services)}
        </section>
    );
};

export default Services;