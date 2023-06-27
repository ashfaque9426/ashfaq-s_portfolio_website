// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './ProjectReviewHome.css';
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
import prevImg1 from '../../assets/projectImages/image.jpg';
import prevImg2 from '../../assets/projectImages/prev2.jpg';
import prevImg3 from '../../assets/projectImages/prev3.jpg';
import { Fade } from 'react-awesome-reveal';


const ProjectReviewHome = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    
    return (
        <section className='p-5 swiperContainer'>
            <h2 className='fw-bold mb-3 d-flex justify-content-between projectPrevHeading'><span>Project Review</span> <Link to='/projects'>Projects Details</Link></h2>
            <Fade delay={500}>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper customSwipClass"
                    style={{ height: '750px' }}
                >
                    <SwiperSlide style={{ backgroundImage: `url(${prevImg3})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}><Link to='https://the-food-artisan.web.app/' className='fw-bold text-light fs-2' target="_blank">The Food Artisan</Link></SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${prevImg2})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}><Link to='https://toy-marketplace-client-side.web.app/' className='fw-bold text-light fs-2' target="_blank">Figuarama</Link></SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: `url(${prevImg1})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}><Link to='https://summer-camp-client-side-f02f8.web.app' className='fw-bold text-light fs-2' target="_blank">Shutter Safari</Link></SwiperSlide>
                </Swiper>
            </Fade>
        </section>
    );
};

export default ProjectReviewHome;