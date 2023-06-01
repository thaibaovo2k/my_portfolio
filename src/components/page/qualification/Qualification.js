import React from "react";
import './qualification.css'

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">
                Qualification
            </h2>
            <span className="section__subtitle">My qualification</span>
        
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap"></i>
                        {" "} 
                        Education
                    </div>
                    <div className="qualification__button button--flex">
                        <i className="uil uil-bag-alt"></i>
                        {" "} 
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Front-end Developer</h3>
                                <span className="qualification__subtitle">IOTLink Company</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct 2022 - June 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Intern Web Developer</h3>
                                <span className="qualification__subtitle">Freemind Company</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> June 2022 - Oct 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Student</h3>
                                <span className="qualification__subtitle">Da Nang University of Technology and Science</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification