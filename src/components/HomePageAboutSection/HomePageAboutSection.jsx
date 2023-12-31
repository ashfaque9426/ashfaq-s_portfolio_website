// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import './HomePageAboutSection.css';

const HomePageAboutSection = () => {
    return (
        <article className='mx-5 aboutSectionContainer' style={{marginTop: "100px"}}>
            <h2 className='fw-semibold'>About Me...</h2>
            <Fade>
                <p className='homePageAboutInfo'>Hi, I am Ashfaq-Ul-Alim. I am a MERN Stack Web-Developer. I build MERN stack Single Page, Mobile Responsive, Front End Applications or sites so do manage the backend part using ExpressJS and MongoDb. Today I am going to share with you from where I started web development and also my Future goals regarding Web Development and Programming. So, basically...<Link to='/about'>Learn more?</Link></p>
            </Fade>
        </article>
    );
};

export default HomePageAboutSection;