import React from "react";

const About = ()=>{

    return (
        <div className="about border border-dark d-flex flex-column  justify-content-center p-3">
            <div className="abt-content">
                <h1>Hey,</h1>
                <h1>I'm Karan Sodhi</h1>
                <h1>some some cool guy</h1>

                <div>
                    <button className="btn btn-danger"><a href="#contact" className="contactLink">Contact</a></button>
                </div>
            </div>
        </div>
    )
}

export default About