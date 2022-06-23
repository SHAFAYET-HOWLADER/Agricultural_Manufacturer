import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageProductsRow from './ManageProductsRow';
const ManageProducts = () => {
    const { data: tools, isLoading } = useQuery('product', () => fetch('http://localhost:5000/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading />;
    }
    return (
        <section className='tools py-5'>
            <u> <h3 className='text-xl font-paragraph font-bold text-center py-4 text-orange-400' >Manage Products</h3></u>
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody className='font-heading font-bold'>
                            {
                                tools.map((tool, index) => <ManageProductsRow
                                    key={tool._id}
                                    tool={tool}
                                    index={index}
                                ></ManageProductsRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageProducts;
