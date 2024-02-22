import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Header/Footer';
//import Navbar from '../../components/Expriiment/Navbar';
// backup navbar
const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;