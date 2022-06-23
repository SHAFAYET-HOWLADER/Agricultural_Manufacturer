import React from 'react';
import { useQuery } from 'react-query';
import {loadStripe} from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import {Elements} from "@stripe/react-stripe-js"
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const stripePromise = loadStripe('pk_test_51L2uMXIEXx9OcHaTtq3cdFkRSTmeeu7SNQEGaJs22YUra4iPBCWzv5b5JfHDXVDOfkVV43Jk4zPutlNwAPEMLOTI00sr8SM3Bb');
const Payment = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const { paymentId } = useParams();
    const url = `http://localhost:5000/orders/${paymentId}`
    const { data: appointment, isLoading } = useQuery(['orders', paymentId], () => fetch(url, {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="px-16 mt-32">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-slate-300 p-4 text-center">
                        <h2 className="text-2xl font-paragraph font-bold">Hello, {appointment.name} !</h2>
                        <h2 className="text-xl font-paragraph font-bold">please pay for {appointment.product}</h2>
                        <p className="text-xl font-paragraph font-bold">Price : $ {appointment.price}</p>                     
                    </div>
                
                    <div className="shadow-lg p-4">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm appointment={appointment}/>
                        </Elements>
                    </div>                
            </div>
        </section>

    );
};

export default Payment;