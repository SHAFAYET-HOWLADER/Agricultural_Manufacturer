import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ManageMyOrdersRow = ({ allOrder, index }) => {
    const { _id, name, email, product, price } = allOrder;
    const [deleteOrder, setDeleteOrder] = useState([]);
    const deleteOrders = (id) => {
        const proceed = window.confirm('are you sure? want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = deleteOrder.filter(cart => cart._id !== id);
                    setDeleteOrder(remaining);
                    toast.error('Successfully deleted order')
                    console.log(data)

                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <th>{email}</th>
            <td>{product}</td>
            <td>${price}</td>
            <td><button
                className='btn btn-xs btn-success'>Pending</button>
            </td>
            <td>
                <span
                    onClick={() => deleteOrders(_id)}
                    className="rounded-lg bg-red-500 capitalize cursor-pointer btn-xs font-bold py-1  text-white">
                    Delete
                </span>
            </td>
        </tr>
    );
};

export default ManageMyOrdersRow;