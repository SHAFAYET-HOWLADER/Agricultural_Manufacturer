import React from 'react';
import { FaHandHoldingHeart, FaRegStar} from "react-icons/fa";

const DisplayCustomerReview = ({ review }) => {
    const {name, img, description, ratings } = review;
    return (
        <div className='review py-4'>
            <div className="w-96 bg-slate-200">
                <div className="card-body">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={img} alt='img' />
                        </div>
                    </div>
                    <h2 className="card-title font-paragraph">
                        {name}
                        <FaHandHoldingHeart className='text-orange-400' />
                        <small>Ratings : </small>{ratings}
                        <FaRegStar className='text-orange-500' />
                        <FaRegStar className='text-orange-500' />
                        <FaRegStar className='text-orange-500' />
                        <FaRegStar className='text-orange-500' />
                        <FaRegStar className='text-orange-500' />
                    </h2>
                    <p className="font-paragraph text-[16px]">{description.slice(0, 100)}</p>

                </div>
            </div>
        </div>
    );
};

export default DisplayCustomerReview;

