import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayTools = ({ tool }) => {
    const { _id, img, name, description, minimumOrderQuantity, availableQuantity, price } = tool;
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/tools/${id}`);
    }
    return (
        <div className="w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt='img' /></figure>
            <div className="card-body">
                <h2 className="card-title font-heading">{name}</h2>
                <h2 className="card-title font-heading "><u>Min-O/Q : </u>{minimumOrderQuantity}</h2>
                <h2 className="card-title font-heading "><u>In-Stock :</u>{availableQuantity}</h2>
                <h3 className='font-heading font-bold'><u>Price :</u> $ {price} <small>(per/unit)</small></h3>
                <p className='text-justify font-paragraph'> <u>Info : </u>{description}</p>
                <div className="card-actions">
                    <button
                        onClick={() => navigateToPurchase(_id)}
                        className="btn capitalize border-0 btn-sm bg-accent text-xl font-heading font-bold"
                    >Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayTools;