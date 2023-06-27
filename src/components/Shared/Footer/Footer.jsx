// eslint-disable-next-line no-unused-vars
import React from 'react';
import fbIcon from '../../../assets/icons/fbIcon.png'
import gitIcon from '../../../assets/icons/gitIcon.png';
import linkeIcon from '../../../assets/icons/linkIcon.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="my-5">

            <footer className="bg-dark text-center text-lg-start text-white">
                
                <div className="container p-4 mx-auto">
                    <h3 className='text-center'>Find Me On</h3>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 mt-4">

                        <Link to="https://web.facebook.com/ashfaq.sylvi.3/" target='_blank'><img width={75} height={75} src={fbIcon} alt="Facebook Icon" /></Link>
                        <Link to="https://github.com/ashfaque9426" target='_blank'><img width={75} height={75} src={gitIcon} alt="Github Icon" /></Link>
                        <Link to="https://www.linkedin.com/in/ashfaq-sylvi-52a4a9278/" target='_blank'><img width={75} height={75} src={linkeIcon} alt="Linkedin Icon" /></Link>
                        
                    </div>
                    
                </div>
                
                <div className="text-center p-3">
                    <span className='me-2'>
                        {
                            new Date().getFullYear()
                        }
                    </span>
                    @Ashfaq&apos;s Personal Portfollio Website
                </div>
                
            </footer>

        </div>
    );
};

export default Footer;