import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className=' mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-11/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;