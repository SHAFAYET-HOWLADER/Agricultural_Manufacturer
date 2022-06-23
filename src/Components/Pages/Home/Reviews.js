import React, { useEffect, useState } from 'react';
import DisplayCustomerReview from './DisplayCustomerReview';
import tree from '../../../tools_img/logo_tools.png';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='pt-24'>
            <div className='text-center'>
                <h2 className='font-heading text-4xl font-bold'>Satisfied Customer's Reviews</h2>
                <div className="divider">
                    <img className='w-10 h-10' src={tree} alt='img' />
                </div>
                <p className=' pb-8 font-paragraph'>Our satisfied customers expressed their experience using our product. </p>
            </div>
            <div className='container justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews && reviews.map(review => <DisplayCustomerReview
                        key={review._id}
                        review={review}
                    ></DisplayCustomerReview>)
                }
            </div>
        </section>
    );
};

export default Reviews;