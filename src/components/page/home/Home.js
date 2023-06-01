import React from "react";
import Social from "./social/Social";
import Description from "./description/Description";
import './home.css'
import ScrollDown from "./scrollDown/ScrollDown";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home__content grid">
                    <Social/>
                    <div className="home__img">
                    </div>
                    <Description/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}
export default Home;