import React from 'react';
import MenuDashbord from '../../Reuseable/MenuDashbord';
import FetchArrivals from './FetchArrivals';

const NewArrivals = () => {
    return (
        <>
            <div className="flex">
                <MenuDashbord />

                <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
                    <FetchArrivals />
                </div>
            </div>

        </>
    );
};

export default NewArrivals;