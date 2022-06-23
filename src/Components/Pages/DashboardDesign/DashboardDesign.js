import React from 'react';
import { FaHouseUser, FaRegStar, FaProductHunt, FaFirstOrder } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { GiShoppingCart } from 'react-icons/gi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import CustomLink from '../../CustomLink/CustomLink';

const DashboardDesign = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu overflow-y-auto w-48 bg-slate-300 text-base-content">
                    <li className='font-heading font-bold text-[16px]' ><CustomLink to='/dashboard' className='flex items-center'><GiShoppingCart className='text-yellow-600' />&nbsp;My orders</CustomLink></li>
                    <li className='font-heading font-bold text-[16px]' ><CustomLink to='/dashboard/myReviews' className='flex items-center'><FaRegStar className='text-yellow-600' />&nbsp;Add a review</CustomLink></li>
                    <li className='font-heading font-bold text-[16px]' ><CustomLink to='/dashboard/myProfile' className='flex items-center'><ImProfile className='text-yellow-600' />&nbsp;My profile</CustomLink></li>
                    {
                        admin && <>
                            <li className='font-heading font-bold text-[16px]' ><CustomLink to='/dashboard/makeAdmin' className='flex items-center'> <FaHouseUser className='text-green-600' /> &nbsp; All Users</CustomLink></li>
                            <li className='font-heading font-bold text-[16px]' ><CustomLink to='/dashboard/addProduct' className='flex items-center'><FaProductHunt className='text-yellow-600' />&nbsp;Add Product</CustomLink></li>
                            <li className='font-heading font-bold text-[16px]' ><CustomLink to='/dashboard/manageAllOrders' className='flex items-center'><FaFirstOrder className='text-green-600' />&nbsp;Manage All Orders</CustomLink></li>
                            <li className='font-heading font-bold text-[16px]' ><CustomLink to='/dashboard/manageProducts' className='flex items-center'><MdOutlineManageAccounts className='text-green-600' />&nbsp;Manage Products</CustomLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardDesign;

