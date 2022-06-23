
import logo from '../../../tools_img/logo_tools.png';
import { useCountUp } from 'react-countup';
import { FaFontAwesomeFlag, FaRProject, FaChild, FaHandHoldingHeart } from 'react-icons/fa'

const CounterUp = () => {
    useCountUp(
        { ref: 'counter', end: 72, delay:2, duration:30},      
    );
    useCountUp(
        { ref: 'counter1', end: 535, delay:2, duration:30},      
    );
    useCountUp(
        { ref: 'counter2', end: 273, delay:2, duration:30},      
    );
    useCountUp(
        { ref: 'counter3', end: 432, delay:2, duration:30},      
    );
    return (
        <section className='countUp py-24 bg-slate-100'>
            <div className="flex text-center flex-col w-full border-opacity-50">
                <h2 className='font-heading text-4xl font-bold'>We are trusted by happy clients</h2>
                <div className="divider">
                    <img className='w-10 h-10' src={logo} alt='img' />
                </div>
                <p className=' pb-8 font-paragraph'>We face most client's satisfaction that grow our manufacture processing as well</p>
            </div>
            <div  className='container mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-slate-400 hover:bg-orange-400 text-center py-5 rounded-lg w-60 sm:py-4'>
                    <div className='text-5xl text-white flex justify-center' >
                        <FaFontAwesomeFlag />
                    </div>
                    <h2 id="counter" className='font-heading font-bold text-3xl py-3' >72+</h2>
                    <h3 className='font-paragraph font-bold text-2xl' >Countries</h3>
                </div>
                <div className='bg-slate-400 hover:bg-orange-400 text-center py-5 rounded-lg w-60'>
                    <div className='text-5xl text-white flex justify-center' >
                        <FaChild />
                    </div>
                    <h2 id="counter1" className='font-heading font-bold text-3xl py-3' >535+</h2>
                    <h3 className='font-paragraph font-bold text-2xl' >Happy Clients</h3>
                </div>
                <div className='bg-slate-400 hover:bg-orange-400 text-center py-5 rounded-lg w-60'>
                    <div className='text-5xl text-white flex justify-center' >
                        <FaRProject />
                    </div>
                    <h2 id="counter2" className='font-heading font-bold text-3xl py-3' >273+</h2>
                    <h3 className='font-paragraph font-bold text-2xl' >Complete Projects</h3>
                </div>
                <div className='bg-slate-400 hover:bg-orange-400 text-center py-5 rounded-lg w-60'>
                    <div className='text-5xl text-white flex justify-center' >
                        <FaHandHoldingHeart />
                    </div>
                    <h2 id="counter3" className='font-heading font-bold text-3xl py-3' >432+</h2>
                    <h3 className='font-paragraph font-bold text-2xl' >Feedbacks</h3>
                </div>

            </div>

        </section>
    );
};

export default CounterUp;
