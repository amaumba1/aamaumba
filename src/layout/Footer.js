import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <ul className="nav">
                <li className="nav__item"><a href="#" className="nav__link">Follow me on twitter</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Check my codepen</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Visit my repl.it</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact me</a></li>
                <li className="nav__item"><a href="#" className="nav__link">See my github projects</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Send me a request on linkedin</a></li>
            
            </ul>
            <p className="copyright">
                &copy; Copyright 2018 by Ally Maumba
            </p>
        </footer>
    );
}

export default Footer; 