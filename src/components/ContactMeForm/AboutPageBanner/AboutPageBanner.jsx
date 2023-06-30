// eslint-disable-next-line no-unused-vars
import React from 'react';
import myImage from '../../../assets/personalImages/myPersonalImage.jpg';
import abtCoverBG from '../../../assets/backgroundImages/abtMeCBG.jpg';
import { TypeAnimation } from 'react-type-animation';

const AboutPageBanner = () => {
    return (
        <section className='py-3 text-center' style={{backgroundImage: `url(${abtCoverBG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
            <img style={{ width: "200px", aspectRatio: "1", objectPosition: "top" }} className='object-fit-cover rounded-circle mt-5' src={`${myImage}`} alt="Ashfaq's Image" />
            
            <TypeAnimation
                sequence={['Hi, This is Ashfaq-Ul-Alim', 1000, 'I am a MERN stack Web Developer', 1000, 'Today I am going to share with you my story regarding Web Development journey.']}
                wrapper='h3'
                speed={20}
                style={{marginBlock: '30px', marginInline: '20px'}}
            />
            
        </section>
    );
};

export default AboutPageBanner;