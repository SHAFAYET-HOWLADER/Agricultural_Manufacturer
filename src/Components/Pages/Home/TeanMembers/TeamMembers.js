import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import team1 from '../../../../banner/team1.jpg';
import team2 from '../../../../banner/team2.jpg';
import team3 from '../../../../banner/team3.jpg';
import tree from '../../../../tools_img/logo_tools.png'
const TeamMembers = () => {
    return (
        <section className='team py-24'>
            <div className='text-center'>
                <h2 className='font-heading text-4xl font-bold'>An Awesome Members</h2>
                <div className="divider">
                    <img className='w-10 h-10' src={tree} alt='img' />
                </div>
                <p className=' pb-8 font-paragraph'>Meet our awesome and expert team members</p>
            </div>
                <div className='container mx-auto justify-items-center grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="w-96 border-2 hover:bg-neutral hover:text-white ease-in duration-300">
                        <figure><img className='w-full h-50' src={team1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-paragraph font-bold text-3xl">Josette Wadsworth</h2>
                            <p className='text-1xl font-paragraph'>
                                Senior Engineer
                                <div className='flex pt-5'>
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
                            </p>
                        </div>
                    </div>
                    <div className="w-96 border-2 hover:bg-neutral hover:text-white ease-in duration-300">
                        <figure><img className='w-full h-50' src={team2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-paragraph font-bold text-3xl">Smith Bravo</h2>
                            <p className='text-1xl font-paragraph'>
                                Assistant Manager
                                <div className='flex pt-5'>
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
                            </p>
                        </div>
                    </div>
                    <div className="w-96 border-2 hover:bg-neutral hover:text-white ease-in duration-300">
                        <figure><img className='w-full h-50' src={team3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-paragraph font-bold text-3xl">Roy Charles</h2>
                            <p className='text-1xl font-paragraph'>
                                Production Manager
                                <div className='flex pt-5'>
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
                            </p>
                        </div>
                    </div>
                </div>
           
        </section>
    );
};

export default TeamMembers;