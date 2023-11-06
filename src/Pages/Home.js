import React from "react";
import '../styles/styles.css';
import Navigation from "../Components/Navigation/Navigation";
import About from "./About";


const Home = () => {
    return (
        <div className="Home">
            <Navigation/>
            <div className="text-center p-5">
                <div className="heroContent">
                    <h1>Rejoice Moyosola Joseph</h1>
                    <h5>Audio Engineering | Musical Production | Mixing & Mastering</h5>
                    <p>Aim for Sucess, Strive for Greatness, Turn you next musical <br /> project into a grammy winning masterpiece.</p>
                    <button>CONTACT ME</button>
                </div>
            </div>

            <About />
        </div>
    );
}

export default Home;

