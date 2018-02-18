import React from 'react';
import Navigation from '../components/Navigation';



const Header = () => {
    return (
        <div className="header">
            <Navigation/>
          
            <img src="" alt="" className="header__logo" />
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Software Engineer </span>
                    <span className="heading-primary--sub">I build tools for Human</span>
                </h1>

                <div>
                    <img src="img/amaumba1.jpeg" alt="" className="profileHeader__img" /> 
                </div>
            </div>
        </div>
    );
}

export default Header; 