import React from 'react';

const OwnerInfo = ({owner}) => {
    const {education,img,number,linkedinProfile,country} = owner;
    return (
        <div className=''>
            <img className='w-24 h-24 rounded-full ml-[235px]' src={img} alt='img'/>
            <p className='font-bold font-paragraph'>Education : {education}</p>
            <p className='font-bold font-paragraph'>Country : {country}</p>
            <p className='font-bold font-paragraph'>Social Link : {linkedinProfile}</p>
            <p className='font-bold font-paragraph pb-2'>Contact-Info : {number}</p>
        </div>
    );
};

export default OwnerInfo;
