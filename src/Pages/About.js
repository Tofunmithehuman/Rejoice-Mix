import React, { useEffect } from "react";
import '../styles/styles.css';
import Aos from "aos";
import "aos/dist/aos.css"
import img from '../Media/imgTwo.jpg';


const About = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
            <div className="About">
                <div className="container">
                <div className="d-flex justify-content-between align-items-center gap-5 " id="parent">
                    <div data-aos="fade-up" className="content w-60">
                            <h1 className="w-60">About RJ-MIX</h1>
                            <br />
                            <br />
                            <p className="w-60">
                                Music is an art where creatiity can be limitless, 
                                I had the chance to work with an handful of talented artists across the world. 
                                Take a look at some of the projects and collaborations that i personally produced and worked on. 
                                Music is an art where creatiity can be limitless, I had the chance to work with an handful of talented artists across the world. 
                                Take a look at some of the projects and collaborations that i personally produced and worked on. 
                            </p>
                            <p className="w-60">
                                Music is an art where creativity can be limitless, 
                                I had the chance to work with an handful of talented artists across the world.
                                Take a look at some of the projects and collaborations that i personally produced and worked on. 
                            </p>
                            <br />
                            <br />
                            <br />
                            <h3 className="fst-italic">"We aim for Sucess and Strive for Greatness."</h3>
                    </div>
                    <img data-aos="fade-up" src={img} alt="Studio" about="Rejoice Moyosola Joseph" />
                </div>
            </div>
            </div>
    );
}

export default About;

