import React from "react";
import './skills.css'
import Frontend from "./frontend/Frontend";
import Backend from "./backend/Backend";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                My techinical level
            </span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}

export default Skills;