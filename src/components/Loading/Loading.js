import React from 'react';

const Loading = () => {
    //rendering loading component
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-tuition-care-base-light spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="text-tuition-care-base-light spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 ml-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="text-tuition-care-base-light spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 ml-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;