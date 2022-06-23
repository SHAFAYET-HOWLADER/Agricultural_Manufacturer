import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ManageProductsRow = ({ tool, index }) => {
    const { _id, name, price } = tool;
    const [deleteTools, setDeleteTools] = useState([])
    const deleteProduct = (id) => {
        const proceed = window.confirm('are you sure? want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/tools/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = deleteTools.filter(tool => tool._id !== id)
                    toast.error('Successfully Deleted products')
                    setDeleteTools(remaining)

                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <span
                    onClick={() => deleteProduct(_id)}
                    className="rounded-lg bg-red-500 capitalize cursor-pointer btn-xs font-bold py-1 text-white">
                    Delete
                </span>
            </td>
        </tr>
    );
};

export default ManageProductsRow;