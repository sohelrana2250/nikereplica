import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const ErrorElement = () => {
    const error = useRouteError();
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='m-3'>
                    <h1 className='text-center text-red-500 text-3xl font-bold'>Error 404 </h1>
                    <p className='text-center text-red-500 text-2xl font-bold'>Some is Wrong Server Error is 401 to 499</p>
                    <p className='text-center text-red-500 text-xl font-bold'>Please Relex</p>
                    <p className='text-center text-red-500 text-3xl font-bold'>
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <p className='text-center text-3xl'>Please LogOut <button>Logout</button> and Lock Back in</p>
                    <Link to='/' className='underline text-2xl font-serif hover:bg-gray-800'>Back</Link>
                </div>
            </div>
        </>
    );
};

export default ErrorElement;