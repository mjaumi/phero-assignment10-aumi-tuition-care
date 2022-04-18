import React from 'react';
import me from '../../images/me.jpg';

const About = () => {
    //rendering about component
    return (
        <section className='w-[90%] md:w-4/5 mx-auto py-28'>
            <h2 className='text-tuition-care-base font-bold text-2xl md:text-4xl'>About Me</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 max-h-[640px]'>
                <div className='text-center md:text-left flex flex-col justify-center text-tuition-care-base h-1/2 mt-14 md:mt-0'>
                    <h3 className='font-black text-2xl md:text-5xl'>Milhan Joardar Aumi</h3>
                    <p className='text-base md:text-xl'>From Dhaka, Bangladesh.</p>
                    <p className='text-base md:text-xl'>CSE Undergraduate Student From AUST.</p>
                </div>
                <div className='order-first md:order-last flex justify-end h-full md:h-1/2'>
                    <img className='rounded-3xl shadow-3xl' src={me} alt="" />
                </div>
            </div>
            <div className='text-center md:text-left text-tuition-care-base border-2 border-tuition-care-base p-5 rounded-2xl mt-10 md:mt-0'>
                <h2 className='font-black text-xl md:text-3xl'>Educational Qualifications</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='mt-5 md:ml-8'>
                        <h3 className='font-black text-lg md:text-2xl mb-3'>B.Sc Information</h3>
                        <p className='text-base md:text-xl'>University: <span className='font-bold'>Ahsanullah University of Science and Technology</span></p>
                        <p className='text-base md:text-xl mt-1'>Department: <span className='font-bold'>Computer Science and Engineering</span></p>
                        <p className='text-base md:text-xl mt-1'>Semester: <span className='font-bold'>3<sup>rd</sup> Year 2<sup>nd</sup> Semester</span></p>
                    </div>
                    <div className='mt-5 md:ml-8'>
                        <h3 className='font-black text-lg md:text-2xl mb-3'>College Information</h3>
                        <p className='text-base md:text-xl'>College: <span className='font-bold'>BAF Shaheen College, Dhaka</span></p>
                        <p className='text-base md:text-xl mt-1'>Group: <span className='font-bold'>Science</span></p>
                        <p className='text-base md:text-xl mt-1'>H.S.C Batch: <span className='font-bold'>2018</span></p>
                        <p className='text-base md:text-xl mt-1'>H.S.C Result: <span className='font-bold'>GPA 5.00</span></p>
                    </div>
                    <div className='mt-5 md:ml-8'>
                        <h3 className='font-black text-lg md:text-2xl mb-3'>School Information</h3>
                        <p className='text-base md:text-xl'>School: <span className='font-bold'>Ideal School and College</span></p>
                        <p className='text-base md:text-xl mt-1'>Group: <span className='font-bold'>Science</span></p>
                        <p className='text-base md:text-xl mt-1'>S.S.C Batch: <span className='font-bold'>2016</span></p>
                        <p className='text-base md:text-xl mt-1'>S.S.C Result: <span className='font-bold'>GPA 5.00</span></p>
                    </div>
                    <div className='mt-5 md:ml-8'>
                        <h3 className='font-black text-lg md:text-2xl mb-3'>Other Information</h3>
                        <p className='text-base md:text-xl'>Tuition Experience: <span className='font-bold'>More Than 4 years</span></p>
                    </div>
                </div>
            </div>
            <div className='text-center md:text-left text-tuition-care-base border-2 border-tuition-care-base p-5 rounded-2xl mt-10'>
                <h2 className='font-black text-xl md:text-3xl'>My Goals</h2>
                <div className='md:ml-8'>
                    <p className='text-base md:text-xl mt-5'>I am currently learning MERN stack development from <strong>Programming Hero</strong>. It has been quite an interesting journey with them. I have learned a lot through this course. I am currently working very hard to achieve my goal which is to be a <strong>Junior Web Developer</strong> and I will never stop working hard as I have to upgrade myself every moment to sustain in this ever changing industry. So, I will work very hard to achieve my goal to be a <strong>Junior Web Developer</strong> and I will <strong>never give up</strong>. In sha allah.</p>
                </div>
            </div>
        </section>
    );
};

export default About;