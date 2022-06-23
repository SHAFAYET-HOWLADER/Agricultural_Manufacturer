import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const Purchase = () => {
    const { toolsId } = useParams();
    const [tool, setTool] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolsId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    const setQuantity = (event) => {
        event.preventDefault();
        const orderQuantity = event.target.number.value;
        const minimumOrderQuantity = parseInt(tool.minimumOrderQuantity);
        const stockQuantity = parseInt(tool.availableQuantity);
        if (orderQuantity > stockQuantity) {
            toast.error('Failed to set place order')
        }
        else if (orderQuantity < minimumOrderQuantity) {
            toast.error('please set at least 100')
        }
        else {
            toast.success('Successfully set order quantity')
        }
        event.target.reset();
    }
    const placeOrder = (event) => {
        event.preventDefault();
        const productId = tool._id;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.number.value;
        const address = event.target.address.value;
        const product = event.target.product.value;
        const price = tool.price;
        const customer = {
            name,
            email,
            phone,
            address,
            product,
            productId,
            price
        }
        //post order
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully placed an order')
                }
                else {
                    toast.error('Failed to place an order')
                }
                event.target.reset();
                console.log(data)
            })
    }
    return (

        <section className='detailsTool py-16'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold font-paragraph pb-4'>Purchase by <u>{tool.name}</u></h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className="w-96 container mx-auto shadow-xl">
                    <figure><img src={tool.img} alt='img' /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-heading">{tool.name}</h2>
                        <form onSubmit={setQuantity}>
                            <h2 className="card-title font-heading "><u>Min-O/Q : </u>
                                <h2 className="card-title font-heading">{tool.minimumOrderQuantity}</h2>
                                &nbsp;
                                <input className='w-32 max-w-xs border border-accent pl-3' type='number' name='number' placeholder='100' />
                            </h2>
                            <h2 id='stock' name='stock' className="card-title font-heading "><u>In-Stock :</u>{tool.availableQuantity}</h2>
                            <input type='submit' value='Set Quantity' className='btn w-full btn-sm btn-primary mt-4 font-paragraph font-bold' />
                        </form>
                        <h3 className='font-heading font-bold'><u>Price :</u> $ {tool.price}&nbsp;<small>(per/unit)</small></h3>
                        <p className='text-justify font-paragraph'> <u>Info : </u>{tool.description}</p>
                    </div>
                </div>
                <div>
                    <div className="hero min-h-screen bg-accent">
                        <div className="hero-content flex-col  lg:flex-row-reverse">
                            <div className="flex-shrink-0 w-full bg-base-300 max-w-sm shadow-2xl">
                                <div className="card-body">
                                    <form onSubmit={placeOrder}>
                                        <h3 className='text-1xl font-bold font-paragraph'>Please fill up the information below</h3>
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" className="input w-full  input-bordered" />
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' value={user.email} placeholder="Email" className="input w-full  input-bordered" readOnly disabled />
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" name='product' value={tool.name} className="input w-full  input-bordered" readOnly disabled />
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <textarea type="text" name='address' placeholder="Your Address" className="input w-full  input-bordered" required />
                                        <label className="label">
                                            <span className="label-text">Number</span>
                                        </label>
                                        <input type="number" name='number' placeholder="Your Number" className="input w-full  input-bordered" required />
                                        <input type='submit' value='Place Order' className='w-full btn btn-primary mt-4' />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className='font-paragraph text-2xl font-bold'>Welcome to purchase page!</h3>
                    <strong className='font-paragraph font-bold'>Name : {user.displayName}</strong>
                    <br />
                    <strong className="py-6 font-paragraph  font-bold">Email: {user.email}</strong>
                </div>
            </div>
        </section>
    );
};

export default Purchase;