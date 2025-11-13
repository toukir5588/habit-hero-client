import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingSpin from '../components/LoadingSpinar/LoadingSpin';

const RootLayout = () => {
    const {state} = useNavigation()
    return (
        <div className=' mx-auto'>
            <Navbar></Navbar>
            <div className=''>
             {state == 'loading' ? <LoadingSpin></LoadingSpin> :<Outlet></Outlet> }   
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;