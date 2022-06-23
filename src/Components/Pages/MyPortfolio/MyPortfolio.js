import React from 'react';
import mySelf from '../../../banner/fiverr-pic.png';

const MyPortfolio = () => {
    return (
        <section className='portfolio py-16 bg-slate-100'>
            <div className="flex text-center flex-col w-full border-opacity-50">
                <h2 className='font-heading text-4xl font-bold pb-2'>About Me</h2>
                <div className="divider">
                    <h3 className='font-paragraph text-3xl font-bold text-orange-500'>MySelf</h3>
                </div>
                <p className=' pb-8 font-paragraph'>
                    Know about a passionate coder
                </p>
            </div>

            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center items-center pb-24'>
                <div className='flex-1'>
                    <img            
                    className='w-96 h-96 object-cover' src={mySelf} alt='img' />
                </div>
                <div className='flex-1'>
                    <h2 className='font-paragraph text-5xl pb-5 font-bold text-gray-500'>Hi There !</h2>
                    <div className='font-paragraph text-lg w-96'>
                        <p>I am safayet howlader</p>
                        <p className='text-xl font-bold'>Am a Javascript Developer</p>
                        <p><u>Email </u>: safayethowlader96@gmail.com</p>
                        <p>
                            Fuelled by a passion for designing compelling
                            products, I have a deep desire to excel  and
                            continuously improve in my work.
                            Learn more about my journey below.
                        </p>
                        <div className='divider'>

                        </div>
                        <p>
                            <u>Educational background</u>:
                            Bachelor's in degree.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center items-center pb-24'>
                <div className='flex-1'>
                    <h2 className='font-paragraph text-5xl pb-5 font-bold text-gray-500'>My Career So Far</h2>
                    <div className='font-paragraph text-lg w-96'>
                        <p>
                            Always up a challenge, I have worked for learn start-upa
                            and was a learner of the Programming Hero community.I worked my way up to learn
                            from the community.Went to creative it institute to learn
                            web design.And successfully completed journey.
                            I have converted 20+ psd to html which are relevant And
                            eye-Catching design.
                        </p>
                    </div>

                </div>
                <div className='flex-1'>
                    <div className='grid grid-cols-3 lg:grid-cols-3 gap-4'>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Html</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Css</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Bootstrap</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Tailwind css</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>React.js</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Jquery</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Firebase</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Node.js</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Express.js</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Mongodb</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Netlify</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Github</button>
                        <button className='py-1 text-black rounded-lg shadow-xl bg-white btn-sm border-0 font-paragraph font-bold text-xl'>Heroku</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPortfolio;