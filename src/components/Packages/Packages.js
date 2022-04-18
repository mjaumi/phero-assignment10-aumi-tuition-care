import usePackageData from '../../hooks/usePackageData';
import Package from '../Package/Package';

const Packages = () => {
    //fetching packages data from custom hook
    const [packages] = usePackageData();

    //rendering packages component
    return (
        <section className='w-[90%] md:w-4/5 mx-auto py-28'>
            <h2 className='text-tuition-care-base font-bold text-2xl md:text-4xl'>All Tuition Packages</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                {
                    packages.map(tuitionPackage => <Package
                        key={tuitionPackage.id}
                        tuitionPackage={tuitionPackage}
                    ></Package>)
                }
            </div>
        </section>
    );
};

export default Packages;