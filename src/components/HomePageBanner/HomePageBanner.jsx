// eslint-disable-next-line no-unused-vars
import React from 'react';
import bannerImage from '../../assets/backgroundImages/banner_image.jpg';
import myImage from '../../assets/personalImages/myPersonalImage.jpg';
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import './HomePageBanner.css'

const HomePageBanner = () => {
    return (
        <section className='d-flex flex-column flex-md-row justify-content-center align-items-center text-white gap-5 banner' style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "calc(100vh - 10vh)"}}>
            <Slide direction='left'>
                <div className='d-flex flex-column'>
                    <h2>Hello! I am Ashfaq-Ul-Alim</h2>
                    <p className='mb-0 fs-4'>I am a <strong>MERN Stack</strong> Web Developer</p>
                    <p className='mt-1 mb-3'>Welcome to my Portfolio Website</p>
                    <Link className='btn btn-primary w-50' to="/projects">Go to Projects</Link>
                </div>
            </Slide>
            <Slide direction="right">
                <img style={{ width: "350px", aspectRatio: "1", objectPosition: "top" }} className='object-fit-cover rounded-circle' src={`${myImage}`} alt="Ashfaq's Image" />
            </Slide>
        </section>
    );
};

export default HomePageBanner;