import React from 'react';
import { FaDharmachakra, FaDolly, FaGasPump, FaArrowRight } from 'react-icons/fa';
import logo from '../../../tools_img/logo_tools.png';
const Services = () => {
  return (
    <section className='services py-32'>
      <div className="flex text-center flex-col w-full border-opacity-50">
        <h2 className='font-heading text-4xl font-bold'>Awesome Service</h2>
        <div className="divider">
          <img className='w-10 h-10' src={logo} alt='img' />
        </div>
        <p className=' pb-8 font-paragraph'>High quality services
          of construction industries</p>
      </div>
      <div className='container justify-items-center mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 py-18'>
        <div className=" w-96 shadow-xl relative">
          <figure className="text-9xl flex justify-center pt-10 text-orange-400">
            <FaDharmachakra className='text-9xl p-8 bg-slate-400 rounded-full hover:bg-orange-400 text-white ease-in duration-300 hover:animate-spin' />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-2xl">Construction And Engineering</h2>
            <p className='text-justify font-paragraph pb-8 pt-2'>
              With a large-scale construction project, construction engineers play an essential role in designing and implementing complicated building plans. They may also oversee the development or maintenance of critical infrastructure, ranging from roads and bridges to dams and water supplies.
              <FaArrowRight className='absolute bottom-[-25px] left-[45%]  bg-orange-400 p-3 text-white text-5xl rounded-full' />
            </p>
          </div>
        </div>
        <div className=" w-96 shadow-xl relative">
          <figure className="text-9xl flex justify-center pt-10 text-orange-400">
            <FaDolly className='text-9xl p-8 bg-slate-400 rounded-full hover:bg-orange-400 text-white ease-in duration-300 hover:animate-spin' />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-2xl">Automotive And Manufacturing</h2>
            <p className='text-justify font-paragraph pb-8'>
              The industry is made up of companies and workers who manufacture and deliver cars, trucks, and other vehicles to companies that sell them. Companies in the automotive industry fall into one of two primary segments: car manufacturers and car parts manufacturers.
              <FaArrowRight className='absolute bottom-[-25px] left-[45%]  bg-orange-400 p-3 text-white text-5xl rounded-full' />
            </p>
          </div>
        </div>
        <div className=" w-96 shadow-xl relative">
          <figure className="text-9xl flex justify-center pt-10 text-orange-400">
            <FaGasPump className='text-9xl p-8 bg-slate-400 rounded-full hover:bg-orange-400 text-white ease-in duration-300 hover:animate-spin' />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-2xl">Construction And Engineering</h2>
            <p className='text-justify font-paragraph pb-8'>
              Construction engineering is a professional discipline that deals with the designing, planning, construction and management of infrastructures such as roads, tunnels, bridges, airports, railroads, facilities, buildings, dams, utilities and other projects.
              <FaArrowRight className='absolute bottom-[-25px] left-[45%]  bg-orange-400 p-3 text-white text-5xl rounded-full' />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;