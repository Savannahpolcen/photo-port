// import react to the file//
import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

// Add About function//
function About() {
    // function need to return a section//
    return (
        <section className="my-5">
            <h1 id="about">Who am I ?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover"/>
        </section>
       
    );
}


export default About;