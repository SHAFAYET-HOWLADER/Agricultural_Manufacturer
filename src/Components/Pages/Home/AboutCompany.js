import React from 'react';
import about_img from '../../../banner/about-img.png';
import about_icon1 from '../../../banner/icon-1.svg';
import about_icon2 from '../../../banner/icon-2.svg';
import tools_logo from '../../../tools_img/logo_tools.png';

const AboutCompany = () => {
    return (
        <section className='about bg-slate-100 pt-24'>
            <div className="flex text-center flex-col w-full border-opacity-50">
                <h2 className='font-heading text-4xl font-bold'>About Our Company</h2>
                <div className="divider">
                    <img className='w-10 h-10' src={tools_logo} alt='img' />
                </div>
                <p className='font-paragraph'>Know about our manufacturing what we do</p>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={about_img} className="max-w-sm w-full rounded-lg shadow-2xl" alt='img' />
                    <div className='pl-8'>
                        <h2 className="text-4xl w-50 font-heading font-bold">Live with big dream to get more inspiring solutions from here.</h2>
                        <div className='about_info'>
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="grid flex-grow h-32 card rounded-box items-center">
                                    <img className='h-20 w-20' src={about_icon1} alt='img' />
                                </div>
                                <div className="divider sm:pb-8 lg:divider-horizontal">
                                    <img className='h-24 w-24' src={tools_logo} alt='img' />
                                </div>
                                <div className="grid flex-grow h-32 card  rounded-box items-center">
                                    <div>
                                        <h3 className='text-3xl font-paragraph font-bold'>Research & Analysis</h3>
                                        <p className='font-paragraph '>
                                            Our research and analysis process fully depend on QC test.Once if QC proved our production tools
                                            then finally we declare for live production tools.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='about_info'>
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="grid flex-grow h-32 card rounded-box items-center">
                                    <img className='h-20 w-20' src={about_icon2} alt='img' />
                                </div>
                                <div className="divider sm:pb-8 lg:divider-horizontal">
                                    <img className='h-24 w-24' src={tools_logo} alt='img' />
                                </div>
                                <div className="grid flex-grow h-32 card  rounded-box items-center">
                                    <div>
                                        <h3 className='text-3xl font-paragraph font-bold'>Quality Product</h3>
                                        <p className='font-paragraph '>
                                            We make always quality products for customers and consumers so that they can use
                                            tools easily.We believe in customers satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutCompany;