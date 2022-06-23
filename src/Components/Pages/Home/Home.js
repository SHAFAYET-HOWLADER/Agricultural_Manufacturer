import React from 'react';
import AboutCompany from './AboutCompany';
import Banner from './Banner';
import CounterUp from './CounterUp';
import Reviews from './Reviews';
import Services from './Services';
import TeamMembers from './TeanMembers/TeamMembers';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Tools/>
            <CounterUp/>
            <Reviews/>
            <Services/>
            <AboutCompany/>
            <TeamMembers/>
        </div>
    );
};

export default Home;