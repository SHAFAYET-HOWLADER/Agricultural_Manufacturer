import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AllUserRow = ({ user, index, refetch }) => {
    const [allUsers, setAllUsers] = useState([])
    const { _id, email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.status === 403) (
                    toast.error('')
                )
                return res.json('Failed to made an admin')
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made an admin')
                    refetch();
                }
            })
    }
    const deleteUser = (id) => {
        const proceed = window.confirm('are you sure? want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = allUsers.filter(allUser => allUser._id !== id);
                    setAllUsers(remaining)
                    console.log(data)
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' &&
                <button onClick={makeAdmin} className='btn btn-xs btn-sm capitalize btn-success font-paragraph font-bold'>Make Admin</button>
            }</td>
            <td><button
                onClick={() => deleteUser(_id)}
                className='btn btn-xs btn-sm capitalize btn-success font-paragraph font-bold'>Delete User</button>
            </td>
        </tr>
    );
};

export default AllUserRow;