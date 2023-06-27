// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import './ContactMeForm.css'
import { Fade } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactMeForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e1gvywp', 'template_jezojxo', form.current, 'qHUjqGtYg2hoef74X')
            .then((result) => {
                console.log(result.text);
                Swal.fire('Your Email has been sent.');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Fade>
            <section id='contactSection' style={{ marginBlock: '100px' }}>
                <h2 id='formHeading' className='px-5 fw-bold'>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className='m-5 p-5 mt-3 border rounded-3 contactForm' style={{ backgroundColor: "#f8f9fa" }}>
                    <div className="row">
                        <div className="col mb-3">
                            <input type="text" name='firstName' className="form-control border border-3" placeholder="First name" />
                        </div>
                        <div className="col mb-3">
                            <input type="text" name="lastName" className="form-control border border-3" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3">
                            <input type="email" style={{ outline: "none" }} name="email" className="form-control border border-3" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <textarea className='form-control p-3 border border-3' name="message" cols="100" rows="10" placeholder='Your Message'></textarea>
                        </div>
                    </div>
                    <input type="submit" className='btn btn-dark mt-2 w-25 submitBtn' value="Send" />
                </form>
            </section>
        </Fade>
    );
};

export default ContactMeForm;