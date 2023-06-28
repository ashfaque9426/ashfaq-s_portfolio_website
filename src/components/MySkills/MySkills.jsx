// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { Slide } from 'react-awesome-reveal';
import './MySkills.css';

const MySkills = () => {
    return (
        <section id='skills' style={{marginBlock: '100px'}} className='mb-5'>
            <h2 id='skillsHeading' className='mx-5 mb-3 fw-bold'>My Skills</h2>
            <div className='d-flex flex-column flex-md-row justify-content-center  align-items-center align-items-md-start gap-5'>
                <Slide className='w-100'>
                    <div className='w-100 px-5 frontEndContainer'>
                        <h3 className='mb-3'>Front End</h3>
                        <div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'>
                                    <span>HTML</span> 95%
                                </h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#d94a28" }} width='95' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>CSS3</span> 90%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#3b60e2" }} width='90' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>Bootstrap</span> 95%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#7911ec" }} width='95' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>Tailwind</span> 75%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#38bdf8" }} width='75' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>JavaScript</span> 80%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#e4d04b" }} width='80' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>React</span> 75%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#00cdf2" }} width='75' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide className='w-100' direction='right'>
                    <div className='w-100 px-5 backEndContainer'>
                        <h3 className='mb-3'>Back End</h3>
                        <div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>MongoDB</span> 70%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#006346" }} width='70' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>ExpressJS</span> 90%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#ead41c" }} width='90' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>NodeJS</span> 50%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#539c41" }} width='50' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                            <div>
                                <h4 className='mt-2 d-flex justify-content-between fs-6'><span>JWT</span> 95%</h4>
                                <MDBProgress>
                                    <MDBProgressBar style={{ backgroundColor: "#5d676a" }} width='95' valuemin={0} valuemax={100} />
                                </MDBProgress>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};

export default MySkills;