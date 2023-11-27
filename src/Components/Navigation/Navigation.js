import React, { useEffect } from "react";
import './Navigation.css';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"




const Navigation = () => {

    useEffect(()=> {
        Aos.init({duration: 1200})
    }, [])
    
    return (
        <div className="Navigation">
            <header data-aos="fade-down" className=" p-4 w-100 position-fixed">
                <Link to='/'><h5>RJ-MIX</h5></Link>

                <nav>
                    <ul className="d-flex align-items-center mb-0 gap-4">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='services'>Service</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navigation;

