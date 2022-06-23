import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import footer from '../../banner/footer-bg.jpg';
import { FaArrowRight } from 'react-icons/fa';

import logo from '../../tools_img/logo_tools.png';


const Footer = () => {
    return (
        <section className='footer py-8' style={{
            background: `url(${footer})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <div className='container mx-auto'>
                <footer className="footer p-10 text-base-content">
                    <div className='text-white'>
                        <span className="footer-title">
                            <img className='h-24 w-24' src={logo} alt='img' />
                            <Link to='/home' className="text-xl">
                                <h3 className='text-2xl font-heading text-white'>Agriculture</h3>
                                <small className=' text-white'>Industrial & Factory</small>
                            </Link>
                        </span>
                    </div>
                    <div className='text-white' >
                        <span className='font-heading text-3xl font-bold pb-4' >Our Services</span>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Chemical Research</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Construction Materials</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Agricultural Engineering</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Bridge Engineering</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Perfected Engineering</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Automotive And System</p></Link>
                    </div>
                    <div className='text-white' >
                        <span className='font-heading text-3xl font-bold pb-4' >Quick Link</span>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; About Company</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Latest Projects</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Latest From Blog</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Our Testimonials</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Our Mission</p></Link>
                        <Link to='*' > <p className='font-paragraph text-xl flex items-center' ><FaArrowRight /> &nbsp; Contact Us</p></Link>
                    </div>
                    <div>
                        <span className='text-white font-heading text-3xl font-bold pb-4'>Subscribe Now</span>
                        <input type='email' placeholder='info@gmail.com' required className='px-4 py-2' />
                        <span className='text-white font-heading text-3xl font-bold pt-8'>Follow Us</span>
                        <div className='flex pt-5 text-orange-400'>
                            <a target="_blank" href="https://www.facebook.com">
                                <FaFacebookSquare className='text-2xl mr-3 cursor-pointer' />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com">
                                <FaLinkedin className='text-2xl mr-3 cursor-pointer' />
                            </a>
                            <a target="_blank" href="https://www.instagram.com">
                                <FaInstagramSquare className='text-2xl mr-3 cursor-pointer' />
                            </a>
                            <a target="_blank" href="https://www.twitter.com">
                                <FaTwitterSquare className='text-2xl mr-3 cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </footer>
            </div >
        </section >       
    );
};

export default Footer;