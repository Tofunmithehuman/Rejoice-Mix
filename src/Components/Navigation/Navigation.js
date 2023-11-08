import React, { useEffect } from "react";
import './Navigation.css';
import Aos from "aos";
import "aos/dist/aos.css"




const Navigation = () => {

    useEffect(()=> {
        Aos.init({duration: 1200})
    }, [])
    
    return (
        <div className="Navigation">
            <header data-aos="fade-down" className="d-flex justify-content-between align-items-center p-4 w-100 position-fixed">
                <img src="" alt="RJ-MIX"about="RJ-MIX" />

                <nav>
                    <ul className="d-flex align-items-center mb-0 gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navigation;

