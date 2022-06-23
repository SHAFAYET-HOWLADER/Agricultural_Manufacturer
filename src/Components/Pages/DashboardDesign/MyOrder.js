import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    setMyOrders(data)
                })
        }
        else {
            return <Loading />
        }

    }, [user])
    const deleteOrder = (id) => {
        const proceed = window.confirm('are you sure? want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myOrders.filter(order => order._id !== id)
                    setMyOrders(remaining);
                    toast.success('Successfully deleted an items')
                    console.log(data)
                })
        }
    }
    return (
        <div className="overflow-x-auto bg-slate-100">
            <u> <h3 className='text-xl font-paragraph font-bold text-center py-4 text-orange-400' >My orders</h3></u>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Cancelling</th>
                    </tr>
                </thead>
                <tbody className='font-heading font-bold'>
                    {
                        myOrders.map((order, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.product}</td>
                            <td>${order.price}</td>
                            <td>
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                {(order.price && order.paid) && <Link to={``}><span className='text-success flex items-center'><FaCheck />&nbsp;Paid</span></Link>}
                            </td>
                            <td>
                                {
                                    (!order.paid) &&
                                    <button
                                        onClick={() => deleteOrder(order._id)}
                                        className="rounded-lg bg-red-500 capitalize btn-xs font-bold text-white">
                                        Cancel
                                    </button>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;