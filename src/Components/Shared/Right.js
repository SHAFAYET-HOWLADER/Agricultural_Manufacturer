import React from 'react';

const Right = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='copyRight  bg-slate-300 py-4'>
            <div className=' container mx-auto text-center'>
                <p className=' font-heading font-xl font-bold  text-dark'>Copyright &copy; {year}. All right reserved. Design by HelloExpert</p>
            </div>
        </section>
    );
};

export default Right;