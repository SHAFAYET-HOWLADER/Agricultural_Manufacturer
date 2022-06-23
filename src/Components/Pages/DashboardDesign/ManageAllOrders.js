import React, { useEffect, useState } from 'react';
import ManageMyOrdersRow from './ManageMyOrdersRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setAllOrders(data)
                })
        }
    }, [user])
    return (
        <section className='allOrders'>
            <u> <h3 className='text-xl font-paragraph font-bold text-center py-4 text-orange-400'>Manage All Orders</h3></u>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='w-full' >
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>payment</th>
                            <th>Status</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody className='font-heading font-bold'>
                        {
                            allOrders.map((allOrder, index) => <ManageMyOrdersRow
                                key={allOrder._id}
                                index={index}
                                allOrder={allOrder}
                            ></ManageMyOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageAllOrders;