import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    //initializing react hooks
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    //rendering custom link component
    return (
        <div>
            <Link
                style={{ borderBottom: match ? '2px solid #0e59ed' : 'none' }}
                to={to}
                {...props}
                className='inline-block px-3 py-2 hover:opacity-40 duration-300 mt-5 md:mt-0'
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;