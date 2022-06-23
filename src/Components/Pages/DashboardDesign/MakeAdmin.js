import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AllUserRow from './AllUserRow';

const MakeAdmin = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <section>
            <u> <h3 className='text-xl font-paragraph font-bold text-center py-4 text-orange-400' >All Users</h3></u>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody className='font-heading font-bold'>

                        {
                            users.map((user, index) => <AllUserRow
                                index={index}
                                key={user._id}
                                refetch={refetch}
                                user={user}
                            ></AllUserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;