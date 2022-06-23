import React from 'react';
import banner_one from '../../../banner/banner_one.jpg';
import banner_two from '../../../banner/banner_two.jpg';
import banner_three from '../../../banner/banner_three.jpg';
const Banner = () => {
    return (
        <section className='banner'>
            <div className="carousel w-full h-min">

                <div id="slide1" className="carousel-item relative w-full">
                    <div className='absolute text-white px-1 py-2 top-[45%] left-[17%]' style={{
                        backgroundColor: 'rgba(64, 226, 43, 0.85)',
                    }}>
                        <h2 className='text-3xl text-center font-paragraph font-bol'>Agricultural Manufacturer</h2>
                        <p className='text-xl text-center font-paragraph font-bold'>Find originals tools for cultivation</p>
                    </div>
                    <img style={{
                        height: '500px'
                    }} src={banner_one} className="w-full" alt='img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='absolute px-1 py-2 top-[45%] left-[17%]' style={{
                        backgroundColor: 'rgba(64, 226, 43, 0.85)',
                    }}>
                        <h2 className='text-3xl text-center font-paragraph font-bold text-white'>Agricultural Manufacturer</h2>
                        <p className='text-xl text-center font-paragraph font-bold text-white'>Find long usage tools for cultivation</p>
                    </div>
                    <img style={{
                        height: '500px'
                    }} src={banner_two} className="w-full" alt='img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='absolute px-1 py-2 top-[45%] left-[17%]' style={{
                        backgroundColor: 'rgba(64, 226, 43, 0.85)',
                    }}>
                        <h2 className='text-3xl text-center font-paragraph font-bold text-white'>Agricultural Manufacturer</h2>
                        <p className='text-xl text-center font-paragraph font-bold text-white'>Find quality tools for cultivation</p>
                    </div>
                    <img style={{
                        height: '500px'
                    }} src={banner_three} className="w-full" alt='img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;