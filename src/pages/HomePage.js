
import React from 'react';
import Header from '../layout/Header';
import Features from '../layout/Features';
import Footer from '../layout/Footer';
import ProfileHeader from '../layout/ProfileHeader';

//import { Link } from 'react-router-dom';


const HomePage = (props) => (
    <div className="container">
            <Header/> 
            <ProfileHeader /> 
            <Features />
            <Footer /> 
    </div>
)

export default HomePage; 