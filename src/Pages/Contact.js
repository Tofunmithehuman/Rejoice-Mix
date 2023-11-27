import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import '../styles/styles.css';

function Contact() {

    useEffect(()=> {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className="Contact">
            <div data-aos="fade-up" className="container">
                <div className="contain">
                    <h3>Contact me</h3><br />
                    <p>To get more information on my services and how i can help you work on your next musical project, please fill out this form. I will get back to you as soon as possible.</p><br /><br />
                    <p>(+234) phonenumber</p>
                    <p>example@gmail.com</p>
                    <p>Twitter Instagram Facebook</p>
                </div>
                <form>
                    <input type="text" placeholder="Full Name" required/><br /><br />
                    <input type="email" placeholder="Email" required/><br /><br />
                    <input type="number" placeholder="Phone" required/><br /><br />
                    <input type="text" placeholder="Subject" required/> <br /><br />
                    <textarea placeholder="Message" required/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}   

export default Contact;