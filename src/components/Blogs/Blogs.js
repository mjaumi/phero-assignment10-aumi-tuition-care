import React from 'react';

const Blogs = () => {
    return (
        <section className='pt-28'>
            <h2 className='font-bold text-3xl text-tuition-care-base-light'>Questions & Answers</h2>
            <div className='w-4/5 mx-auto border-2 border-tuition-care-base p-5 rounded-2xl text-left text-tuition-care-base mt-8'>
                <h3 className='text-xl font-semibold'>Q1. What is the difference between Authorization and Authentication? </h3>
                <p className='mt-4'><strong className='text-tuition-care-text-base-light'>Answer:</strong> <strong>Authentication</strong> is the process of verifying someone to know his/her identification. On the other hand, <strong>Authorization</strong> is the process of verifying which files or data user can access to. For example, In an e-commerce website, one individual user must be logged in to confirm his/her identity in order to order something. This is <strong>Authentication</strong>. And again after log in, we can verify whether the user has any discount coupon or voucher or not. This process is called <strong>Authorization</strong>.</p>
            </div>
            <div className='w-4/5 mx-auto border-2 border-tuition-care-base p-5 rounded-2xl text-left text-tuition-care-base mt-8'>
                <h3 className='text-xl font-semibold'>Q2. Why are we using firebase? What other options do we have to implement authentication? </h3>
                <p className='mt-4'><strong className='text-tuition-care-text-base-light'>Answer:</strong> We use firebase mainly for <strong>authentication & hosting</strong>. Google firebase offers us easy to use backend development tools to integrate authentication to our website and mobile apps and it is secured. Moreover, it reduces our development workload time as we do not have to build an authentication tool from the scratch.
                    <br />
                    There are plenty of other options which we can implement for authentication. Among them <strong>Parse, Back4App, AWS Amplify, Kuzzle, Couchbase</strong>  etc. are famous. This options that I have mentioned are also open source.
                </p>
            </div>
            <div className='w-4/5 mx-auto border-2 border-tuition-care-base p-5 rounded-2xl text-left text-tuition-care-base mt-8'>
                <h3 className='text-xl font-semibold'>Q3. What other services does firebase provide other than authentication? </h3>
                <p className='mt-4'><strong className='text-tuition-care-text-base-light'>Answer:</strong> Firebase provides different kinds of services that helps us to develop state of the earth quality mobile and web applications in no time. It also reduces our workload as we can use firebase for most of the backend tasks. We mainly use firebase for authentication. But there are some other services that are provided by firebase and is useful too. Among them <strong>Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config</strong> etc. are most useful.</p>
            </div>
        </section>
    );
};

export default Blogs;