import '../styles/styles.css';
import Aos from "aos";
import "aos/dist/aos.css"
import Navigation from "../Components/Navigation/Navigation";
import About from "./About";
import { useEffect } from 'react';



const Home = () => {

    useEffect(()=> {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className="Home">
            <Navigation/>
            <div className="text-center p-3" id='parent'>
                <div data-aos="fade-up" className="heroContent">
                    <h1>Rejoice Moyosola Joseph</h1>
                    <h6>Audio Engineering | Musical Production | Mixing & Mastering</h6>
                    <p>Aim for Sucess, Strive for Greatness, Turn you next musical <br /> project into a grammy winning masterpiece.</p>
                    <button>CONTACT ME</button>
                </div>
            </div>

            <About />
        </div>
    );
}

export default Home;

