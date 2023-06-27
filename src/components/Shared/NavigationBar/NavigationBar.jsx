// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
    const location = useLocation();
    const scrollToSection = (id, destinationId, headingId) => {
        document.getElementById(id).classList.add('fw-bold')
        const targetSection = document.getElementById(destinationId);
        const targetedHeading = document.getElementById(headingId);
        const sectionTopPos = targetSection.offsetTop;
        const headingHeight = targetedHeading.offsetHeight + 65;
        window.scrollTo({
            top: sectionTopPos - headingHeight,
            behavior: 'smooth'
        });
        // targetSection.scrollIntoView({behavior: 'smooth'});
    }

    const deselectActiveTab = id => {
        document.getElementById(id).classList.remove('fw-bold');
    }

    useEffect(()=> {
        if (location.pathname.endsWith('/')) {
            const handleScroll = () => {
                function isInViewport(element) {
                    const rect = element.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );
                }
                const headingElement = document.getElementById('skillsHeading');
                const formHeading = document.getElementById('formHeading');
                const isInView = isInViewport(headingElement);
                const isInView2 = isInViewport(formHeading);
                if (isInView) {
                    document.getElementById('skillTab').classList.add('fw-bold');
                } else {
                    document.getElementById('skillTab').classList.remove('fw-bold');
                }
                if (isInView2) {
                    document.getElementById('contactTab').classList.add('fw-bold');
                } else {
                    document.getElementById('contactTab').classList.remove('fw-bold');
                }
            }
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
        

        
    }, [location])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Ashfaq&apos;s Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link fw-bold text-black" : "nav-link"} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link fw-bold text-black" : "nav-link"} to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link fw-bold text-black" : "nav-link"} to="/about">About Me</NavLink>
                        </li>
                        {
                            location.pathname.endsWith('/') ? <>
                                <li className="nav-item">
                                    <NavLink id='skillTab' className="nav-link" onClick={() => scrollToSection('skillTab', 'skills', 'skillsHeading')} onBlur={() => deselectActiveTab('skillTab')}>Skills</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink id='contactTab' className="nav-link" onClick={() => scrollToSection('contactTab', 'contactSection', 'formHeading')} onBlur={() => deselectActiveTab('contactTab')}>Contact</NavLink>
                                </li>
                            </> : ""
                        }
                    </ul>
                    <div className='pb-3 topNavBtn'>
                        <a href="/resume.pdf" download="resume.pdf" className='btn btn-dark'>Download Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;