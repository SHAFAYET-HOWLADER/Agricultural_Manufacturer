import React from 'react';

const NotAvailable = () => {
    return (
        <section className='404 bg-slate-100 py-32'>
            <div className='errorMsg flex flex-col justify-center items-center'>
                <div>
                    <h3 className='text-4xl font-bold font-paragraph text-red-500'>
                        Opps!
                    </h3>
                    <h4 className='text-2xl font-bold font-paragraph'>It seems error routing search...</h4>
                    <p className='text-1xl font-paragraph font-bold'>Please confirm your search location</p>
                </div>
                <div>
                    <h2 className='animate-bounce text-4xl text-center font-bold font-paragraph pt-10 text-orange-500'>
                        404!
                    </h2>
                    <h4 className='text-4xl font-bold font-paragraph text-red-500'>Not available</h4>
                </div>
            </div>
        </section>
    );
};

export default NotAvailable;