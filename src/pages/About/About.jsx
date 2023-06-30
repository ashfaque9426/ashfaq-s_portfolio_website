// eslint-disable-next-line no-unused-vars
import React from 'react';
import ParticlesBG from '../../components/ParticlesBG/ParticlesBG';
import AboutPageBanner from '../../components/ContactMeForm/AboutPageBanner/AboutPageBanner';
import './About.css';

const About = () => {
    return (
        <main role='main'>
            <ParticlesBG />
            <section style={{position: 'relative', zIndex: '3', color: 'white'}}>
                <AboutPageBanner />
                <div style={{marginTop: '100px', marginBottom: "300px"}}>
                    <h2 className='fs-4 text-center'>My Story</h2>
                    <p className='m-5 mt-2 text-justify fs-5 abtPageSectionTxt'>Hi, I am Ashfaq-Ul-Alim. I am a MERN Stack Web-Developer. I build MERN Stack Single Page, Mobile Responsive, Front End Applications or sites so do manage the backend part using ExpressJS and MongoDb. Today I am going to share with you from where I started web development and also my Future goals regarding Web Development and Programming. So, basically, I have joined a course of Programming Hero regarding web development 6 months earlier. They have introduced me with technologies such as React.js, Express, Node, Mongo and taught me how I can learn something as a Junior Web Developer and then progress myself furthur by keep learning. That course was really helpful for me. I am very much keen to learn about technologies regaring Web Development and now trying to learn Next.js. I am an active learner. I like to implement features into my website using those technologies. I know I am gonna fail maybe 100 times. But Whenever the code works as intended it gives me such a joy which no other thing can give. I am a dropout student but I beleive now I can do at least some Programming regarding web development field and keep further learning which makes life interesting. Learnign a bit irritating at first but overall it&apos;s a fun experience. So my future goal is to learn those technologies that I know a bit further deeply so that I can imagine what is going on behind the scene while writting code. There is no such things like that when you know as a developer what you are doing and how everything works. Also I want to learn Next.js maybe Vue and other technogies if my job requires it. I am also interested in learning about Linear search and Binary search, Tree like Structure, Recursion, Memoiztion, BigO notation and about other algorithms. Maybe I will do some competative programming someday. Programming is not just web or app development. It&apos;s all about searching for a solution to a speciq problem step by step so do decision making. I really like to think like a programmer.</p>
                </div>
            </section>
        </main>
    );
};

export default About;