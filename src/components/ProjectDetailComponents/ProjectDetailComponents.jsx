// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './ProjectDetailComponents.css';
import fa1 from '../../assets/projectImages/foodArtisanImages/fa1.png';
import fa2 from '../../assets/projectImages/foodArtisanImages/fa2.png';
import fa3 from '../../assets/projectImages/foodArtisanImages/fa3.png';
import fa4 from '../../assets/projectImages/foodArtisanImages/fa4.png';
import fa5 from '../../assets/projectImages/foodArtisanImages/fa5.png';
import fg1 from '../../assets/projectImages/figuaramaImages/fg1.png';
import fg2 from '../../assets/projectImages/figuaramaImages/fg2.png';
import fg3 from '../../assets/projectImages/figuaramaImages/fg3.png';
import fg4 from '../../assets/projectImages/figuaramaImages/fg4.png';
import fg5 from '../../assets/projectImages/figuaramaImages/fg5.png';
import fg6 from '../../assets/projectImages/figuaramaImages/fg6.png';
import fg7 from '../../assets/projectImages/figuaramaImages/fg7.png';
import ss1 from '../../assets/projectImages/shutterSafariImages/ss1.png';
import ss2 from '../../assets/projectImages/shutterSafariImages/ss2.png';
import ss3 from '../../assets/projectImages/shutterSafariImages/ss3.png';
import ss4 from '../../assets/projectImages/shutterSafariImages/ss4.png';
import ss5 from '../../assets/projectImages/shutterSafariImages/ss5.png';
import ss6 from '../../assets/projectImages/shutterSafariImages/ss6.png';
import ss7 from '../../assets/projectImages/shutterSafariImages/ss7.png';


const ProjectDetailComponents = () => {
    return (
        <section className='row row-cols-1 row-cols-md-2 row-cols-xl-3 mx-5 my-5 g-4 proCompContainer'>

            <article className='col'>
                <div className="card mb-3 h-100">
                    <h5 className="card-title px-2 py-2">The Food Artisan</h5>
                    <figure>
                        <div id="carouselOneControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={fa1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fa2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fa3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fa4} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fa5} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselOneControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselOneControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </figure>
                    <div className="card-body">
                        <p className="card-text">This Website is called The Food Artisan. Here you will find informations about Maxican Chefs. Visit now to find out more.</p>
                        <div className='d-flex gap-5 justify-content-center fs-5'>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Live Site</h6>
                                <Link target='_blank' to='https://the-food-artisan.web.app/' className='text-black'><CgWebsite /></Link>
                            </div>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Github Client</h6>
                                <Link target='_blank' to='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-ashfaque9426' className='text-black'><FaGithub /></Link>
                            </div>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Github Server</h6>
                                <Link target='_blank' to='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-ashfaque9426' className='text-black'><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h5>Features</h5>
                        <ul>
                            <li>This Website provides informations about Maxican Chefs.</li>
                            <li>This Website has user friendly UI/UX system.</li>
                            <li>This Project has a login authentication system.</li>
                            <li>This Project has private routes.</li>
                            <li>Users can view details about a particular chef&apos;s details after a successfull login.</li>
                            <li>This project fetch required informations from a remote database.</li>
                            <li>Users personal informations are jwt secure.</li>
                            <li>This Project has built using React.js Bootstrap, Firebase, Env, Express.js and Mongodb.</li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                        </ul>
                    </div>
                </div>
                
            </article>
            <article className='col'>
                <div className="card mb-3 h-100">
                    <h5 className="card-title px-2 py-2">Figurama</h5>
                    <figure>
                        <div id="carouselTwoControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={fg1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fg2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fg3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fg4} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fg5} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fg6} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={fg7} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselTwoControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselTwoControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </figure>
                    <div className="card-body">
                        <p className="card-text">This Website is called Figurama. Here you can browse all different Gaming Action Figure Toys. Visit now to discover more.</p>
                        <div className='d-flex gap-5 justify-content-center fs-5'>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Live Site</h6>
                                <Link target='_blank' to='https://toy-marketplace-client-side.web.app/' className='text-black'><CgWebsite /></Link>
                            </div>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Github Client</h6>
                                <Link target='_blank' to='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-ashfaque9426' className='text-black'><FaGithub /></Link>
                            </div>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Github Server</h6>
                                <Link target='_blank' to='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-ashfaque9426' className='text-black'><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h5>Features</h5>
                        <ul>
                            <li>This Website is a community hub for gammers.</li>
                            <li>Users can add their toys too on this website whose informations will be stored to a remote database.</li>
                            <li>This Project has login authentication system.</li>
                            <li>This Project has a private routes. Users can only view the specific details of an Action Figure Toy after Logged in correctly.</li>
                            <li>Required informations are fetched from a remote database.</li>
                            <li>A specific users activities and personal informations are jwt secure.</li>
                            <li>Tools that are used for building this project are React.js, React Bootstrap, Firebase, Env, Express.js, MongoDB, jwt</li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                            <li className='dumpLis' style={{visibility: 'hidden'}}></li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className='col'>
                <div className="card mb-3 h-100">
                    <h5 className="card-title px-2 py-2">Shutter Safari</h5>
                    <figure>
                        <div id="carouselThreeControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={ss1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ss2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ss3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ss4} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ss5} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ss6} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ss7} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselThreeControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselThreeControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </figure>
                    <div className="card-body">
                        <p className="card-text">This Website is called Shutter Safari. Here you can browse different courses for summer bootcamp and enroll classes. Visit now to select your courses.</p>
                        <div className='d-flex gap-5 justify-content-center fs-5'>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Live Site</h6>
                                <Link target='_blank' to='https://summer-camp-client-side-f02f8.web.app/' className='text-black'><CgWebsite /></Link>
                            </div>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Github Client</h6>
                                <Link target='_blank' to='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-ashfaque9426' className='text-black'><FaGithub /></Link>
                            </div>
                            <div className='text-center'>
                                <h6 style={{fontSize: "12px"}} className='fw-bold mb-0'>Github Server</h6>
                                <Link target='_blank' to='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-ashfaque9426' className='text-black'><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h5>Features</h5>
                        <ul>
                            <li>This Website is about summer camp bootcamp school photography classes.</li>
                            <li>This Website provides informations about different courses related to photography class.</li>
                            <li>There are three types of users who use this website.</li>
                            <li>This project has private routes and different protected dashboard menus for different type of users.</li>
                            <li>An Admin can see only admin dashboard, Instructor can see Instructors dashboard and there is a different dashboard for users who are students.</li>
                            <li>This site&apos;s users personal informations are jwt protected.</li>
                            <li>Insttructor can add classes, Admin can make any user to an Instructor or Admin by updating their roles.</li>
                            <li>Students can purchase classes and pay for their purchase.</li>
                            <li>All the required informations are fetched and stored so do get updated to a remote server.</li>
                            <li>Tools used for building this website are React.js, Tailwind, DaisyUI, Firebase, Env, Express.js, MongoDB, JWT, Stripe.js</li>
                        </ul>
                    </div>
                </div>
            </article>

        </section>
    );
};

export default ProjectDetailComponents;