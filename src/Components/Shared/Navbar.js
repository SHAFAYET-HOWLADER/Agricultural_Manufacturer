import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../tools_img/logo_tools.png';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        navigate('/home')
        localStorage.removeItem('accessToken');
    }
    return (
        <div className="navbar bg-slate-300 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="font-paragraph font-medium uppercase text-xl menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><CustomLink to='/tools'>Tools</CustomLink></li>
                        <li><CustomLink to='/myPortfolio'>My Portfolio</CustomLink></li>
                        {
                            user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
                        }
                        {
                            user ? <button onClick={logOut} className="btn btn-sm mt-3">SignOut</button>
                                : <li><CustomLink to='/login'>Login</CustomLink></li>
                        }
                        <li><CustomLink to='/contact'>Contact</CustomLink></li>
                    </ul>
                </div>
                <Link to='/home' className="text-xl flex items-center">
                    <img className='h-10 w-10' src={logo} alt='img' />
                    <h3 className='text-2xl font-paragraph font-bold'>Agricultural</h3>
                    &nbsp;
                    <div className='invisible lg:visible'>
                        <small className='font-heading font-bold text-green-500'>Manufacturer</small>
                    </div>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="font-paragraph text-xl uppercase font-medium menu menu-horizontal p-0">
                    <li><CustomLink to='/tools'>Tools</CustomLink></li>
                    <li><CustomLink to='/myPortfolio'>My Portfolio</CustomLink></li>
                    <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
                    {
                        user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
                    }
                    {
                        user ?
                            <button onClick={logOut} className="btn btn-sm mt-3">SignOut</button>
                            :
                            <li><CustomLink to='/login'>Login</CustomLink></li>
                    }
                    <li><CustomLink to='/contact'>Contact</CustomLink></li>
                </ul>
            </div>
            <div className='navbar-center'>
                <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
